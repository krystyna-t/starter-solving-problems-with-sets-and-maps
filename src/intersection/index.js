// time complexity: O(n)
function intersection(a, b) {
  const aElements = new Map();
  const common = new Set();

  for (let element of a) {
    aElements.set(element);
  }

  for (let element of b) {
    if (aElements.has(element)) {
      common.add(element);
    }
  }

  return [...common];
  // or: return Array.from(results);
}

module.exports = intersection;
