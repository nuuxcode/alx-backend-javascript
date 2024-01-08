export default function cleanSet(xSet, xStartString) {
  return Array.from(xSet)
    .filter(ele => ele.startsWith(xStartString) && xStartString.length > 0)
    .map(ele => ele.replace(xStartString, ''))
    .join('-');
}
