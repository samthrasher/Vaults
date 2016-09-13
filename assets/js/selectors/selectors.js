export const findByKey = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].key === key)
      return i;
  }
  return -1;
};
