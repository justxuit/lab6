//alert("Hi :)");

//console.log((5/9)*(tempF-32));

function convertTemp(tempInput, tempUnit){
  if (tempUnit==="C"){
    return ((tempInput-32)*(5/9));
  } else if (tempUnit==="F"){
    return ((tempInput*9/5)+32);
  } else {
    console.log("Please select a valid temperature unit ('C' for Celsius, 'F' for Fahrenheit).")
  }
}

var temp1 = convertTemp(212, "C");
var temp2 = convertTemp(32, "C");
var temp3 = convertTemp(65, "C");
var temp4 = convertTemp(-40, "F");

console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log(temp4);
