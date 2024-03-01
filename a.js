//ques1####

// const input = require ('readline-sync');
// let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number");
// let c = input.questionInt("enter third number");

// if(a>b && a>c ) { 
//     console.log("a is grator ",a );
// } 
// else if(b>a && b>c )
// { 
//     console.log("b is grator ",b)
// } 
// else { console.log ("c is grator ",c)
// }

//ques2####

// const input = require ('readline-sync');
// let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number:");
// let c = input.questionInt("enter third number:");
// let d = input.questionInt("enter four number:");
// if(a>b && a>c && a>d) { 
//     console.log("a is grator ",a );
// } 
// else if(b>a && b>c && b>d )
// { 
//     console.log("b is grator ",b);
// } 
// else if ( c>a && c>b && c>d){ 
//     console.log(" c is grator ",c);
// }
// else  { 
//     console.log ("d is grator ",d);
// }


//ques3####


// const input = require ('readline-sync');
//  let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number:");
// let c = input.questionInt("enter third number:");
//  let d = input.questionInt("enter four number:");
// if(a>b)
// {
//     max=a;
//     min=b;
// }
// else{
//     max=b;
//     min=a
// }
// if(c>d)
// {
//     max1=c;
//     min1=d;
// }
// else{
//     max1=d;
//     min1=c;
// }
// if(max>max1)
// {
//     q=max1;
//     r=min;
// }
// else{
//      q=min1;
//      r=max;
// }
// if(q>r)
// {
//     console.log("third max:",r)
// }
// else{
//     console.log("third max:",q)
// }



// ques4####

// const input = require ("readline-sync")
// let n = input.questionInt("enter the number:")
// let a = 0 
// let m = n
//  while(n>0)
//  {
//     let r = n % 10;
//         a = a*10+r;
//         n = Math.floor(n/10);

//  }
//  if(m == a)
//  {
//     console.log("palindrome num:",a);
//  }
//  else{
//     console.log("not palindrome num:",a);
//  }


//ques5#### 

// const input = require ("readline-sync")
// let n = input.questionInt("enter the number:")
// let i = 1;
// let co=0
// while( i<=n ){
// if(n%i==0){
//   co++
// } 
// i++
// }
// if(co===2){
//     console.log("prime number")
// }else{
// console.log("not prime number")
// }


//ques6####


// const input = require ('readline-sync');
// let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number:");
// let p=a*b

// while(a%b!=0){r=a%b, a=b, b=r}

// console.log
// ("hcf=",b,"lcf=",p/b) 



//ques7####


// const input = require("readline-sync")
// let n = input.questionInt("enter the number:")
// let i = 1
// sum = 0
// while(i<n)
//  { 
//    if(n%i==0){ 
//    sum=sum+i
// }
// i++
// }
// if(sum==n)
// {
//     console.log("perfect num");

// }
// else{
//     console.log("not parfect num");
// }




//ques8####



// const input = require ('readline-sync');
// let n = input.questionInt("enter the value of n:");
// console.log("find the max and min")
// let a = input.questionInt("enter the element: ")
// let max=a
// let small = a; 
// let i = 2;
// while(i<=n){
//     let num = input.questionInt("enter the element ")
  
//     if (num>max) {
//         max=num
//     }
//     if(num<small){
//         small=num
//     }
//     i++
// }
// console.log(max,small);





// //ques9####



// const input = require('readline-sync');
// let n = input.questionInt("enter the value of n:");
// console.log("find the second max");
// let first = input.questionInt("enter the first number:");
// let second = input.questionInt("enter the second number:");
// let i = 3;

// while(i<=n)
// {
//     let num = input.questionInt("enter the element");
//     if(first<num)
//     {
//         second = first;
//         first = num;
//     }
//     else if(num>second && num!==first)
//     {
//         second = first;
//     }
//     if(second>first)
// {
//     [first,second]=[ second,first];
// }
//     i++
// } console.log("second max:",second);




// // ques10####
// 1:- x+(x^2)/+(x^3)/3+(x^4)/4.....uqto N times.

// const input = require("readline-sync");
// let n = input.questionInt("enter the value of n:");
// let x = input.questionInt("enter the number:");
// let s = 0;
// let i = 1;


// while(i<=n)
// {
//     a = x ** i/i
//     s = s+a
//     i++;
// }
   
// {
//     console.log("s:",s);
// }



//ques11####

// 1:- 

// *
// **
// ***
// ****
// *****


// const input = require("readline-sync")
// let n = input.questionInt("enter the number :");
// for (let i = 0; i <=n; i++) {
//     let c="";
//     for (let j = 0; j <=i; j++) {
//         c +="*"
        
//     }
//     console.log(c);
// }

//3:-
// *****
// ****
// ***
// **
// *

//  const input = require("readline-sync");
//  let n = input.questionInt("enter the value :");
 
//  let c = "";
//  for(let i = n; i >= 0; i--){
//     for(let j = 1; j <= i ; j++){
//         c += "* ";
//     }
//     c +="\n";
//  }console.log(c);


//4:-

//1
//2 3
//4 5 6
//7 8 9 10

// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let c = "";
// let k = 0;
// for(let i = 1; n >=i; i++ ){
//     for(let j =1; j <=i; j++){
//         k++;
//         c += k + " ";
//     }
//     c +="\n";
// }console.log(c);


//5:-
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
 

// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let c = "";
// let j = 1;
// for(let i = 1; n >=i; i++){
//    for(let j =1; j <=i; j++){
//         c += j + "";
//     }for( j=i-1;  j>0; j--){
//         c += j + "";
//     } c +="\n";
// }console.log(c);




//12####
//1:-
// *
// * * *
// * * * * *
// * * * * * * *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let c = "";
// let j = 1;
// for(let i = 1; n >=i; i++){
//    for(let j =1; j <=i; j++){
//         c +=  "*";
//     }for( j=i-1;  j>0; j--){
//         c += "*";
//     } c +="\n";
// }console.log(c);


//

// const input = require('readline-sync');
// let n = input.questionInt("enter the value :")
// let i = 1; j =1;
// while(i<=n){
//     console.log("*".repeat(j));
//     j+=2
//     i ++
// } 



//2:-
// *
// * * *
// * * * * *
// * * * * * * *
// * * * * *
// * * *
// *


// const input = require('readline-sync');
// let n = input.questionInt("enter the value :");
// let i = 1; j =1;
// while(i<=n){
//     console.log("*".repeat(j));
//     j+=2
//     i ++
// }
// let k = j-4
// while(k>0){
//     console.log("*".repeat(k));
//      k-=2
    
// } 


//3:-

// * *
// ** **
// *** ***
// ********
// *** ***
// ** **
// * *



// const input = require('readline-sync');
// let n = input.questionInt("Enter the value: ");
// let i = 1, j = 1;

// while (i < n) {
//     console.log("*".repeat(j) + " " + "*".repeat(j));
//     j += 1;
//     i += 1;
// }


// console.log("*".repeat(j) + "*".repeat(i));


// let k = j - 1;
// while (k > 0) {
//     console.log("*".repeat(k) + " " + "*".repeat(k));
//     k -= 1;
// }





//4:-
// 4
// 4 3 4
// 4 3 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 3 4
// 4 3 4
// 4



// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let p = "";
// for(let i = 1; i<=n; i++)
// { let b=n
// for( let j = 1;  j<=i; j++)
// {   p+= b + " ";
//     b--;
//     c=b;
   
// }
// for(let c = b+2; c<=n; c++){
//     p+= c + " ";
// } p += "\n";
// }

// for(let i=n-1; i>=1; i--)
// {let b=n;
//     for(let j = 1; j<=i; j++)
//     { p += b + " ";
//       b--;
//       c=b;
        
    
// }for(let c = b+2; c<=n; c++){
//     p += c + " ";
 
    
// } p += "\n";
// } console.log(p);




//4:-

//n=5

// 0 0 0 0 0
// x 0 0 0 x
// x x 0 x x
// x 0 0 0 x
// 0 0 0 0 0



// const input = require('readline-sync');
// let n = input.questionInt("Enter the value: ");
// let c = "";
// let k = "";
// let b = "";
// let s = "";
// let r = "";


// for (let i = 1; i <= n; i++) {
//     c += "0 ";
// }
// console.log(c);


// k += "x ";
// for (let p = 1; p<n-1; p++) {
//     k += "0 ";
// }
// k += "x";
// console.log(k);


// for (let m = 1; m <= n; m++) {
//     if(m==3)
//     {
//         b+="0 ";
//     }
//     else
//     {
//         b+="X ";
//     }
// }
// console.log(b);


// r += "x ";
// for (let d = 1; d < n - 1; d++) {
//     r += "0 ";
// }
// r += "x ";
// console.log(r);


// for (let t = 1; t <= n; t++) {
//     s += "0 ";
// }
// console.log(s);



//####13:--

//1:-

// N=5
// *
// * *
// * *
// * *
// * * * * *

//const input = require("readline-sync");
//let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 0; i<=0; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 2; i < n; i++) {
//     console.log('* *');
// }for(let i = 1; i<=n; i++){
//     c+="* ";
// }console.log(c);



//2:-

// N=6
// * * * * * *
// * *
// * *
// * *
// * *
// * * * * * *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 1; i<=n; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 2; i < n; i++) {
//     console.log('* *');
// }for(let i = 1; i>n; i++){
//     c+="* ";
// }console.log(c);



//3:-

//n=4

// *
// * *
// * *
// * *
// * *
// * *
// *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 0; i<=0; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 0; i <= n; i++) {
//     console.log('* *');
// }for(let i = 1; i<0; i++){
//     c+="* ";
// }console.log(c);


//4:-
//N=4
// * * * *
// * *
// * *
// *
// * *
// * *
// * * * *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 1; i<=n; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 2; i <n; i++) {
//     console.log('* *');
// }console.log("*");
// for(let i = 2; i <n; i++){
//     console.log('* *')
// }for(let i = 1; i>n; i++) { 
//      c+="* ";
//  } console.log(c);



