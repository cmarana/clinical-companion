type StorageKind = "localStorage" | "sessionStorage";

const createMemoryStorage = (): Storage => {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(String(key), String(value));
    },
  };
};

const localFallback = createMemoryStorage();
const sessionFallback = createMemoryStorage();

const getFallback = (kind: StorageKind) =>
  kind === "localStorage" ? localFallback : sessionFallback;

const canUseStorage = (kind: StorageKind) => {
  if (typeof window === "undefined") return false;

  try {
    const storage = window[kind];
    const probeKey = `__medcore_${kind}_probe__`;
    storage.setItem(probeKey, "1");
    storage.removeItem(probeKey);
    return true;
  } catch {
    return false;
  }
};

export const installStorageFallbacks = () => {
  if (typeof window === "undefined") return;

  (["localStorage", "sessionStorage"] as const).forEach((kind) => {
    if (canUseStorage(kind)) return;

    try {
      Object.defineProperty(window, kind, {
        configurable: true,
        enumerable: true,
        value: getFallback(kind),
      });
    } catch {
      // Ignore: consumers can still use the exported safe storages below.
    }
  });
};

export const safeLocalStorage: Storage = (() => {
  try {
    return canUseStorage("localStorage") ? window.localStorage : localFallback;
  } catch {
    return localFallback;
  }
})();

export const safeSessionStorage: Storage = (() => {
  try {
    return canUseStorage("sessionStorage") ? window.sessionStorage : sessionFallback;
  } catch {
    return sessionFallback;
  }
})();