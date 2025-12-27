// FUNCTIONS – JavaScript Practice
// Questions (Basic → Intermediate →
// Advanced)
// 1⃣ Basic Level (1–15)
// Focus: function declaration, invocation, parameters, and return values.
// 1. Write a function that prints "Hello World" to the console.
function print(){
    return "Hello world"
}
console.log(print())
// 2. Write a function that takes two numbers and returns their sum.
function sum(a,b){
    return a+b
}
console.log(`sum:${sum(2,3)}`)
// 3. Write a function that takes a name and returns a greeting message.
function greetMessage(name){
    return `Hello ${name} good morning`
}
console.log(greetMessage("sudarshan"))
// 4. Write a function that returns the square of a number.
function square(nm){
    return nm*nm
}
console.log(square(23))
// 5. Write a function that returns the largest of two numbers.
function checkLargest(a,b){
    if(a>b){
        return `${a} is greater`
    }else{
        return `${b} is greater`
    }
}
console.log(checkLargest(3,45))
// 6. Write a function that swaps two numbers using a temporary variable.
function swap(a,b){
    let temp=a
    a=b
    b=temp
    return `After swapping:${a} and ${b}`
}
console.log(swap(2,3))
// 7. Write a function that swaps two numbers without using a temporary variable.
function withoutSwap(a,b){
    a=a+b
    b=a-b
    a=a-b
    return `After swapping without using temporary variable:${a} &${b}`
}
console.log(withoutSwap(45,67))
// 8. Write a function that checks if a number is even.
// 9. Write a function that checks if a number is odd.
function checkNumber(nm){
    if(nm%2===0){
        return `${nm} is even`
    }else{
        return `${nm} is odd`
    }
}
console.log(checkNumber(34))
console.log(checkNumber(33))
// 10. Write a function that calculates the factorial of a number.
// 18. Write a recursive function to find the factorial of a number.

