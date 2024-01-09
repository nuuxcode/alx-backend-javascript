const weakMap = new WeakMap();
const queryAPI = (endpoint) => {
  const counter = (weakMap.get(endpoint) || 0) + 1;
  if (counter >= 5) throw new Error('Endpoint load is hight');
  weakMap.set(endpoint, counter);
};
export { weakMap, queryAPI };
