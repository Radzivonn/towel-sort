module.exports = function towelSort (matrix) {
  let sorted_arr = [], vec = 1;
  for (let i in matrix) {
    arr = matrix[i];
    if(vec > 0) for (let i = 0; i < arr.length; i += vec) sorted_arr.push(arr[i]);
    else for (let i = arr.length - 1; i >= 0; i += vec) sorted_arr.push(arr[i]);
    vec = -vec;
  }
  return sorted_arr;
}
