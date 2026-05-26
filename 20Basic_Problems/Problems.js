//10 Problems Using Conditional Statements

//1. Odd or Even
function oddEven(num){
    if(num%2==0) console.log("Even number");
    else return console.log("Odd number");
}

//2. Grade Calculator
function gradeCalculator(marks){
    switch(marks){
        case marks>=90:
            console.log("Grade A");
        case marks>=80:
            console.log("Grade B");
        case marks>=70:
            console.log("Grade C");
        case marks>=60:
            console.log("Grade D");
        default:
            console.log("Grade F");
    }
}

//3. Leap Year Checker
function leapYear(year){
    if((year%4==0 && year%100!=0) || (year%400==0)) console.log("Leap Year");
    else return console.log("Not a Leap Year");
}

//4. Largest of Three Numbers
function largestNum(a,b,c) {
    if(a>=b && a>=c) return a;
    else if(b>=c && b>=a) return b;
    else return c;
}

//5.Check Vowel or Consonent
function alphabetChecker(ch){
    if(ch === "a" || ch === "e" || ch=== "i" || ch === "o" || ch === "u"
        || ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"
    ){
        console.log("Vowel");
    }
    else{
        console.log("Consonent");
    }
}

//Using ASCII Value
function CheckerUsingASCII(ch){
    let code = ch.toLowerCase().charCodeAt(0);
    if(code === 97 || code === 101 || code === 105 || code === 111 || code === 117){
        console.log("Vowel");
    }
    else{
        console.log("Consonent");
    }
}

//6. Positive, Negative, or Zero
function numChecker(num){
    if(num>0){
        console.log("Positive Number");
    }
    else if(num<0){
        console.log("negative Number");
    }
    else{
        console.log("Zero");
    }
}

//7. Calculator Program
function calculator(num1,num2,oper){
    if(oper === "+"){
        return num1 + num2;
    }
    else if(oper === "-"){
        return num1 - num2;
    }
    else if(oper === "*"){
        return num1 * num2;
    }
    else if(oper === "/"){
        return num1 / num2;
    }
    else return null;
}

//8. Day of the Week
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//9.Eligible to Vote
function voteEligibility(age){
    age>=18 ? console.log("Eligible to Vote") : console.log("Not Eligible to Vote");
}

//10. Triangle Type
function triangleType(a,b,c){
    if(a===b && b===c) console.log("Equilateral Triangle");
    else if(a===b || b===c || a===c) console.log("Isosceles Triangle");
    else return console.log("Scalene Triangle");
}



//---10 Problems Using Loops----

//1. Multiplication Table
function multiplicationTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

//2. Factorial of a Number
function factorial(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact *= i;
    }
    return fact;
}

//3. Sum of Natural Numbers
function NaturalSum(num){
    let sum = 0;
    for(let i=1; i<=num;i++){
        sum = sum+i;
    }
    return sum;
}

//4. Reverse a Number
function reverseNum(num){
    let rev = 0;
    while(num>0){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
    }
    return rev;
}

//5. Print Even Numbers
function printEven(num){
    for(let i=1; i<=num; i++){
        if(i%2==0) console.log(i);
    }
}

//6. Count Digits in a Number
function countDigits(num){
    let count = 0;
    while(num>0){
        count++;
        num = Math.floor(num/10);
    }
    return count;
}

//7. Fibonacci Series
function fibonacci(n){
    let a = 0, b = 1;
    for(let i=1; i<=n; i++){
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}

//8. Sum of Digits
function sumOfDigits(num){
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

//9. Pattern Printing (Pyramid)
function pyramidPattern(rows){
    for(let i=1; i<=rows; i++){
        let pattern = " ".repeat(rows-i) + "*".repeat(2*i-1);
        console.log(pattern);
    }
}

//10.Check Prime Number
function primeChecker(num){
    if(num<=1) return console.log("Not a Prime Number");
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0) return console.log("Not a Prime Number");
    }
    return console.log("Prime Number");
}
