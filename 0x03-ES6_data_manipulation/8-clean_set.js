export default function cleanSet(xSet, xStartString) {
  const results = [];
  xSet.forEach((ele) => {
    if (ele.startsWith(xStartString) && xStartString.length > 0) {
      results.push(ele);
    }
  });
  return results.join('-').split(xStartString).join('');
}
