import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set([]), ''));
console.log(cleanSet());
console.log(cleanSet(new Set(['bonjovi']), 'bon'));
console.log(cleanSet(new Set(['bonbon']), 'bon'));
