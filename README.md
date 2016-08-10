# significant-rounding


    function(number, maxDecimals, trailingZeros, minDecimals)
If absolute number is greater than zero (num > 0) then minDecimals and normal formatting is used.
  
    rounding(123.123456, 5);            //Outputs 123.12
    rounding(123.100000, 5);            //Outputs 123.10
    rounding(123.100000, 5, true, 4);   //Outputs 123.1000
    rounding(1234.12, 2, true, 2, true) //Outputs 120.00

If absolute number is less than zero (num < 0) then maxDecimals and significant rounding is used. 
      
    rounding(0.0000123456789, 5);       //Outputs 0.000012346
    rounding(0.0123456789, 5);          //Outputs 0.012346
    rounding(0.012, 5);                 //Outputs 0.012
    rounding(0.012, 5, true);           //Outputs 0.012000