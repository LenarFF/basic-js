
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  // remove line with error and write your code here
let turns = 2 ** disksNumber - 1;
let seconds  = Math.floor( turns / (turnsSpeed / 3600));
return {turns, seconds}
};
