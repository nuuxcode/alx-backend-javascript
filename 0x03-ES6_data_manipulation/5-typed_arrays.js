export default function createInt8TypedArray(length, position, value) {
  const xint8Array = new Int8Array(length);
  xint8Array.fill(value, position, position + 1);
  return new DataView(xint8Array.buffer);
}
