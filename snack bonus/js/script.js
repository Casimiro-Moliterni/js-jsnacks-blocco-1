const numberArray = [1,2,3,4,5,6,7,8,9,10];

let bigNumber = numberArray[0];
for ( let i = 0; i < numberArray.length ; i++){
    const thisNumber = numberArray[i];
    
    if(thisNumber > bigNumber){
        bigNumber= thisNumber;
    }
}

console.log(bigNumber)