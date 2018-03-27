const swap = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};

const partition = (array, idxL, idxR) => {
  const pivot = array[Math.floor((idxL + idxR) / 2)];
  const idx = {
    left: idxL,
    right: idxR,
  };
  while (idx.left <= idx.right) {
    while (array[idx.left] < pivot) idx.left += 1;
    while (array[idx.right] > pivot) idx.right -= 1;
    if (idx.left <= idx.right) {
      swap(array, idx.left, idx.right);
      idx.left += 1;
      idx.right -= 1;
    }
  }
  return idx.left;
};

const quicksort = (array, idxL = 0, idxR = array.length - 1) => {
  if (array.length > 1) {
    const idx = {
      left: idxL,
      right: idxR,
    };
    const part = partition(array, idx.left, idx.right);
    if (idx.left < part.left) quicksort(array, idx.left, part.left);
    if (idx.right > part.right) quicksort(array, part.right, idx.right);
  }
  return array;
};

console.log(quicksort([34, 65, 75, 23, 62, 8, 2354, 62, 6, 7, 8, 234, 5, 1636]));
