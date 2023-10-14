function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    if (seenNumbers.has(difference)) {
      return true;
    }
    seenNumbers.add(array[i]);
  }

  return false;
}

module.exports = hasTargetSum;
