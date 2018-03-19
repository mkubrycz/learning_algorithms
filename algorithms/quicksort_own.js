const swap = (array, idx1, idx2) => {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
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

const quicksort = (array) => {
  if (array.length > 1) {
    const idx = {
      left: 0,
      right: array.length - 1,
    };
    const part = {
      left: partition(array, idx.left, idx.right),
    };
    part.right = part.left - 1;
    while (part.right > 1 || part.left < array.length - 1) {
      if (idx.left < part.right) part.right = partition(array, idx.left, part.right);
      if (idx.right > part.left) part.left = partition(array, part.left, idx.right);
    }
  }
  return array;
};

console.log(quicksort([34, 65, 75, 23, 62, 8, 2354, 62, 6, 7, 8, 234, 5, 1636]));
