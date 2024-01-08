export default function hasValuesFromArray(xSet, xArray) {
  return xArray.every((ele) => xSet.has(ele));
}
