export default function updateUniqueItems(map) {
  map.forEach((v, k) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });
  return map;
}