// 19. Write a recursive function to calculate Fibonacci numbers.
function factorial(nm){
    if(nm===0){
        return 1
    }else{
        return nm*factorial(nm-1)
    }
}
console.log(`Factorial:${factorial(5)}`)
console.log(`Factorial:${factorial(35)}`)
// 11. Write a function that returns the nth Fibonacci number.
function Fibonacci(nm){
    if(nm===0){
        return 0
    }else if(nm===1){
        return 1
    }else{
        return Fibonacci(nm-1)+Fibonacci(nm-2)
    }
}
let val=23
for(let i=0;i<val;i++){
    console.log(Fibonacci(i))
}
// 12. Write a function with default parameters and demonstrate calling it with/without arguments.
function defParameter(a,b=23){
    return a+b
}
console.log(defParameter(2))
// 13. Write a function that converts Celsius to Fahrenheit.
function convertFarenheit(celsius){
    return (9/5)*celsius+32
}
console.log(convertFarenheit(37))
// 14. Write a function that converts Fahrenheit to Celsius.
function convertCelsius(farenheit){
    return (5/9)*farenheit-32
}
console.log(convertCelsius(91))
// 15. Write a function that concatenates two strings.
function concatString(st1,st2){
    return st1.concat(st2)
}
console.log(concatString("hello" ,"miss"))
// 2 Intermediate Level (16–35)
// Focus: higher-order functions, recursion, multiple parameters, and closure.
// 16. Write a function that takes an array and returns the sum of its elements.
function arraySum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
let ar=[12,23,454,56,333,556,32]
console.log(`Result:${arraySum(ar)}`)
// 17. Write a function that takes an array and returns a new array with elements squared.
function squareArray(ar){
    let result=[]
    for(let i=0;i<ar.length;i++){
        result.push(ar[i]*ar[i])
    }
    return result
}
let sq=[1,2,3,4,5,5,6,7,8]
console.log(`Square::${squareArray(sq)}`)
// 20. Write a function that takes another function as a parameter and executes it (callback).
function hello(name,callback){
    console.log(`Hello ${name}`)
    callback()
}
function greet(){
    console.log("good bye")
}
hello("sudarshan",greet)
// 21. Write a function that returns another function (closure) that adds a fixed number.
function closureAdd(a,b,callback){
    console.log(`Sum::${a+b}`)
    callback()
}
function result(){
    console.log("hello")
}
closureAdd(2,3,result)
// 22. Write a function to check if a string is a palindrome.
let st="hello"
if(st===st.split("").reverse().join("")){
    console.log(`${st} is pallindrome`)
}else{
    console.log(`${st} is not pallindrome`)
}
// 23. Write a function to reverse a string.
function findReverse(stt){
    return `${stt.split("").reverse().join("")}`
}
let data="hello iam sudarshan khatri"
console.log(`Original data:${data}`)
console.log(`Reversed data:${findReverse(data)}`)
// 24. Write a function that filters an array of numbers greater than a given value.
function filterData(nm,ar){
    let result=[]
    let max=nm
    for(let i=0;i<ar.length;i++){
        if(ar[i]>max){
            result.push(ar[i])
        }
    }
    return result
}
let filterDt=[12,45,65,365,773,2,4,6,7,4,2,233333,33,3,3]
const max=34
console.log(`original array::${filterDt} and constant maximum:${max}`)
console.log(`Result:${filterData(max,filterDt)}`)
// 25. Write a function that finds the maximum number in an array.
function maximumData(maxArr){
    let max=0
    for(let i=0;i<maxArr.length;i++){
        if(maxArr[i]>max){
            max=maxArr[i]
        }
    }
    return max
}
let dt=[12,23,45,22,4444,22,643,3333]
console.log(`Maximum value::${maximumData(dt)}`)
// 26. Write a function that finds the minimum number in an array.
function minimumData(minArr){
    let  min=minArr[0]
    for(let i=1;i<minArr.length;i++){
        if(minArr[i]<min){
            min=minArr[i]
        }
    }
    return min
}
let dataMin=[12,24,5,23,5,2,1,4545,323,323]
console.log(`original Data:${dataMin}`)
console.log(`Minimum value::${minimumData(dataMin)}`)
// 27. Write a function that removes duplicates from an array.
function removeDuplicate(duplicate){
    let result= [...new Set(duplicate)]
    return result
}
let duplicateData=[12,24,22,12,35,655,24,53]
console.log(`original Data:${duplicateData}`)
console.log(`Remove duplicate::${removeDuplicate(duplicateData)}`)
// 28. Write a function that merges two arrays and removes duplicates.
function merge(arr_1,arr_2){
    let result=arr_1.concat(arr_2)
    console.log(`Merge array::${result}`)
    let clearData=[...new Set(result)]
    return clearData
}
let d_1=[12,34,545452,23,12,32]
let d_2=[23,5656,32,56,32,45,12,45,65]
console.log(`final result::${merge(d_1,d_2)}`)
// 29. Write a function that counts the number of vowels in a string.
function counts(ar){
    let count=0
    const vowels="aeiouAEIOU"
    for(let char of ar){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(counts("javaScript"))
// 30. Write a function that counts occurrences of each character in a string.
 
// 31. Write a function that validates if an email string is valid using regex.
// 32. Write a function that calculates the power of a number using recursion.
// 33. Write a function that generates an array of n random numbers.
// 34. Write a function that takes any number of arguments and returns their sum.
// 35. Write a function that returns the type of a variable passed to it.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: arrow functions, closures, IIFE, recursion, currying, and interview-level challenges.
// 36. Convert a normal function to an arrow function and explain differences.
// 37. Write a function that returns a closure to store a private counter with increment and
// decrement methods.
// 38. Write an Immediately Invoked Function Expression (IIFE) that prints "IIFE
// executed".
// 39. Implement a function that curries a function taking multiple parameters.
// 40. Write a recursive function to flatten a nested array.
// 41. Write a function that memoizes another function to optimize performance.
// 42. Write a function that generates Fibonacci numbers up to n using closure.
// 43. Implement a function that finds all prime numbers up to n using recursion.
// 44. Write a function that returns another function for dynamic multiplication (e.g.,
// multiplyBy(5)(3) → 15).
// 45. Implement a function that throttles another function (execute at most once in n ms).
// 46. Implement a function that debounces another function (execute after n ms of inactivity).
// 47. Write a function that deeply clones an object using recursion.
// 48. Implement a function that calculates the sum of numbers in a nested array using
// recursion.
// 49. Write a function that limits the number of times another function can be called.
// 50. Implement a function that dynamically creates getter and setter functions for an object
// property.
// ARROW FUNCTIONS – JavaScript Practice
// Questions (Basic → Intermediate →
// Advanced)
// 1 Basic Level (1–15)
// Focus: arrow function syntax, basic operations, and return values.
// 1. Convert a regular function that adds two numbers into an arrow function.
// 2. Convert a function that multiplies two numbers into an arrow function.
