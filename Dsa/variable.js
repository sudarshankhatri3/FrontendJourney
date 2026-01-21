// VARIABLES – JavaScript Practice Questions (Basic → Intermediate → Advanced)
// 1. Declare a variable name and assign your full name. Print it.
let name="sudarshan"
let cast="khatri"
console.log(`My full name is ${name} ${cast}`)
// 2. Declare a constant PI = 3.14 and try to reassign it. Observe what happens.
const PI=3.14
console.log(PI)
// PI=41.23
// console.log(PI)
// 3. Use let and var to declare variables in a block and check scope outside the block.
let nm="sudarshan"
var value=4.56
console.log(`initialize name: ${nm}`)
console.log(`initialize value:${value}`)
function checkVariable(){
    nm="hello"
    value+=456
    console.log(`Inside function block: ${nm}`)
    console.log(`var inside function block:${value}`)
}
checkVariable()
console.log(`outside function block: ${nm}`)
console.log(`outside  function block:${value}`)

// 4. Swap two numbers stored in variables using a temporary variable.
function swap(a,b){
    let c=a
    a=b
    b=c
    console.log(`Reuslt:${a},${b}`)
    
}
swap(2,3)
// 5. Create two variables x and y and swap their values without a temporary variable.
function swapWithout(x,y){
    console.log(`\nResult before swaping without temporary valiable X:${x} and Y:${y}`)
    x=x+y
    y=x-y
    x=x-y
    console.log(`Result after swaping without temporary valiable X:${x} and Y:${y}`)
}
swapWithout(4,5)

// 6. Declare multiple variables in one line and assign values to them.
let a=b=c=d="hello iam sudarshan khatri"
b=12
c=null
console.log(a)
console.log(b)
console.log(c)
console.log(d)
// 7. Print the type of a variable using typeof.
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
// 8. Initialize a variable without value, print it, then assign a value and print again.
let ass
console.log(ass)
ass=121212
console.log(ass)
// 9. Declare variables for first name and last name, then combine them using template literals.
let first_name="sudarshan"
let last_name="khatri"
console.log(`My name is ${first_name} ${last_name}`)
// 10. Demonstrate global vs local variable by declaring inside a function.
let iName="sudarshan"
const iCast="khatri"
function defineScope(){
    let myName="sudiksha"
    const myFriend="aayush"
    var hell="iam going to helll"
    console.log(`\nhi ima ${myName} and friend ${myFriend}`)
    console.log(`Greeting ${hell}`)
}
defineScope()
console.log(`hi ima ${iName} and friend ${iCast}`)


// 11. Increment and decrement a numeric variable and print results.
let val=123
function incDec(){
    val++
    console.log(`Increment value:${val}`)
    val--
    console.log(`Decrement value:${val}`)
}
incDec()
// 12. Declare a string variable and concatenate it with a number. Observe type coercion.
let h1="hello "
let h2="I am sudarshan khatri"
console.log(`After concatenation ${h1.concat(h2)}`)
// 13. Declare a boolean variable and toggle its value.
const value_1=true
console.log(value_1)
// 14. Use var inside a function and try accessing it outside the function.
function valueBlock(data){
    var d=data
    d+=234
    return d
}
res=valueBlock(121212)
console.log(res)
// 15. Declare a variable inside an if block using let and try to access it outside the block.
if(true){
    let p=3.14
    console.log(`Value inside block:${p}`)
}
// console.log(`Value outside block:${p}`)

// Intermediate Level (16–35)
// Focus: closures, shadowing, block scope, dynamic variables, references.
// 16. Create a function that counts how many times it has been called using a closure.

// 17. Create a counter object with increment, decrement, and reset methods using closures.
// 18. Demonstrate variable shadowing in nested functions.
function variableShadowing(){
    let count=0
    console.log("Variable inside function:",count)
    function nameCount(){
        let count=345
        console.log("variable inside inner function:",count)
    }
    nameCount()
}
variableShadowing()
// 19. Write a function that returns a multiplier function (higher-order function).
let mul=[1,2,3,4,5,6,7,8,9,10]
res=mul.map((num)=>{
    return num*num
})
console.log(res)
// 20. Create a module exposing private variables with getters/setters.
class Example{
    #speed=0

