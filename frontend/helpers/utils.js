export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const right = [...arr];

  const middlePoint = arr.length / 2;
  const left = right.splice(0, middlePoint);

  return mergeUnsortedArrs(mergeSort(left), mergeSort(right));
};

const mergeUnsortedArrs = (left, right) => {
  const sortedItems = [];

  while (left.length && right.length) {
    if (left[0].numberOfPurchases <= right[0].numberOfPurchases) {
      sortedItems.push(left.shift());
    } else {
      sortedItems.push(right.shift());
    }
  }

  return [...sortedItems, ...left, ...right];
};
