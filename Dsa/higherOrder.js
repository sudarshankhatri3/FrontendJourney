// HIGHER-ORDER LOOPS – JavaScript
// Practice Questions (Basic → Intermediate→ Advanced)
// 1 Basic Level (1–15)
// Focus: understanding map, filter, reduce, forEach with simple operations.
// 1. Use map() to double each number in an array.
let number=[2,3,4,5,6,7,8]
const res=number.map((num)=>num*2)
console.log(res)
// 2. Use map() to convert all strings in an array to uppercase.
let dataStr=["hello","hi","prakshya","rawat"]
const rs=dataStr.map((st)=>st.toUpperCase())
console.log(rs)
// 3. Use filter() to get only even numbers from an array.
const evenNumber=number.filter((num)=>num%2==0)
console.log(evenNumber)
// 4. Use filter() to get numbers greater than 10 from an array.
let nm=[12,11,2,34,567,16,34,2,6,3,67,2,1,6]
const greaterThan=nm.filter((n)=>n>=10)
console.log(greaterThan)
// 5. Use reduce() to calculate the sum of an array of numbers.
const rdResult=nm.reduce((nm,currentElement)=>nm+currentElement)
console.log(rdResult)
// 6. Use reduce() to calculate the product of an array of numbers.
const prodArr=nm.reduce((n,currentElement)=>n*currentElement)
console.log(prodArr)
// 7. Use forEach() to print each element of an array.
nm.forEach((currentEl)=>{
    console.log(currentEl)
})
// 8. Use forEach() to print the index and value of each array element.
nm.forEach((currentElement,index)=>{
    console.log(`Index ${index} and  value ${currentElement}`)
})
// 9. Use map() to add 5 to each element of an array.
let add=nm.map(nm=>nm+5)
console.log(add)

// 10. Use filter() to get all strings that start with a specific letter.
let getAll=["sudarshan","subhawana","prinsa","prajjwal","safal"]
let rst=getAll.filter((std)=>std[0]==="s")
console.log(rst)
// 11. Use reduce() to find the maximum number in an array.
const maxRes=nm.reduce((n,currentElement)=>{
    if(currentElement>n){
        n=currentElement
    }
    return n
})
console.log(maxRes)
// 12. Use reduce() to find the minimum number in an array.
const minRes=nm.reduce((n,currentElement)=>{
    if(currentElement<n){
        n=currentElement
    }
    return n
})
console.log(minRes)
// 13. Use forEach() to create a new array of squares of each number (manual push).
nm.forEach((currentElement)=>{
    console.log(Math.pow(currentElement,2))
})
// 14. Use map() to convert an array of numbers to strings.
const converter=nm.map(n=>n.toString())
console.log(converter)
// 15. Use filter() to remove all falsy values from an array.
let falsyValue=[1,2,3,4,false,0,"",null,undefined,NaN]
const resultFalsy=falsyValue.filter(Element=>Element)
console.log(resultFalsy)
// 2 Intermediate Level (16–35)
// Focus: array manipulations, nested data, and combining higher-order functions.
// 16. Use map() and filter() together to get squares of even numbers.
const twoResult=nm.filter(n => n % 2 === 0)  // keep only even numbers
    .map(n => n * n); 
console.log(twoResult)
// 17. Use reduce() to count the total number of elements in a nested array.
const count=nm.reduce((previousValue,currentValue)=>previousValue+1,0)
console.log(count)
// 18. Use reduce() to flatten a 2D array into a 1D array.
// 19. Use map() to extract a property from an array of objects.
let profile=[
    { name: "sudarshan", cast: "khatri", age: 23 },
    { name: "ram", cast: "thapa", age: 30 },
    { name: "hari", cast: "magar", age: 28 }
]
const property=profile.map(data=>{
    console.log(`my name is ${data.name} ${data.cast} and age is ${data.age}`)
})
console.log(property)
// 20. Use filter() to get objects with a property value greater than a threshold.
let 
// 21. Use reduce() to sum up a specific property in an array of objects.
// 22. Use map() to prepend a string to each element of an array.
// 23. Use filter() to remove duplicate elements from an array.
// 24. Use reduce() to group objects by a property.
// 25. Use forEach() to update elements of an array in-place.
// 26. Use map() to convert an array of temperatures from Celsius to Fahrenheit.
// 27. Use filter() to get numbers divisible by 3 or 5.
// 28. Use reduce() to find the longest string in an array.
// 29. Use map() to create an array of boolean values based on a condition.
// 30. Use filter() to find words longer than n characters.
// 31. Use reduce() to create a frequency counter for array elements.
// 32. Use map() to reverse each string in an array of strings.
// 33. Use filter() to keep only positive numbers from an array.
// 34. Use reduce() to calculate the product of all odd numbers in an array.
// 35. Use forEach() to log elements conditionally (e.g., log only numbers > 10).
// 3 Advanced / Higher Level (36–50)
// Focus: complex logic, chaining, nested arrays/objects, and interview-level challenges.
// 36. Use map() and reduce() to calculate the total price of products in a cart.
// 37. Use filter() and reduce() to find the sum of all even numbers in an array.
// 38. Use map() to extract nested object properties into a new array.
// 39. Use reduce() to flatten a deeply nested array (multi-level).
// 40. Use map() and filter() to implement a “search” feature in an array of objects.
// 41. Use reduce() to create an object where keys are array values and values are their
// counts.
// 42. Chain filter() → map() → reduce() to process numbers in an array (e.g., sum of
// squares of positive numbers).
// 43. Use map() to add an index property to each object in an array.
// 44. Use reduce() to group strings by their first letter.
// 45. Use filter() and map() to normalize and clean an array of strings.
// 46. Use reduce() to merge an array of objects into a single object.
// 47. Use map() to convert an array of date strings to Date objects.
// 48. Use filter() to find objects with multiple conditions (e.g., age > 18 and active = true).
// 49. Implement a “top N elements” finder using sort() and slice() with
// map()/filter().
// 50. Chain map(), filter(), reduce(), and forEach() to generate a report summary
// from an array of objects (e.g., total sales, average rating, count of products above threshold)