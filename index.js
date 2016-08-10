'use strict';
/**
 * Created by Indrek on 10.08.2016.
 */

let rounding = function(number, decimals, trailingZeros = false, minDecimals = 2, significantRounding=false) {
  if(Math.abs(number)>1){
    if(significantRounding){
      let n = Math.floor(Math.log10(number)+1-decimals);
      return (Math.round(Math.pow(10,-(n))*number)*10*Math.pow(10,n)/10).toFixed(minDecimals);
    }
    return number.toFixed(minDecimals);
  }

  let numString = number.toString();
  let regex = /^-?0+(?:\.0+)?/;
  let leadingZeros = regex.exec(numString)[0];
  let tempNumber = numString.replace(leadingZeros,'');

  if(tempNumber.length > decimals) {
    return leadingZeros + Math.round(tempNumber.substr(0,decimals+1)/10);
  }
  else {
    if (trailingZeros) {
      for (let i = tempNumber.length + 1; i <= maxDecimals; ++i) {
        numString = numString + '0';
      }
    }
    return numString;
  }
};

module.exports = rounding;