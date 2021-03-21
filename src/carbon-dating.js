
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  // remove line with error and write your code here
  if (typeof sampleActivity !== "string" ||
    Number.isNaN(+sampleActivity) ||
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY
      ) return false
let k = 0.693 / HALF_LIFE_PERIOD;
let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
return Math.ceil(t)
};
 

