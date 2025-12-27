// ARRAYS – JavaScript Practice Questions
// (Basic → Intermediate → Advanced)
// 1⃣ Basic Level (1–15)
// Focus: array creation, access, length, simple iteration.
// 1. Create an array of 5 numbers and print all elements.
// 2. Create an array of strings and print the first and last elements.

let ar=[1,2,3,4,4,5,6,7]
console.log(`Length of array:${ar.length}`)
console.log(`first value:${ar[0]} and last value:${ar[ar.length-1]}`)
for(let i=0;i<ar.length;i++){
    console.log(`value at index ${i} is ${ar[i]}`)
}
// 2. Create an array of strings and print the first and last elements.
let sArr=["hello","iam","sudarshan","khatri"]
console.log(`First element:${sArr[0]} and last element::${sArr[sArr.length-1]}`)
// 3. Find the length of an array.
console.log(`lenght of array::${sArr.length}`)
// 4. Add an element at the end of an array using push().
sArr.push("ssssssss")
console.log(`After push::${sArr}`)
// 5. Remove the last element using pop().
sArr.pop()
console.log(`After pop:${sArr}`)
// 6. Add an element at the beginning using unshift().
sArr.unshift("helloBro")
console.log(`after unshift:${sArr}`)
// 7. Remove the first element using shift().
sArr.shift()
console.log(`\nAfter shift:${sArr}`)
// 8. Access the middle element of an array.
let mid=parseInt(sArr.length/2)
console.log(`value at the middle:${sArr[mid]}`)
// 9. Replace an element at a specific index.
let rValue="parsanasa"
console.log(`Repalce the value::${sArr[3]=rValue}`)
console.log(`array::${sArr}`)
// 10. Concatenate two arrays using concat().
let arr_1=[1,2,3,4,5,6,7]
let arr_2=["mouse","cat","dog","goat"]
console.log(`After concat:${arr_1.concat(arr_2)}`)
// 11. Check if a value exists in an array using includes().
console.log(`Check value::${arr_1.includes(3)}`)
console.log(`Check value::${arr_1.includes(334)}`)
// 12. Find the index of a specific element using indexOf().
console.log(`Use of indexOf::${arr_2.indexOf("mouse")}`)
console.log(`Use of indexOf::${arr_2.indexOf("goat")}`)
// 13. Reverse an array using reverse().
console.log(`reverse array::${arr_2.reverse()}`)
// 14. Sort an array of numbers using sort().
let srt=[1212,323,22,4554,332,546,37,99,33,89]
console.log(`sort array:${srt.sort()}`)
// 15. Convert an array into a string using join().
let arr = [22, 33, 37, 89, 99];
console.log(`after join:${arr.join(",")}`)
// 2⃣ Intermediate Level (16–35)
// Focus: iteration, filtering, mapping, searching, and array manipulation.
// 16. Filter all even numbers from an array.
function fiterExample(nm){
    return nm%2==0
}
let data=[1,2,45,45,3,22,454,34,567,7845,3334]
result=data.filter(fiterExample)
console.log(`Result:${result}`)
// 17. Map an array of numbers to their squares.
function square(n) {
    return n * n;
}
let rs=data.map(square)
console.log(`Result after map:${rs}`)
// 18. Reduce an array to find the sum of all elements.
function sum(n){
    let sum=0
    for(let i=0;i<data.length;i++){
        sum+=data[i]
    }
    return sum
}
let reduce_rs=data.reduce(sum)
console.log(`Reduce the array:${reduce_rs}`)
// 19. Find the maximum and minimum number in an array without using Math.max() or Math.min().
function findMinMax(arr){
    let max=0
    let res=[]
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    res.push(max)
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    res.push(min)
    return res
}
let minMax=[11,45,21,7,1,68,2,5]
console.log(findMinMax(minMax))
// 20. Remove duplicates from an array.
// 21. Flatten a 2D array into a 1D array.
function convertTwo(arr){
    let res=arr.flat(Infinity)
    return res
}
let matrix=[1,2,3,4,5,[2,3,4,5,6],[23,45,787,3,2],566]
console.log(convertTwo(matrix))
// 22. Find all elements greater than a given number.
function greaterNumber(arr,nm){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>nm){
            res.push(arr[i])
        }
    }
    return res
}
let findGreate=[2,34,5,32,57,445,6767,3]
let target=45
console.log(greaterNumber(findGreate,target))
// 23. Count the occurrence of each element in an array.
function countOccurance(arr){
    let countMap=new Map()

    for(let item of arr){
        if(countMap.has(item)){
            countMap.set(item,countMap.get(item)+1)
        }else{
            countMap.set(item,1)
        }
    }
    return countMap
}
let cnt=[1,2,3,4,5,5,4,3,2,1,32,1,22,42]
console.log(countOccurance(cnt))
// 24. Merge two arrays and remove duplicates.

// 25. Check if an array is sorted in ascending order.

// 26. Rotate an array to the right by k positions.
// 27. Find the second largest number in an array.
function sortedArray(arr){
    for(let i=0;i<arr.length;i++){
        let nm=arr[i]
        p=i
        for(let j=i;j<arr.length;j++){
            if(nm>arr[j]){
                arr[j]=nm
                p=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[p]
        arr[p]=temp
    }
    return arr[arr]
}
let second=[12,34,756,4,7,3,765,43]
console.log(sortedArray(second))
// 28. Split an array into two halves.
// 29. Find the first element that satisfies a condition using find().
// 30. Filter all string elements from a mixed array.
// 31. Use every() to check if all elements satisfy a condition.
// 32. Use some() to check if at least one element satisfies a condition.
// 33. Remove all falsy values (0, "", null, undefined, false, NaN) from an array.
// 34. Convert an array of strings to uppercase using map().
// 35. Merge an array of arrays into a single array using reduce().
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex array manipulations, nested arrays, higher-order functions, and interview-level
// challenges.
// 36. Implement a function to rotate an array left by k positions.
// 37. Implement a function to find the longest increasing subsequence in an array.
// 38. Group array elements by a specific property (e.g., an array of objects grouped by age).
// 39. Implement a function to find the pair of numbers with the maximum sum.
// 40. Find all unique pairs in an array that sum to a specific value.
// 41. Implement a function to move all zeros to the end of an array.
// 42. Implement a function to flatten a nested array of arbitrary depth.
// 43. Write a function to remove elements that appear more than n times.
// 44. Implement a function to find the intersection of two arrays.
// 45. Implement a function to find the difference between two arrays.
// 46. Implement a function to find the missing number in a sequential array.
// 47. Implement a function to find duplicates in an array.
// 48. Write a function to chunk an array into smaller arrays of size n.
// 49. Implement a function to rotate a matrix (2D array) clockwise.
// 50. Implement a function to find all permutations of elements in an array