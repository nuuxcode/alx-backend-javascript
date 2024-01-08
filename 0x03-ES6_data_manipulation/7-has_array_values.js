export default function hasValuesFromArray(xSet, xArray) {
  for (const ele of xArray) {
    if (!xSet.has(ele)) {
      return false;
    }
  }
  return true;
}
