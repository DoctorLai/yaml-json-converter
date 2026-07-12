import '@testing-library/jest-dom/vitest';
import { randomUUID } from 'node:crypto';

if (!globalThis.crypto?.randomUUID) {
  Object.defineProperty(globalThis, 'crypto', {
    value: { randomUUID },
    configurable: true,
  });
}

// jsdom only implements requestAnimationFrame when pretendToBeVisual is set,
// so provide a small polyfill for the Tab-key cursor handling in App.
if (!globalThis.requestAnimationFrame) {
  globalThis.requestAnimationFrame = (cb) =>
    setTimeout(() => cb(Date.now()), 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
}
