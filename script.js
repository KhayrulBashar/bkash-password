var value = parseFloat(prompt('Please multiply your bKash password by 1020 like (38948*1020) and input the value: '));
var result = value / 1020;
window.alert('Your bKash password: '+ result);
document.getElementById('result').innerHTML = "This is your bKash password: "+ result;