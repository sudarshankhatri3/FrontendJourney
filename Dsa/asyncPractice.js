// ASYNCHRONOUS FUNCTIONS –
// JavaScript Practice Questions (Basic →
// Intermediate → Advanced)
// 1⃣ Basic Level (1–15)

const { reject } = require("async");

// const { reject } = require("async")

// // #callback hell 
// function callback(){
//     setTimeout(()=>{
//         console.log("hello sudarshan  khatri")
//     },1000)
//     console.log("I am practicing callback hell")
// }
// function dataTransfer(callback){
//     console.log("Your data is cut off 80 percentage !!!!")
//     callback()
//     console.log("your name is what")
// }
// function dataEmpty(dataTransfer){
//     console.log("your data is finsih warning is given already")
//     dataTransfer()
// }

// dataEmpty(function(){
//     dataTransfer(function(){
//         callback(function(){
//             console.log("done")
//         })
//     })
// })
// // Focus: understanding Promise creation, then, catch, and basic async/await.
// // 1. Create a simple Promise that resolves with "Hello World" and log the result using .then().
// let res=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        resolve("Hello world") 
//     },2000);
// })
// res.then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("program executed sucessfully !!!!")
// })
// // 2. Create a Promise that rejects with an error and handle it with .catch().
// const resHandle=new Promise((resolve,reject)=>{
//     let isSucess=true
//     if(isSucess){
//         resolve("He is sucessfull")
//     }else{
//         reject("he is not sucess")
//     }
    
// })
// resHandle.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// }).finally("all task done")
// // 3. Create a Promise that resolves after 2 seconds using setTimeout.
// let twoSec=new Promise((resolve,reject)=>{
//     let a=34
//     let b=45
//     setTimeout((value)=>{
//         value=a+b
//         if(value){
//             resolve(value)
//         }else{
//             reject("No value")
//         }
//     },2000)
// })
// twoSec.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// }).finally("program executed finally !!!!")
// 4. Use Promise.resolve() to immediately resolve a value.
const cat=new Promise((resolve,reject)=>{
    fetch("https://api.freeapi.app/api/v1/public/randomproducts/30")
    .then((response)=>{
        resolve(response)    
    })
    .catch(error => reject(error));
})
cat.then((res)=>res.json())
   .then((data)=>{
      console.log(data)
   })
   .catch((err)=>{
    console.log(err)
   })
 // 5. Use Promise.reject() to immediately reject with an error.
const product=new Promise((resolve,reject)=>{
    fetch("https://api.freeapi.app/api/v1/public/cats/cat/random")
    .then((response)=>{
        if(response.ok){
            resolve(response)
        }else{
            reject("Network not found")
        }
    })
})
product.then(data=>data.json())
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
// 6. Convert a callback-based function (e.g., setTimeout) into a Promise.  
// 7. Write an async function that returns a string and log it using await.
// 8. Write an async function that throws an error and handle it using try/catch.
// 9. Chain multiple .then() calls on a Promise to perform sequential operations.
// 10. Handle errors in a Promise chain using .catch().
// 11. Use finally() to execute code after a Promise resolves or rejects.
// 12. Convert a simple synchronous function to an async function and test it.
// 13. Use await to pause execution until a Promise resolves.
// 14. Create a Promise that resolves or rejects based on a random number condition.
// 15. Write an async function to fetch a simple resource using fetch (mock URL).
// 2⃣ Intermediate Level (16–35)
// Focus: chaining Promises, multiple async calls, error handling, and parallel execution.
// 16. Chain multiple Promises to calculate a series of operations sequentially.
// 17. Use Promise.all() to run multiple Promises in parallel and log results.
// 18. Use Promise.allSettled() to get the status of multiple Promises.
// 19. Use Promise.race() to get the result of the first settled Promise.
// 20. Write an async function to fetch data from multiple APIs sequentially using await.
// 21. Write an async function to fetch data from multiple APIs in parallel using
// Promise.all().
// 22. Write a function that retries a Promise 3 times if it fails.
// 23. Convert a nested callback function (callback hell) into Promises.
// 24. Use .then() and .catch() to handle success and error separately in a Promise
// chain.
// 25. Implement a delay function using a Promise and setTimeout.
// 26. Use async/await to read multiple JSON files sequentially.
// 27. Use async/await with try/catch to handle errors from multiple API calls.
// 28. Write a Promise that resolves after a random delay and use it in Promise.all().
// 29. Chain Promises to fetch a user, then fetch posts of that user, then comments of the first
// post.
// 30. Write a function to convert a Node.js callback-style function (error-first) into a Promise.
// 31. Use async/await to fetch data, manipulate it, and log the result.
// 32. Write an async function that waits for 2 different Promises to complete and returns the
// sum.
// 33. Implement a Promise that resolves only if a number is even, otherwise rejects.
// 34. Use Promise.all() with mixed resolved and rejected Promises and handle results.
// 35. Implement a function that wraps a fetch API call with timeout handling using
// Promise.race().
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex async patterns, real-world use cases, and interview-level challenges.
// 36. Implement a function that executes multiple async operations sequentially with delays.
// 37. Implement a function that fetches multiple URLs concurrently and returns the fastest
// response.
// 38. Use async/await to handle paginated API results.
// 39. Write a function that retries a fetch request with exponential backoff.
// 40. Implement a queue system for async tasks using Promises.
// 41. Create a wrapper function to handle async errors globally using try/catch.
// 42. Implement a cache system that returns cached Promise results if available.
// 43. Use Promise.any() to get the first successful result among multiple async calls.
// 44. Implement a timeout wrapper for any async function using Promise.race().
// 45. Use async/await to fetch data, filter results, and return only specific items.
// 46. Implement a concurrent limit for async requests (e.g., only 3 at a time).
// 47. Write a function to handle dependent async tasks in order using async/await.
// 48. Implement a polling function that repeatedly calls an API until a condition is met.
// 49. Create a function that executes multiple async tasks in batches and collects results.
const url=[
    "https://dogapi.dog/api/v2",
    "https://api.alquran.cloud",
    "https://alquran.api.islamic.network",
    "https://alquran.api.alislam.ru"
]


// 50. Implement a function that wraps a callback API into a Promise-based API and demonstrates error handling.