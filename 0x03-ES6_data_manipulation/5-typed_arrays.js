export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array.fill(value, position, position + 1);
  return new DataView(buffer);
}
