
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];

  return matrix.flatMap((arr, index) => {
    return index % 2 == 0 ? arr : arr.reverse();
  });
}
