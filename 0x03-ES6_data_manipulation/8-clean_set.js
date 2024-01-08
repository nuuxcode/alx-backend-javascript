export default function cleanSet(xSet, xStartString) {
  if (!xSet || !xStartString) {
    return '';
  }
  if (xSet instanceof Set !== true || typeof xStartString !== 'string') {
    return '';
  }
  return Array.from(xSet)
    .filter((ele) => ele.startsWith(xStartString) && xStartString.length > 0)
    .map((ele) => ele.replace(xStartString, ''))
    .join('-');
}
