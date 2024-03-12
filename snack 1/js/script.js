
const numberArray = [];
for ( let i = 0 ; i < 5 ; i++){
  const userNumber = parseInt( prompt('dimmi un numero'));
  console.log(userNumber)


  if( numberArray.includes(userNumber) === false){
    numberArray.push(userNumber);
  }

}
console.log(numberArray)