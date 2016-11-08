//alert("Hi :)");

//console.log((5/9)*(tempF-32));
/*
function convertTemp(tempInput, tempUnit){
  if (tempUnit==="C"){
    return ((tempInput-32)*(5/9));
  } else if (tempUnit==="F"){
    return ((tempInput*9/5)+32);
  } else {
    return "Please select a valid temperature unit ('C' for Celsius, 'F' for Fahrenheit).";
  }
}
*/

/*
console.log(convertTemp(212, "C"));
console.log(convertTemp(32, "C"));
console.log(convertTemp(65, "C"));
console.log(convertTemp(-40, "F"));
*/


calculateButton.onclick = convertTemp;

function convertTemp(tempInput, tempUnit) {
  var userTemp = parseFloat(document.getElementById("newTemp").value);
  var userUnit = document.getElementById("newUnit").value);

  if (userUnit!=="F"||userUnit!=="C") {
    alert("Please enter a valid unit of temperature. F for Fahrenheit, C for Celsius.");
  }
  else {
    if (tempUnit==="C"){
      return ((tempInput-32)*(5/9));
    } else {
      return ((tempInput*9/5)+32);
  }
}
