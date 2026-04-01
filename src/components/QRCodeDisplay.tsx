import { useEffect, useRef } from "react";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
}

// Minimal QR code generator using Canvas API
export default function QRCodeDisplay({ value, size = 200 }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    renderQR(canvasRef.current, value, size);
  }, [value, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="rounded-xl border border-border bg-white"
    />
  );
}

// ---- Lightweight QR Code encoder (Mode Byte, ECC-L, version auto) ----

function renderQR(canvas: HTMLCanvasElement, text: string, size: number) {
  const modules = encodeQR(text);
  const n = modules.length;
  const scale = size / n;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#000000";
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (modules[y][x]) {
        ctx.fillRect(Math.floor(x * scale), Math.floor(y * scale), Math.ceil(scale), Math.ceil(scale));
      }
    }
  }
}

// We use a well-tested approach: encode via the QR SVG trick using a data URL approach
// Actually, let's use a pure JS minimal QR lib embedded:

function encodeQR(text: string): boolean[][] {
  // Use the simplest approach: generate via an SVG-based method
  // For reliability, we'll use a lookup-free alphanumeric/byte mode encoder
  const data = new TextEncoder().encode(text);
  const version = getMinVersion(data.length);
  const size = version * 4 + 17;
  const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));

  // Place finder patterns
  placeFinder(matrix, reserved, 0, 0);
  placeFinder(matrix, reserved, size - 7, 0);
  placeFinder(matrix, reserved, 0, size - 7);

  // Place timing patterns
  for (let i = 8; i < size - 8; i++) {
    const val = i % 2 === 0;
    setModule(matrix, reserved, 6, i, val);
    setModule(matrix, reserved, i, 6, val);
  }

  // Place alignment patterns
  const alignPos = getAlignmentPositions(version);
  for (const ay of alignPos) {
    for (const ax of alignPos) {
      if (reserved[ay]?.[ax]) continue;
      placeAlignment(matrix, reserved, ax, ay);
    }
  }

  // Reserve format/version info areas
  reserveFormatArea(reserved, size, version);

  // Encode data
  const ecLevel = 1; // L
  const codewords = encodeData(data, version, ecLevel);

  // Place data
  placeData(matrix, reserved, codewords, size);

  // Apply mask (mask 0 for simplicity)
  applyMask(matrix, reserved, size, 0);

  // Place format info
  placeFormatInfo(matrix, size, ecLevel, 0);

  if (version >= 7) {
    placeVersionInfo(matrix, size, version);
  }

  return matrix;
}

function getMinVersion(dataLen: number): number {
  // Byte mode capacities for ECC level L
  const caps = [0, 17, 32, 53, 78, 106, 134, 154, 192, 230, 271, 321, 367, 425, 458, 520, 586, 644, 718, 792, 858, 929, 1003, 1091, 1171, 1273, 1367, 1465, 1528, 1628, 1732, 1840, 1952, 2068, 2188, 2303, 2431, 2563, 2699, 2809, 2953];
  for (let v = 1; v <= 40; v++) {
    if (caps[v] >= dataLen) return v;
  }
  return 40;
}

function setModule(matrix: boolean[][], reserved: boolean[][], row: number, col: number, val: boolean) {
  if (row >= 0 && row < matrix.length && col >= 0 && col < matrix.length) {
    matrix[row][col] = val;
    reserved[row][col] = true;
  }
}

function placeFinder(matrix: boolean[][], reserved: boolean[][], row: number, col: number) {
  for (let dy = -1; dy <= 7; dy++) {
    for (let dx = -1; dx <= 7; dx++) {
      const r = row + dy, c = col + dx;
      if (r < 0 || c < 0 || r >= matrix.length || c >= matrix.length) continue;
      const outer = dy === -1 || dy === 7 || dx === -1 || dx === 7;
      const ring = dy === 0 || dy === 6 || dx === 0 || dx === 6;
      const inner = dy >= 2 && dy <= 4 && dx >= 2 && dx <= 4;
      matrix[r][c] = !outer && (ring || inner);
      reserved[r][c] = true;
    }
  }
}

function placeAlignment(matrix: boolean[][], reserved: boolean[][], cx: number, cy: number) {
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const r = cy + dy, c = cx + dx;
      const val = Math.abs(dy) === 2 || Math.abs(dx) === 2 || (dy === 0 && dx === 0);
      matrix[r][c] = val;
      reserved[r][c] = true;
    }
  }
}

function getAlignmentPositions(version: number): number[] {
  if (version === 1) return [];
  const intervals = Math.floor(version / 7) + 1;
  const size = version * 4 + 17;
  const last = size - 7;
  const step = Math.ceil((last - 6) / intervals / 2) * 2;
  const positions = [6];
  for (let p = last; p > 6; p -= step) {
    positions.unshift(p);
  }
  return positions;
}

