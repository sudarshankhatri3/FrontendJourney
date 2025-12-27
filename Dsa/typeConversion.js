// TYPE CONVERSION – JavaScript Practice
// Questions (Basic → Intermediate →
// Advanced)
// 1⃣ Basic Level (1–15)
// Focus: primitive type conversions (string ↔ number ↔ boolean).
// 1. Convert the string "123" to a number using Number().
let sData="123"
console.log(Number(sData))
// 2. Convert the number 456 to a string using String().
let nData=456
console.log(String(nData))
// 3. Convert boolean true to number.
let bData=true
console.log(Number(bData))
// 4. Convert number 0 to boolean.
let nd=0
console.log(Boolean(nd))
// 5. Use unary + to convert a string "78" into a number.
let uData="78"
let ud=+uData
console.log(ud)
// 6. Use template literals to convert a number into a string.
console.log(`convert string to number::${Number("hello")}`)
// 7. Convert null to a number and explain the result.
let nullData=null
console.log(`convert null to number::${Number(nullData)}`)
// 8. Convert undefined to a number and explain the result.
let unData=undefined
console.log(`convert null to number::${Number(unData)}`)
// 9. Convert "false" string to a boolean using double negation.
let boolData="false"
console.log(`convert string to boolean::${boolData}`)
// 10. Use parseInt to convert "123abc" to number.
console.log(`Result:${parseInt("123abc")}`)
// 11. Use parseFloat to convert "12.34px" to number.
console.log(`Result:${parseFloat("12.34px")}`)
// 12. Demonstrate implicit type coercion in 5 + "5".
console.log(5+"5")
// 13. Demonstrate implicit type coercion in "10" - 5.
console.log("10"-5)
// 14. Convert number 100 to binary, octal, and hexadecimal string.
let nm=100
console.log(`convert number to binary::${nm.toString(2)}`)
console.log(`convert number to octal::${nm.toString(8)}`)
console.log(`convert number to hexadecimal::${nm.toString(16)}`)
// 15. Convert an array [1,2,3] to a string using toString() and join().
let arr=[1,2,3]
console.log(`convert to number::${arr.toSorted().join()}`)
// 2⃣ Intermediate Level (16–35)
// Focus: advanced conversions, edge cases, reference vs primitive.
// 16. Write a function that converts all string numbers in an array to actual numbers.
function convertStringToNumber(arr){
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]===String){
            arr[i]=Number(arr[i])
        }
    }
    return arr

}
let dataList=["12",34,56,"123",456]
console.log(`\n Before data::${dataList}`)
console.log(`After data::${convertStringToNumber(dataList)}`)
// 17. Write a function that converts all values in an object to numbers where possible.
function convertToObject(obj){
    for(let key in obj){
        if(typeof obj[key]==="string" && !isNaN(obj[key])){
            obj[key]=Number(obj[key])
        }
    }
    return obj
}
let ob={name:"sudarshan",age:"345",level:"+2"}
console.log(`\n Before data::${ob}`)
console.log(`After data::${convertToObject(ob)}`)
// 18. Convert a string "true" or "false" into a boolean.
let sBool="true"
console.log(`output:${sBool}`)
let sBool1="false"
console.log(`output:${sBool1}`)
// 19. Write a function that converts an array of mixed types [1,"2",true,null] to numbers.
function mixedConverter(ar){
    for(let i=0;i<ar.length;i++){
        if(typeof ar[i]!==Number){
            ar[i]=Number(ar[i])
        }
    }
    return ar
}
let dt=[1,"2",true,null]
console.log(`\n Before data::${dt}`)
console.log(`After data::${mixedConverter(dt)}`)
// 20. Convert a nested array [[1,2],[3,4]] to a flat array of strings.
let flatData=[[1,2],[3,4]]
console.log(`flatted data::${flatData.flat()}`)
// 21. Write a function that converts BigInt to number safely, handling overflow.
function convertBigInt(bgn){
    const max=Number.MAX_SAFE_INTEGER
    const min=Number.MIN_SAFE_INTEGER
    if(bgn>BigInt(max) || bgn<BigInt(min)){
        return {
            sucess:false,
            value:null,
            message:"Overflow: BigInt value is too large to be converted safely."
        }

    }
    return {
        sucess:true,
        value:Number(bgn),
        message:"conversion sucessfull"
    }
}
const bit=13123131231213331131231313131231123
console.log(`orginal data:${bit}`)
console.log(`convet into number::${convertBigInt(bit)}`)
// 22. Implement a function that converts a string into a number and returns 0 if it fails.
function convertStringToNumber(str){
    if(typeof str===String){
        return Number(str)
    }
    return 0
}
console.log( convertStringToNumber("124323"))
// 23. Convert a Set of numbers into an array of strings.
function convertNumberArray(nbr){
    for(let i=0;i<nbr.length;i++){
        if(typeof nbr[i]===Number){
            nbr[i]=String(nbr[i])
        }
    }
    return nbr
}
let ar=[1,2,3,4,5,56,7,7]
console.log(`Result::${convertNumberArray(ar)}`)
// 24. Convert a Map into an object with string keys and values.
const myMap = new Map([
    ["name", "Sudarshan"],
    ["age", 25],
    ["level", "+2"]
]);
const obj = Object.fromEntries(
    [...myMap].map(([key, value]) => [String(key), String(value)])
);
console.log("Original Map:", myMap);
console.log("Converted Object:", obj);

