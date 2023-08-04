// 2.Get 5 subject marks from user and find total,average.
let a=parseInt(prompt("Subject 1 marks: "));
let b=parseInt(prompt("Subject 2 marks: "));
let c=parseInt(prompt("Subject 3 marks: "));
let d=parseInt(prompt("Subject 4 marks: "));
let e=parseInt(prompt("Subject 5 marks: "));
let total=a+b+c+d+e;
let average=total/6;
console.log(total);
console.log(average);

// 3.Write a program to read temperature and display a suitable message according to temperature state below. Temp < 0 then Freezing weather Temp 0-10 then Very Cold weather Temp 10-20 then Cold weather Temp 20-30 then Normal in Temp Temp 30-40 then Its Hot Temp >=40 then Its Very Hot
let temp=parseInt(prompt("Temp: "));
if (temp<0){
    console.log("Freezing weather");
}
else if (temp<10){
    console.log(" Very Cold Weather");
}
else if (temp<20){
    console.log("Cold Weather");
}
else if (temp<30){
     console.log("Normal");
}
else if (temp<40){
    console.log("Hot Temp");
}
else if (temp>=40){
    console.log("Very Hot");
}
else{
    console.log("Please enter number")
}

// 4.The given Number is even or odd
let number=parseInt(prompt("Number: "));
if (number%2===0){
    console.log("The number is even number");
}
else if(number%2!=0){
    console.log("The number is odd number");
}
else{
    console.log("Please enter number");
}

// 5.Sum of the two given integers. If the two values are same, then returns triple their sum.
let u=parseInt(prompt("Enter first integer: "));
let v=parseInt(prompt("Enter second integer: "));
let sum=u+v;
console.log(sum);
if (u===v){
    c=sum*3;
    console.log(c);
}
else{
    console.log("Please enter number")
}

// 6.Check two given numbers and return true if one of the number is 50 or if their sum is 50.
let r=parseInt(prompt("Enter 1st number: "));
let s=parseInt(prompt("Enter 2nd number: "));
let add=r+s;
if ((r||s)===50){
    console.log(true);
}
else if(add===50){
   console.log(true);
}
else{
   console.log(false);
}


// 7.Check whether a given positive number is a multiple of 3 or a multiple of 7.
let w=parseInt(prompt("Enter positive number: "));
if (((w%3)===0)&&(w>=0)){
    console.log("The number is a multiple of 3");
}
else if(((w%7)===0)&&(w>=0)){
    console.log("The number is a multiple of 7");
}
else if(w<0){
    console.log("Enter positive number");
}
else{
     console.log("The number is not a multiple of 3 or 7");
}

//8.Find the largest of three given integers.
let x=parseInt(prompt("enter 1st integer: "));
let y=parseInt(prompt("enter 2nd integer: "));
let z=parseInt(prompt("enter 3rd integer: "));
if ((x>y)&&(x>z)){
    console.log("a is the largest of three given integers");
}
else if ((y>x)&&(y>z)){
    console.log("b is the largest of three given integers");
}
else if ((z>x)&&(z>y)){
    console.log("c is the largest of three given integers");
}
else{
    console.log("Please Enter a number");
}
