export default function cleanSet(xSet, xStartString) {
  if (!xSet || !xStartString || typeof xStartString !== 'string' || xStartString.length === 0) {
    return '';
  }
  if (xSet instanceof Set !== true || Array.from(xSet).some(ele => typeof ele !== 'string')) {
    return '';
  }
  return Array.from(xSet)
    .filter((ele) => ele.startsWith(xStartString) && xStartString.length > 0)
    .map((ele) => ele.replace(xStartString, ''))
    .join('-');
}
