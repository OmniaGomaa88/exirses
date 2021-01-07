function testDVa(num1,num2){
if (num1==num2){
console.log("same value")
}
else if(num1===num2){
console.log("Same value et same type")}
else if(typeof(num1)===typeof(num2)){console.log("same type")}
}

testDVa(5,5)
