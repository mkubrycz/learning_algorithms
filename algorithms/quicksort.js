function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((left + right) / 2)];
  let l = left;
  let r = right;
  while (l <= r) {
    while (items[l] < pivot) {
      l += 1;
    }
    while (items[r] > pivot) {
      r -= 1;
    }
    if (l <= r) {
      swap(items, l, r);
      l += 1;
      r -= 1;
    }
  }
  return l;
}

function quickSort(arr, lidx, ridx) {
  const left = typeof lidx === 'number' ? lidx : 0;
  const right = typeof ridx === 'number' ? ridx : arr.length - 1;
  if (arr.length > 1) {
    const index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

console.log(quickSort([6, 9, 23, 3564, 0, 4, 99, 11, 25, 74, 939, 35, 1, 643, 3, 75]));