    increase(amount){
        this.#speed+=amount
        console.log("private speed:",this.#speed)
    }
}
const data=new Example()
data.increase(34)
// 21. Write a function that can only be called once; subsequent calls return undefined.
// 22. Demonstrate the difference between let and var in loops with setTimeout.
    // let dt=2323
    // var hi="sdfksjfsdkfjs"
    // setTimeout(function(){
    //     console.log("hello iam let:",dt)
    //     console.log("var before:",hi)
    //     hi="sudarshan khatri"
    //     console.log("After hi:",hi)
    // },1000)
    // console.log(dt)
    // console.log(hi)
// 23. Swap two object properties without using a temporary variable.
function swp(a,b){
    a=a+b
    b=a-b
    a=a-b
    console.log(`After swapping:${a},${b}`)
}
swp(2,3)
// 24. Merge two objects without overwriting existing keys.

// 25. Track changes to a variable using closures and print history.
let changeVrb="hello sudarshan"
console.log(changeVrb)
function history(){
    changeVrb="hello sir ji"
    console.log(changeVrb)
}
console.log(changeVrb)
history()
console.log(changeVrb)
// 26. Generate unique IDs using a private counter variable.
// 27. Implement a function that accepts variable names as strings and initializes them
// dynamically.
// 28. Write a function that automatically converts numeric strings to numbers in parameters.
function converter(id){
    let Id=Number(id)
    return Id
}
let dataId="121212"
console.log(converter(dataId))
// 29. Demonstrate temporal dead zone (TDZ) using let and const.
    // console.log(foo)
    // console.log(fu)
    // let foo="Hello miss"
    // const fu="Hello sis"
// 30. Track how many times a property of an object has been accessed.
const ob={
    "name":"sudarshan",
    "age":23,
    "cast":"khatri",
    "level":"Bachelor",
    "hobby":["swimming","Dancing","Alcohol"]
}
let i=0
for(let data in ob){
    console.log(`key ${data} and value ${ob[data]}`)
    i++
}
console.log(i)
let examp=[1,2,3,4,54,5,6,5,4,67]
examp.forEach((value,index)=>{
    console.log(`${index}:${value}`)
})
// 31. Write a function that logs the value of this in different contexts.
console.log(this)
// 32. Auto-increment a variable every second using closures.

// 33. Count undefined variables in an object.
// 34. Swap two nested object properties safely.
// 35. Deep copy a variable safely without using JSON methods.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: advanced closures, chainable APIs, dynamic behavior, memoization, interview-level
// logic.
// 36. Create a function that remembers multiple previous results (memoization).
// 37. Implement a once wrapper function that ensures a function runs only once.
// 38. Implement a function that toggles a boolean variable but limits the number of toggles.
// 39. Track historical states of variables and restore any previous state.
// 40. Freeze an object variable but allow arithmetic operations without modifying the original.
// 41. Create a function that returns another function to calculate powers dynamically.
// 42. Implement a chainable API to modify variables step by step
// (obj.setX().incrementY().resetZ()).
// 43. Create a function that counts the call stack depth dynamically.
// 44. Track active variables in memory (simulate memory usage counter).
// 45. Generate a random password stored in a private variable accessible only via a getter.
// 46. Use closures to track and log variable changes across multiple functions.
// 47. Implement a function that merges multiple counters into a single object using closures.
// 48. Demonstrate closure capturing wrong loop values with var and fix using let.
// 49. Dynamically generate getters and setters for an object using a function.
// 50. Create a function that validates variable types dynamically and throws errors for invalid
// types.



// Array= Array is a collection of contigious data .

// let data=['sudarshan','khatri','sudiksha','pransansa','aayush','subhawana','hello']
// console.log(data)

// // access the value of data
// for(let i in data){
//     console.log(`index ${i} has data ${data[i]}`)
// } 


// data.push("hi")
// data.push(1)
// console.log(`\nArray before shifted:: ${data}`)
// data.shift()
// console.log(`Array after shifted:: ${data}`)

// // unshift : insert element at the first of the array
// console.log(`\nArray before unshift::${data}`)
// data.unshift("applie")
// console.log(`Array after unshift::${data}`)

// // concat:concat is used to add the two array
// data1=[1,2,3,4,5,6,7]
// console.log(`\nArray before concatenation:: ${data}`)
// const data_3=data.concat(data1)
// console.log(`Data after concatenation:: ${data_3}`)

// // splice :takes a portion of the array and returns it as a new array
// console.log(`\nData before slice:${data}`)
// let sl_data=data.slice(1,5)
// console.log(`Data after slice:${sl_data}`)

// // splice :changes the original array by removing or adding elements.
// console.log(`\nData before splice:${data}`)
// let sp_data=data.splice(1,5,21,22,23,24)
// console.log(`Data after splice:${sp_data}`)

// // //  indexof :return the position of the index
// console.log(`\nPosition of 21::${data.indexOf(21)}`)
// //lastIndexOf(): give the index of the last occurrence of a specified value in string 
// console.log(`\nData lastIndexOf::${data.lastIndexOf(21)}`)

// // //  includes():to check data exist in array or not 
// console.log(`data exist:${data.includes(21)}`)
// console.log(`data exist:${data.includes("helloiii")}`)

// // // join(): return a new string by concationg all the string
// let arr=["sudarshan","khatri","hello","hiii","hjr"]
// console.log(`\njoin method::${arr.join()}`)
// console.log(`join method::${arr.join("-")}`)

// // // reverse():reverse the array
// let dt=[1,2,3,4,5,6,7,78,8]
// console.log(`\nreverse array::${dt.reverse()}`)
// console.log(`sort array:${dt.sort()}`)

// // // flat : create a new array with all sub array element concatenated into recursively up to the specified depth
// let fl_data=[1,2,3,4,45,[23,23,44,5,6,323,[3,4,5,[7,3],6,7]],456]
// console.log(`\n Flated array:${fl_data.flat()}`)
// console.log(`Flated array:${fl_data.flat(1)}`)
// console.log(`Flated array:${fl_data.flat(4)}`)
// console.log(`Flated array:${fl_data.flat(Infinity)}`)


// data.pop()
// console.log(data)
// console.log(data.length)
