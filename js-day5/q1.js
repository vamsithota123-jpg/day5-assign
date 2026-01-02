function deepFlatten(arr) {
  var result = [];

  function helper(input) {
    for (var i = 0; i < input.length; i++) {
      if (Array.isArray(input[i])) {
        helper(input[i]);
      } else {
        result.push(input[i]);
      }
    }
  }

  helper(arr);
  return result;
}
//test
const nested = [1, [2, [3, [4, 5]], 6], [7, 8], 9, [[10]]];

console.log(deepFlatten(nested));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
