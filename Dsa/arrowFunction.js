// ARROW FUNCTIONS – JavaScript Practice
// Questions (Basic → Intermediate →
// Advanced)
// 1⃣ Basic Level (1–15)
// Focus: arrow function syntax, basic operations, and return values.
// 1. Convert a regular function that adds two numbers into an arrow function.
const sum=(a,b)=>a+b
console.log(`Sum::${sum(2,3)}`)
// 2. Convert a function that multiplies two numbers into an arrow function.
const prod=(a,b)=>a*b
console.log(`product:${prod(2,4)}`)
// 3. Convert a function that returns a string message into an arrow function.
const message=()=>"hello iam sudarshan"
console.log(`Message:${message()}`)
// 4. Create an arrow function that returns the square of a number.
const sq=(a)=>a*a
console.log(`Square:${sq(3)}`)
// 5. Create an arrow function that checks if a number is even.
// 6. Create an arrow function that checks if a number is odd.
const even=(n)=>n%2===0 ? "even" :"odd"
console.log(`check:${even(5)}`)
console.log(`check:${even(6)}`)

// 7. Write an arrow function that returns the length of a string.
const ln=(std)=>std.length
console.log(`length of string::${ln("helllo")}`)
// 8. Write an arrow function that returns the first character of a string.
const data=(msg)=>msg[0]
console.log(data("sudarshan"))
// 9. Write an arrow function that concatenates two strings.
const ct=(st_1,st_2)=>st_1.concat(st_2)
console.log(`Result after concat:${ct("sudarshan","khatri")}`)
// 10. Write an arrow function that calculates the factorial of a number using recursion.
const fact=(num)=>{
    if(num===0){
        return 1
    }else{
        return num*fact(num-1)
    }
}
console.log(`Factorial:${fact(5)}`)
console.log(`Factorial:${fact(10)}`)
console.log(`Factorial:${fact(0)}`)
// 11. Write an arrow function that returns the maximum of two numbers.
const maximum=(a,b)=> a>b ? `${a} is max` : `${b} is max`
console.log(maximum(3,4))
console.log(maximum(30,4))
// 12. Write an arrow function that converts Celsius to Fahrenheit.
const converter=(celsisus)=>(9/5)*celsisus+32
console.log(`Farenheit:${converter(37)}`)
console.log(`Farenheit:${converter(100)}`)
// 13. Write an arrow function with default parameters.
const  dft=(a,b=20)=>a*b
console.log(`proudct:${dft(3)}`)
// 14. Write a concise arrow function (single-line) to add two numbers.
const cnst=(a,b)=>a+b
console.log(`value:${cnst(34,45)}`)
// 15. Write an arrow function that takes no parameters and returns a fixed value.
const fnct=()=>"hello iam sudarshan"
console.log(fnct())
// 2⃣ Intermediate Level (16–35)
// Focus: arrays, callbacks, higher-order functions, and closures with arrow functions.
// 16. Use an arrow function in map() to square each number in an array.
let number=[1,2,3,4,5,6,7,8]
const sqr=number.map(num=>num*num)
console.log(`Result :${sqr}`)

function sqR(nm){
    return nm*nm
}
const sqr_1=number.map(sqR)
console.log(sqr_1)
// 17. Use an arrow function in filter() to get only even numbers from an array.
const res=number.filter(nm=>nm%2===0)
console.log(res)
// 18. Use an arrow function in reduce() to calculate the sum of an array.
const sm=number.reduce((acc,n)=>acc+n)
console.log(sm)
// 19. Write an arrow function that returns another arrow function (closure).
const makeAdder=x=>y=>x+y
addFive=makeAdder(5)
let rs=addFive(45)
console.log(rs)

// 20. Implement an arrow function that reverses a string.
const rev=(s)=>{
    return s.split("").reverse().join("")
}
console.log(`After reverse:${rev("hello sudarshan")}`)
// 21. Use an arrow function in forEach() to print array elements.
number.forEach(num=>console.log(num))

// 22. Use an arrow function in some() to check if any number is greater than 10.
const result=(arr)=>{
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>10)
            result.push(arr[i])
    }
    return result
}
let dt=[12,23,34,445,567,75,23,6]
console.log(result(dt))
// 23. Use an arrow function in every() to check if all numbers are positive.
let every=(data)=>{
    let rst=[]
    for(let i=0;i<data.length;i++){
        if(data[i]>0){
            rst.push(data[i])
        }
    }
    return rst
}
console.log(every(dt))
// 24. Implement an arrow function that finds the longest word in an array.
let longestWord=(arr)=>{
    let len=[]
    let max=0
    let index
    for(let i=0;i<arr.length;i++){
        len.push(arr[i].length)
        if(len[i]>max){
            max=len[i]
            index=i
        }
    }
    return `maximum value at index ${index} is ${max}`

}
let dt_1=["hello","Iam sudarshan","khatri","sudarhsna khatri is promax","Hi iam sudarhsna kajfsdfsfsfsdds"]
console.log(longestWord(dt_1))
// 25. Implement an arrow function that removes duplicates from an array.
// 26. Use an arrow function in sort() to sort an array of numbers in descending order.
let sort=(ar)=>{
    let n=ar.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(ar[j]<ar[j+1]){
                let temp=ar[j]
                ar[j]=ar[j+1]
                ar[j+1]=temp
            }
        }
    }
    return ar
}
let srt=[12,3,23,1,3,2323,34,42]
console.log(sort(srt))
// 27. Implement an arrow function to capitalize the first letter of each word in a string.
const capital=(value)=>{
    let newValue=value.charAt(0).toUpperCase()+value.slice(1)
    return newValue
}
let d="hello sudarshan"
console.log(capital(d))    
// 28. Write an arrow function that merges two arrays and removes duplicates.
const merge=(arr1,arr2)=>{
    let rm=[]
    let arr=arr1.concat(arr2)
    return arr
}
console.log(merge("hellosudu","dffdsfs"))
// 29. Use an arrow function in find() to return the first number divisible by 3.
// 30. Write an arrow function that calculates the factorial using a loop.
// 31. Write an arrow function to generate an array of first n Fibonacci numbers.
// 32. Write an arrow function that converts an array of strings to uppercase.
// 33. Use an arrow function to implement a simple debounce function.
// 34. Use an arrow function to implement a simple throttle function.
// 35. Implement an arrow function that returns the type of a given value.
// 3 Advanced / Higher Level (36–50)
// Focus: advanced arrow function patterns, recursion, currying, memoization, and interview-level
// challenges.
// 36. Implement a recursive arrow function to flatten a nested array.
// 37. Write an arrow function that memoizes another function.
// 38. Write an arrow function that curries a multiplication function.
// 39. Implement a closure using arrow functions to store a private counter.
// 40. Write an arrow function to generate a random integer between min and max.
// 41. Implement an arrow function that finds all prime numbers up to n.
// 42. Write an arrow function to check if a string is a palindrome.
// 43. Implement an arrow function to calculate the sum of numbers in a nested array.
// 44. Write an arrow function that returns another function for dynamic addition (e.g.,
// add(5)(3) → 8).
// 45. Write an arrow function to find the nth Fibonacci number using recursion.
// 46. Implement an arrow function that deeply clones an object.
// 47. Write an arrow function that calculates the sum of digits of a number recursively.
// 48. Implement an arrow function to throttle another function (execute at most once every n
// ms).
// 49. Implement an arrow function to debounce another function (execute after n ms of
// inactivity).
// 50. Write an arrow function that dynamically creates getter and setter functions for an object
// property.