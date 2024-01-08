export default function cleanSet(xSet, xStartString) {
  if (!xSet || !xStartString || !(xSet instanceof Set) || typeof xStartString !== 'string') {
    return '';
  }
  return Array.from(xSet)
    .filter((ele) => ele && ele.startsWith(xStartString))
    .map((ele) => ele.replace(xStartString, ''))
    .join('-');
}
