import polyfills from '@triplit/react-native/polyfills';
import structuredClone from "@ungap/structured-clone";
if (!("structuredClone" in globalThis)) {
  globalThis.structuredClone = structuredClone;
}

console.log('polyfills', polyfills)

import 'expo-router/entry';