// 25. Write a function that converts a numeric string with commas "1,234" to a number.

// 26. Convert a boolean array [true,false,true] into an array of 1s and 0s.
function convertBoolean(bValue){
    for(let i=0;i<bValue.length;i++){
        if(typeof bValue[i]==="boolean"){
            bValue[i]=Number(bValue[i])
        }
    }
    return bValue
}
let bdata=[true,false,true]
console.log(`Result::${convertBoolean(bdata)}`)
// 27. Write a function that converts a Date object into a timestamp number.
// 28. Convert a number into a formatted string with 2 decimal places using toFixed().
// 29. Write a function to convert any iterable (string, array, set) into an array of numbers.
// 30. Convert a string "123.456abc" to a float using parseFloat and handle invalid
// characters.
// 31. Convert null to string, number, and boolean and print results.
// 32. Convert undefined to string, number, and boolean and print results.
// 33. Convert a string "0" to boolean using different methods and compare results.
// 34. Write a function to safely convert string input to number using Number(), parseInt,
// and parseFloat, and return the most accurate value.
// 35. Convert an array of booleans [true,false,true] into a single integer treating true as
// 1 and false as 0 (e.g., [true,false,true] → 101).
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex conversion logic, dynamic types, and interview-level challenges.
// 36. Write a function that converts an object of key-value pairs into an array of numbers
// where possible.
// 37. Implement a function that converts an array of strings into BigInts safely.
// 38. Convert a mixed-type array [1,"2",true,null,"abc"] into numbers, ignoring
// invalid conversions.
// 39. Write a function to dynamically convert a variable to a target type (string, number,
// boolean).
// 40. Convert a string "1e3" into a number and explain why it works.
// 41. Write a function that converts all object properties to string recursively.
// 42. Implement a function that converts a Map to an array of numbers based on the values.
// 43. Convert a string "123.456.789" to a number safely (handle invalid format).
// 44. Implement a function that converts a nested array of strings into numbers recursively.
// 45. Write a function that converts any input value to boolean following JS coercion rules but
// logs the conversion steps.
// 46. Convert a floating-point number 123.4567 into an integer without rounding.
// 47. Write a function that converts a string "true,false,true" into an array of booleans.
// 48. Implement a function that converts a date string "2025-11-13" into a timestamp
// number.
// 49. Convert a string "0x1A" into a number using parseInt with radix.
// 50. Write a function that converts any iterable (array, string, set, map) into an array of
// numbers, ignoring invalid entries, and returns the sum of numbers.