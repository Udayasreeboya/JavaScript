// #operators
// 1.arithmetic operators-- +,-,*,/,%,++,--
// 2.assignment operators -- +=, -=, *=, /=
// 3. comparision operators -- <, >, <=, >=, ==, ===, !=,!==
// 4. logical operators -- &&, ||, !
// 5. ternary operators -- (condition ? truestatement:falsestatement)
// 6. nullish coalescing operator-- value ?? defaultValue;


// arithmetic operations
let a=10
let b=5
sum=a+b
sub=a-b
mul=a*b
div=a/b
mod=a%b
inc=a++
dec=a--

console.log(sum) //output 15
console.log(sub) //output 5
console.log(mul) //output 50
console.log(div) //output 2
console.log(mod) //output 0
console.log(inc) //output 10
console.log(dec) // output 11
console.log(++a) // output 11
console.log(--a) // output 10

// 2.assignment operators

let a=108
a=a+=5
console.log(a)
a=a-=8
console.log(a)
a=a*=2
console.log(a)
a=a/=2
console.log(a)

// 3. comparision operators
// it gives boolean CSSFontFeatureValuesRule(True or false)

console.log(100<1000) //true
console.log(99>100) //false
console.log(90<=100) //true because comparing with lessthan or equal to
console.log(90>=100) // false
console.log(100==100) //true
console.log(100===100) //true
console.log("100"==100) //true
console.log("100"===100) //false because "===" is strictly equals to it means it checks values along with datatype also
console.log(90!=90) //false
console.log(60!==60) //false
console.log("90"!=90) //false
console.log("60"!==60) //true because strictly not equlas to 


// logical operator
// it also returns boolean values
a=true
b=false
console.log(a&&b) // && returns true when all inputs are true
console.log(a||b) //||return true anyone input is true
console.log(!b) //! return reverse of that input

// ternary operator
let num=985
console.log(num%2==0 ? "even":"odd")


//  nullish coalescing operator
// Nullish = only null or undefined (nothing else).
let name_ = null;
let finalName = name_ ?? "udayasree";
console.log(finalName); //udayasree







