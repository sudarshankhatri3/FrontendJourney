// LOOPING – JavaScript Practice Questions
// (Basic → Intermediate → Advanced)
// 1 Basic Level (1–15)
// Focus: for, while, do…while loops and simple numeric iterations.
// 1. Print numbers from 1 to 10 using a for loop.
for(let i=1;i<=10;i++){
    console.log(i)
}
// 7. Print the first n natural numbers.
// 2. Print numbers from 1 to 10 using a while loop.
let num=1
while(num<=10){
    console.log(num)
    num++
}
// 3. Print numbers from 1 to 10 using a do…while loop.
console.log("Example of Do while loop")
let i=1
do{
    console.log(i)
    i++
}while(i<=10)
// 4. Print numbers from 10 to 1 in descending order using a for loop.
console.log("For loop in Descending order")
for(let i=100;i>=1;i--){
    console.log(i)
}
// 9. Print the first n even numbers.
// 5. Print even numbers between 1 and 20.
console.log("Even number")
let nm=1
while(nm<=20){
    if(nm%2===0){
        console.log(`${nm}`)
    }
    nm++
}
// 8. Print the first n odd numbers.
// 6. Print odd numbers between 1 and 20.
let nm_1=1
console.log("Odd Number")
while(nm_1<=20){
    if(nm_1%2!==0){
        console.log(`${nm_1}`)
    }
    nm_1++
}
// 10. Print the multiplication table of 5.
console.log("Multiplication table of 5")
for(let i=1;i<=10;i++){
     console.log(`${5}*${i}=${5*i}`)
}
// 11. Print numbers divisible by 3 between 1 and 50.
console.log("Divisible by 3")
for(let i=1;i<=50;i++){
    if(i%3===0){
        console.log(i)
    }
}
// 12. Print numbers divisible by 5 but not by 2 between 1 and 50.
console.log("Number divisible by 5 but not by 2")
for(let i=0;i<50;i++){
    if(i%5===0 && i%2!==0){
        console.log(i)
    }
}
// 13. Sum of numbers from 1 to 100 using a loop.\
console.log("sum from 1 to 100")
let sum=0
let j=1
while(j<=100){
    sum+=j
    j++
}
console.log(sum)
// 14. Calculate the factorial of a number using a loop.
function factorial(nm){
    let fact=1
    if(nm===0){
        return fact
    }else{
        while(nm>0){
            fact=fact*nm
            nm--
        }
        return fact
    }
}
console.log("Factorial calculation")
console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(3))
// 15. Print the Fibonacci sequence up to n numbers using a loop.
function fibonacciSeries(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

console.log("Fibonacci series:", fibonacciSeries(5));

// 2 Intermediate Level (16–35)
// Focus: nested loops, arrays, strings, and pattern problems.
// 16. Print a triangle pattern using * with n rows.

// 17. Print a pyramid pattern of numbers.
console.log("Pyramid Pattern")
let len=5
for(let i=1;i<=5;i++){
    for(let j=i;j<=5;j++){
        console.log("* ")
    }
}
// 18. Print a reverse pyramid pattern.
// 19. Print all elements of an array using a for loop.
// 20. Print all elements of an array using for…of loop.
function forOfExample(arr){
    for(let value of arr){
        console.log(value)
    }
}
let data=[12,23,34,44,55,676,789,123,33]
forOfExample(data)
// 21. Print all elements of an array using forEach.
data.forEach(num =>{
    console.log(num)
});
// 22. Find the maximum number in an array using a loop.
// 23. Find the minimum number in an array using a loop.
// 24. Calculate the sum of all elements in an array.
// 25. Reverse an array using a loop (without reverse() method).
function arrayReverse(data){
    let result=[]
    for(let i=0;i<=data.length;i++){
        result.push(data[data.length-i-1])
    }
    return result
}
let revData=[12,23,34,34,556]
console.log(`Reverse using only loop:${arrayReverse(revData)}`)
// 26. Print a right-angled triangle of numbers.
console.log("Right angle Triangle")
for(let i=1;i<=5;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row+=j+" "
    }
    console.log(row)
}
// 27. Print a diamond pattern using nested loops.
// 28. Print all prime numbers between 1 and n using loops.
function prime(num){
    let isPrime=true
    for(let i=2;i<num;i++){
        if(num%i===0){
            isPrime=false
            break
        }
    }
    if(isPrime){
        return num
    }
}
console.log(prime(23))
console.log(prime(12))
// 29. Find the sum of all even numbers in an array.
// 30. Find the sum of all odd numbers in an array.
// 31. Count the frequency of each element in an array.
function frequencyCount(arr){
    let res={}
    for(let value of arr){
        if(res[value]){
            res[value]++
        }else{
            res[value]=1
        }
    }
    return res
}
console.log(`Result:${frequencyCount([1,2,3,4,5,5,3,2,12,2,3,1,2])}`)
// 32. Print a multiplication table of n using nested loops.
console.log("Multiplication Table")
for(let i=1;i<=10;i++){
    let res=""
    for(let j=1;j<=10;j++){
        res+=(i*j)+" "
    }
    console.log(res)
}
// 33. Print the ASCII values of all characters in a string using a loop.
function printASCII(str) {
    console.log("ASCII values:");
    
    for (let i = 0; i < str.length; i++) {
        console.log(str[i] + " = " + str.charCodeAt(i));
    }
}

printASCII("Hello");

// 34. Reverse a string using a loop.
// 35. Print all substrings of a string using nested loops.
// 3 Advanced / Higher Level (36–50)
// Focus: complex loops, multi-dimensional arrays, higher-order loops, and interview-level
// challenges.
// 36. Print Pascal’s Triangle up to n rows.
// 37. Print a hollow square pattern using *.
// 38. Rotate elements of an array by k positions using loops.
// 39. Find the second largest number in an array using loops.
// 40. Find the second smallest number in an array using loops.
// 41. Implement bubble sort using loops.
// 42. Implement selection sort using loops.
// 43. Implement insertion sort using loops.
// 44. Print all prime factors of a number using loops.
// 45. Find all pairs in an array that sum up to a target value.
// 46. Print all elements of a 2D array using nested loops.
// 47. Find the sum of the main diagonal in a 2D array.
// 48. Find the sum of the secondary diagonal in a 2D array.
// 49. Transpose a 2D array using nested loops.
// 50. Implement a spiral traversal of a 2D array using nested loops.
