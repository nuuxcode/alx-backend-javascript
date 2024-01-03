export default function appendToEachArrayValue(array, appendString) {
  const returnArray = [];
  for (const idx of array) {
    returnArray.push(appendString + idx);
  }

  return returnArray;
}
