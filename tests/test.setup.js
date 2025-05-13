import { randomUUID } from 'node:crypto'; // Node.js built-in crypto
global.crypto = { randomUUID }; // Mock or polyfill necessary crypto functions
