'use strict';
/**
 * Created by Indrek on 10.08.2016.
 */

let rounding = function(number, decimals=4, trailingZeros = false, minLength=5, significantRounding=false, minDecimalsToDisplay=2) {

  /*If number is grather than 1*/
  if(Math.abs(number)>=1){
    /*Get number length withoud decimals*/
    let int = parseInt(number).toString().length;

    /*Get decimal length to fulfil number minimum length*/
    minLength = int > minLength || (minLength-int)<minDecimalsToDisplay?minDecimalsToDisplay:minLength-int;

    /*If significant rounding is required. Significant rounding 11116.00 to 4 digits will become 11120.00*/
    if(significantRounding){
      let n = Math.floor(Math.log10(number)+1-decimals);
      return (Math.round(Math.pow(10,-(n))*number)*10*Math.pow(10,n)/10).toFixed(minLength);
    }

    /*Add 2 trailing decimals for correct number display.*/
    return Number(number).toFixed(minLength);
  }

  /*If number is less than 0 and starts with 0., lets remove trailing zeros */

  /*Convert number to string to execute regex*/
  let numString = number.toString();

  /*Remove leading zeros including - sign*/
  let regex = /^-?0+(?:\.(0+)?)?/;
  let leadingZeros = regex.exec(numString)[0];

  /*Extract decimals from input number*/
  let tempNumber = numString.replace(leadingZeros,'');

  /*If input number has more decimals than required*/
  if(tempNumber.length > decimals) {
    /*Remove extra trailing zeros and reattach leading zeros*/
    number = (leadingZeros + Math.round(tempNumber.substr(0,decimals+1)/10))*1;

    /*If number total length is less than decimals,
     *lets addtrailing zeros so that all numbers will look like same*/
    for (let i = number.toString().length-1; i <= decimals; ++i) {
      number = number + '0';
    }
  }
  else {
    /*If requirement is to have trailing zeros, lets add them*/
    if (trailingZeros) {
      for (let i = tempNumber.length + 1; i <= maxDecimals; ++i) {
        numString = numString + '0';
      }
    }
    else{
      /*Remove trailing zeros*/
      number = number*1;
    }
  }
  return number;
};

module.exports = rounding;