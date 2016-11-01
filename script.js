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

var temperature = convertTemp(212, "C");

console.log(temperature);
