// DATA TYPES – JavaScript Practice
// Questions (Basic → Intermediate → Advanced)
// Basic Level (1–15)
// Focus: identifying, converting, and using primitive data types (number, string, boolean,
// null, undefined, symbol, bigint).
// 1. Declare //variables of type string, number, boolean, null, and undefined and print their types.
function typeIdentify(){
    let name="hello"
    let score=2345
    let isTrue=true
    let hi=null
    let undefine
    console.log(`name type::${typeof(name)} , \nscore type::${typeof(score)}, \nistrue type::${typeof(isTrue)},\ntype of hi ${typeof(hi)},\nundefine type::${undefine}`)
}
typeIdentify()
// 2. Check the type of a variable using typeof.
let nm="string"
let nm1=undefined
let nm2
let hello={name:"sudarshan",cast:"khatri",age:34,education:"Bachelor"}
console.log(`\nUsing typeof:: nm${typeof(nm)} ,nm1${typeof(nm1)},nm2${typeof( nm2)},hello${typeof(hello)}`)
// 3. Convert a string "123" into a number and verify its type.
function convert(name){
    let result=Number(name)
    return `original data:${name} and result:${result}`
}
let details="1234"
console.log(`convert string into number::${convert(details)}`)
// 4. Convert a number 456 into a string and concatenate with " is a number".
function numberToString(nmbr){
    let res=String(nmbr)
    return `\noriginal data:${nmbr} and result:${res} is a number`
}
console.log(numberToString(121))
// 5. Demonstrate implicit type coercion in addition of a number and string.
console.log("hello"+10)
console.log(123+"hi")
// 6. Check if a variable is null or undefined.
function checked(data){
    if(data===null){
        return "data is null"
    }else if(data===undefined){
        return "data is undefined"
    }else{
        return `Data type::${typeof(data)}`
    }
}
let dt=null
let dt_1
let dt_2=3434
console.log(checked(dt))
console.log(checked(dt_1))
console.log(checked(dt_2))
// 7. Create a symbol and demonstrate that two symbols with the same description are different.
let sym=Symbol('hello')
console.log(sym)
console.log(typeof(sym))
// 8. Declare a BigInt variable and add two BigInts.
let bg=BigInt(1323243453434343434343434)
let bg_1=BigInt(43345343453453453435345)
console.log(`Result::${bg+bg_1}`)
// 9. Create a boolean variable and toggle it using !.
let check=true
if(check===true){
    console.log(`Data is true`)
}
// 10. Demonstrate the difference between == and === with numbers and strings.
let aData="1234"
let bData=1234
if(aData==bData){
    console.log(`data is not strictly checked`)
}
if(aData===bData){
    console.log('data is strictly checked')
}
// 11. Create a string with quotes inside using template literals.
console.log(`hello iam sudarshan khatri`)
// 12. Parse a string "12.34" into a float using parseFloat.
let sData="12.34"
console.log(`After conversion::${parseFloat(sData)}`)
// 13. Parse a string "56" into an integer using parseInt.
let iData="56"
console.log(`After conversion::${parseInt(iData)}`)
// 14. Check if a number is NaN and handle it safely.
let iNan="hello"
if(Number.isNaN(iNan)){
    console.log(`value is nan`)
}else{
    console.log("value is not nan")
}
// 15. Demonstrate how JavaScript treats null and undefined in arithmetic operations.
console.log(null+5)
console.log(null*4)
console.log(null/2)
console.log(undefined+5)
console.log(undefined*2)
console.log(undefined/3)
// 2⃣ Intermediate Level (16–35)
// Focus: type conversions, reference vs primitive, dynamic typing, and type checks.
// 16. Write a function that converts all string numbers in an array to actual numbers.
function convertToNumber(data){
    let value=Number(data)
    return value
}
let std="12345"
let he=convertToNumber(std)
console.log(he)
console.log(typeof(he))
// 17. Implement a function that converts any value to boolean and returns it.
if(true){
    console.log("This is true")
}
// 18. Check if a variable is an array using Array.isArray().
let values=[1,2,3,4,5,655,6,4,34,23]
console.log(Array.isArray(values))
// 19. Convert an array [1,2,3] to a string and back to an array.
tp=values.toString()
console.log(tp)
console.log(typeof(tp))

// 20. Write a function that sums numbers in an array but ignores non-numeric types.
function sumData(dt){
    let sum=0
    for(let i=0;i<dt.length;i++){
        if(dt[i]===Number){
            sum+=dt[i]
        }
    }
    return sum
}
let duplicate=[1,2,3,4,45,43,"4343",45]
console.log(sumData(duplicate))
// 21. Check if a variable is an object but not null or an array.
// 22. Write a function to safely add two variables that could be numbers or numeric strings.
// 23. Merge two objects and handle overlapping keys by concatenating values.
// 24. Write a function that converts a boolean to number and vice versa.
// 25. Create a function to check if a value is NaN or not.
// 26. Convert a mixed-type array [1, "2", true, null] into an array of numbers using
// rules: true→1, false→0, null→0.
// 27. Write a function that deeply clones an object with nested properties.
// 28. Demonstrate how primitive types are copied by value and objects are copied by
// reference.
// 29. Create a function that dynamically changes the type of a variable based on input.
// 30. Convert a number to binary, octal, and hexadecimal strings.
// 31. Implement a function that validates if a string can be safely converted to a number.
// 32. Create a function that returns the type of a variable in human-readable form (Number,
// String, Boolean, Array, Object).
// 33. Write a function that converts any type to a string safely.
// 34. Implement a function to check if a variable is iterable (like array, string, map, set).
// 35. Create a function to sum numeric values in an object’s properties, ignoring non-numeric
// types.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex type handling, dynamic typing, symbols, BigInt, and interview-level logic.
// 36. Implement a function that merges two arrays of mixed types into one array of numbers
// only.
// 37. Create a function that takes any input and returns a standardized type (number,
// string, boolean) for further computation.
// 38. Write a function that counts how many variables of each type exist in an object.
// 39. Demonstrate a closure that stores variables of different types and performs type-safe
// operations.
// 40. Create a function that converts all BigInt numbers in an array to normal numbers
// safely.
// 41. Implement a function that checks equality of two variables with dynamic type coercion
// rules.
// 42. Create a function that converts a nested object into a flat array of values, keeping their
// type.
// 43. Write a function that uses Symbol as object keys and iterates over all keys safely.
// 44. Implement a function that dynamically converts all null and undefined values in an
// object to zero.
// 45. Create a function that performs arithmetic on mixed types (numbers, strings, booleans)
// safely.
// 46. Write a function that converts a string representation of a boolean ("true", "false")
// to actual boolean.
// 47. Implement a function that takes any input and returns a number: string→parseFloat,
// boolean→1/0, null→0, others→throw error.
// 48. Write a function that converts an array of numeric strings into an array of BigInt.
// 49. Implement a function that merges multiple objects with properties of different types,
// handling conflicts intelligently.
// 50. Create a function that validates a variable’s type against a schema object (e.g., {name:
// "string", age: "number"}) and returns an error for mismatch