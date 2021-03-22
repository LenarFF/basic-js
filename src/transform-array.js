
module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error('ERROR');
  const newArr = [];
  const contrArray = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) {
    i++;
    continue
  }
  if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined) {
    if (arr[i - 2] === '--discard-next') continue
    newArr.pop();
    continue
  }
  if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
    newArr.push(arr[i + 1]);
    continue
  }
  if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
    if (arr[i - 2] === '--discard-next') continue
    newArr.push(arr[i - 1]);
    continue
  }
  if (!contrArray.includes(arr[i])) newArr.push(arr[i])
}
return newArr
};
