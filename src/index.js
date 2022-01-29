module.exports = function towelSort (matrix) {
  let arr = []
  if (towelSort.arguments.length != 0) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        arr.push(matrix[i].map(e => e));
      } else {
        arr.push(matrix[i].reverse().map(e => e));
      }
    }
  }
  
  return arr.flat();
}
