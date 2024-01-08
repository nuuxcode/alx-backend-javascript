export default function cleanSet(xSet, xStartString) {
  if (!xStartString || typeof xStartString !== 'string' || xStartString.length === 0) {
    return '';
  }
  if (!xSet || xSet instanceof Set !== true) {
    return '';
  }
  return Array.from(xSet)
    .filter((ele) => ele.startsWith(xStartString) && ele.length > 0)
    .map((ele) => ele.replace(xStartString, ''))
    .join('-');
}
