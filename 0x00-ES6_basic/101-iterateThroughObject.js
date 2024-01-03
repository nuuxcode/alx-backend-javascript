export default function iterateThroughObject(reportWithIterator) {
  const returnString = [];
  for (const report of reportWithIterator) {
    returnString.push(report);
  }
  return returnString.join(' | ');
}