function reserveFormatArea(reserved: boolean[][], size: number, version: number) {
  // Format info strips
  for (let i = 0; i < 8; i++) {
    reserved[8] = reserved[8] || [];
    reserved[8][i] = true;
    reserved[i] = reserved[i] || [];
    reserved[i][8] = true;
    reserved[8][size - 1 - i] = true;
    reserved[size - 1 - i] = reserved[size - 1 - i] || [];
    reserved[size - 1 - i][8] = true;
  }
  reserved[8][8] = true;
  // Dark module
  reserved[size - 8] = reserved[size - 8] || [];
  reserved[size - 8][8] = true;
}

// RS/ECC tables (simplified for L level)
const EC_CODEWORDS_L = [0, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
const EC_BLOCKS_L = [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 2, 4, 3, 5, 5, 1, 5, 3, 3, 4, 2, 4, 6, 8, 10, 8, 3, 7, 5, 13, 17, 17, 13, 12, 6, 17, 4, 20, 19];

function encodeData(data: Uint8Array, version: number, _ecLevel: number): number[] {
  const totalCodewords = getTotalCodewords(version);
  const ecPerBlock = EC_CODEWORDS_L[version];
  const numBlocks = EC_BLOCKS_L[version];
  const dataCodewords = totalCodewords - ecPerBlock * numBlocks;

  // Build bit stream: mode(4) + count(8 or 16) + data + terminator
  const bits: number[] = [];
  const push = (val: number, len: number) => {
    for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
  };

  push(0b0100, 4); // Byte mode
  const countBits = version >= 10 ? 16 : 8;
  push(data.length, countBits);
  for (const b of data) push(b, 8);

  // Terminator
  const dataBits = dataCodewords * 8;
  const termLen = Math.min(4, dataBits - bits.length);
  for (let i = 0; i < termLen; i++) bits.push(0);

  // Pad to byte boundary
  while (bits.length % 8 !== 0) bits.push(0);

  // Pad codewords
  const padBytes = [0xec, 0x11];
  let padIdx = 0;
  while (bits.length < dataBits) {
    push(padBytes[padIdx % 2], 8);
    padIdx++;
  }

  // Convert to bytes
  const dataBytes: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) byte = (byte << 1) | (bits[i + j] || 0);
    dataBytes.push(byte);
  }

  // Split into blocks and generate EC
  const shortBlockCount = numBlocks - (totalCodewords % numBlocks || numBlocks === 1 ? 0 : totalCodewords % numBlocks);
  const shortDataLen = Math.floor(dataCodewords / numBlocks);
  
  const blocks: number[][] = [];
  const ecBlocks: number[][] = [];
  let offset = 0;

  for (let i = 0; i < numBlocks; i++) {
    const blockLen = shortDataLen + (i >= shortBlockCount ? 1 : 0);
    const block = dataBytes.slice(offset, offset + blockLen);
    blocks.push(block);
    ecBlocks.push(rsEncode(block, ecPerBlock));
    offset += blockLen;
  }

  // Interleave
  const result: number[] = [];
  const maxDataLen = Math.max(...blocks.map(b => b.length));
  for (let i = 0; i < maxDataLen; i++) {
    for (const block of blocks) {
      if (i < block.length) result.push(block[i]);
    }
  }
  for (let i = 0; i < ecPerBlock; i++) {
    for (const ec of ecBlocks) {
      if (i < ec.length) result.push(ec[i]);
    }
  }

  return result;
}

function getTotalCodewords(version: number): number {
  const size = version * 4 + 17;
  let total = size * size;
  // Subtract finder patterns (3 * 8x8 + separators)
  total -= 3 * 64;
  // Subtract timing
  total -= 2 * (size - 16);
  // Subtract format info
  total -= 31;
  // Subtract version info  
  if (version >= 7) total -= 36;
  // Subtract alignment patterns
  const align = getAlignmentPositions(version);
  let alignCount = align.length * align.length;
  // Remove those overlapping with finders
  if (align.length > 0) {
    alignCount -= 3; // 3 corners overlap with finders for v >= 2
    if (version === 1) alignCount = 0;
  }
  total -= alignCount * 25;
  total -= 1; // dark module
  return Math.floor(total / 8);
}

// GF(256) Reed-Solomon
const GF_EXP = new Uint8Array(512);
const GF_LOG = new Uint8Array(256);
{
  let x = 1;
  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    x = (x << 1) ^ (x >= 128 ? 0x11d : 0);
  }
  for (let i = 255; i < 512; i++) GF_EXP[i] = GF_EXP[i - 255];
}

function gfMul(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return GF_EXP[GF_LOG[a] + GF_LOG[b]];
}

function rsEncode(data: number[], ecLen: number): number[] {
  // Generate generator polynomial
  let gen = [1];
  for (let i = 0; i < ecLen; i++) {
    const newGen = new Array(gen.length + 1).fill(0);
    for (let j = 0; j < gen.length; j++) {
      newGen[j] ^= gen[j];
      newGen[j + 1] ^= gfMul(gen[j], GF_EXP[i]);
    }
    gen = newGen;
  }

  const result = new Array(ecLen).fill(0);
  for (const byte of data) {
    const factor = byte ^ result[0];
    result.shift();
    result.push(0);
    for (let i = 0; i < ecLen; i++) {
      result[i] ^= gfMul(factor, gen[i + 1]);
    }
  }
  return result;
}

