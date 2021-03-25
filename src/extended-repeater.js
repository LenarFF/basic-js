
module.exports = function repeater(str, options) {
  let sep = options.separator ? options.separator : '+';
  let addSep = options.additionSeparator ? options.additionSeparator : '|';
  let times = options.repeatTimes ? options.repeatTimes : 1;
  let addTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let result = '';
  str = String(str);
  for (let i = 0; i < times; i++) {
    result += str;
    if (options.addition !== undefined) {
    for (let j = 0; j < addTimes; j++) {
      result += options.addition;
      if (j < addTimes - 1) {
        result += addSep;
      }
    } 
  }
    if (i < times - 1) {
    result += sep;
    }
  }
  return result
};
  