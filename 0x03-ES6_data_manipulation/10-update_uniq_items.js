export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [k, v] of map.entries()) {
    if (v === 1) map.set(k, 100);
  }
  return map;
}