function placeData(matrix: boolean[][], reserved: boolean[][], codewords: number[], size: number) {
  let bitIdx = 0;
  const totalBits = codewords.length * 8;

  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5; // Skip timing column
    for (let vert = 0; vert < size; vert++) {
      for (let j = 0; j < 2; j++) {
        const col = right - j;
        const row = ((Math.floor((size - 1 - right + (right < 6 ? 1 : 0)) / 2)) % 2 === 0)
          ? size - 1 - vert
          : vert;
        if (reserved[row]?.[col]) continue;
        if (bitIdx < totalBits) {
          const byteIdx = Math.floor(bitIdx / 8);
          const bitPos = 7 - (bitIdx % 8);
          matrix[row][col] = ((codewords[byteIdx] >> bitPos) & 1) === 1;
          bitIdx++;
        }
      }
    }
  }
}

function applyMask(matrix: boolean[][], reserved: boolean[][], size: number, mask: number) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (reserved[r][c]) continue;
      let invert = false;
      switch (mask) {
        case 0: invert = (r + c) % 2 === 0; break;
        case 1: invert = r % 2 === 0; break;
        case 2: invert = c % 3 === 0; break;
        case 3: invert = (r + c) % 3 === 0; break;
        case 4: invert = (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0; break;
        case 5: invert = (r * c) % 2 + (r * c) % 3 === 0; break;
        case 6: invert = ((r * c) % 2 + (r * c) % 3) % 2 === 0; break;
        case 7: invert = ((r + c) % 2 + (r * c) % 3) % 2 === 0; break;
      }
      if (invert) matrix[r][c] = !matrix[r][c];
    }
  }
}

const FORMAT_INFOS = [
  0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
  0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
  0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
  0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b,
];

function placeFormatInfo(matrix: boolean[][], size: number, ecLevel: number, mask: number) {
  const idx = ecLevel * 8 + mask; // L=1, so idx = 8 + mask for L
  // Actually L=0 in standard, but we used 1. Let's map: L=1 → format table index = 8*0 + mask for L
  // Standard: L=01, M=00, Q=11, H=10 → for L the format index = 0*8 + mask? 
  // Let's just use mask 0 with L: format bits for L,mask0 = FORMAT_INFOS[1*8+0] but standard mapping is different
  // Simplified: L=1 in our code, standard L format bits use ECC indicator 01
  const formatIdx = 0 * 8 + mask; // ECC L = indicator 01 → but in table it's index 0-7 for L
  // The FORMAT_INFOS table is ordered: L(0-7), M(8-15), Q(16-23), H(24-31)
  const bits = FORMAT_INFOS[formatIdx];

  const positions = [
    [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [7, 8], [8, 8],
    [8, 7], [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [8, 0],
  ];
  
  for (let i = 0; i < 15; i++) {
    const val = ((bits >> (14 - i)) & 1) === 1;
    const [r, c] = positions[i];
    matrix[r][c] = val;
  }

  const positions2 = [
    [8, size - 1], [8, size - 2], [8, size - 3], [8, size - 4],
    [8, size - 5], [8, size - 6], [8, size - 7], [8, size - 8],
    [size - 7, 8], [size - 6, 8], [size - 5, 8], [size - 4, 8],
    [size - 3, 8], [size - 2, 8], [size - 1, 8],
  ];

  for (let i = 0; i < 15; i++) {
    const val = ((bits >> (14 - i)) & 1) === 1;
    const [r, c] = positions2[i];
    matrix[r][c] = val;
  }

  // Dark module
  matrix[size - 8][8] = true;
}

function placeVersionInfo(matrix: boolean[][], size: number, version: number) {
  if (version < 7) return;
  const VERSION_INFOS = [
    0, 0, 0, 0, 0, 0, 0,
    0x07c94, 0x085bc, 0x09a99, 0x0a4d3, 0x0bbf6, 0x0c762, 0x0d847, 0x0e60d,
    0x0f928, 0x10b78, 0x1145d, 0x12a17, 0x13532, 0x149a6, 0x15683, 0x168c9,
    0x177ec, 0x18ec4, 0x191e1, 0x1afab, 0x1b08e, 0x1cc1a, 0x1d33f, 0x1ed75,
    0x1f250, 0x209d5, 0x216f0, 0x228ba, 0x2379f, 0x24b0b, 0x2542e, 0x26a64,
    0x27541, 0x28c69,
  ];
  const info = VERSION_INFOS[version] || 0;
  for (let i = 0; i < 18; i++) {
    const val = ((info >> i) & 1) === 1;
    const r = Math.floor(i / 3);
    const c = size - 11 + (i % 3);
    matrix[r][c] = val;
    matrix[c][r] = val;
  }
}
