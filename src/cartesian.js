function cartesian(arr) {
  let result = [[]];
  for (let i = 0; i < arr.length; i += 1) {
    const cur = Array.isArray(arr[i]) ? arr[i] : [arr[i]];
    const newResult = [];
    for (let j = 0; j < result.length; j += 1) {
      for (let k = 0; k < cur.length; k += 1) {
        newResult.push(result[j].concat(cur[k]));
      }
    }
    result = newResult;
  }
  return result;
}

module.exports = {
  cartesian,
};
