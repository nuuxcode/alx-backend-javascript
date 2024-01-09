export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((v, k) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });
  return map;
}
