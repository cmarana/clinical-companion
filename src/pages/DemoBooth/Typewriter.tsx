import { useEffect, useState } from "react";

export function useTypewriter(text: string, active: boolean, speed = 140) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) {
      setOut("");
      return;
    }
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return out;
}

export function useStreamingText(text: string, active: boolean, speed = 38) {
  return useTypewriter(text, active, speed);
}
