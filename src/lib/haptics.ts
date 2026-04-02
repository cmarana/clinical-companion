/**
 * Haptic feedback utility using the Vibration API.
 * Falls back silently on unsupported devices.
 */

export function hapticLight() {
  try {
    navigator?.vibrate?.(10);
  } catch {}
}

export function hapticMedium() {
  try {
    navigator?.vibrate?.(25);
  } catch {}
}

export function hapticHeavy() {
  try {
    navigator?.vibrate?.(50);
  } catch {}
}

export function hapticPattern(pattern: number[]) {
  try {
    navigator?.vibrate?.(pattern);
  } catch {}
}
