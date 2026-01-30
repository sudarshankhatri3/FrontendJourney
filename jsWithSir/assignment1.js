// Write a function that takes an array of numbers and returns an object with: total sum average maximum minimum ,count of even numbers
function validators(num){
    let max=0
    let min=num[0]
    let total=0
    let countEven=0
    for(let i=0;i<num.length;i++){
        total+=num[i]
        if(num[i]%2===0){
            countEven++
        }
        if(num[i]>max){
            max=num[i]
        }
        if(num[i+1]<min){
            min=num[i+1]
        }
    }
    return [`Total:${total}`,`countEven:${countEven}`,`Max:${max}`,`min:${min}`]
}
// Create a function that accepts a string and returns: number of vowels  number of consonants,longest word
function checkVowels(data){
    let vowels=0
    let con=0
    let newArray=data.split("")
    

    // find the longest word 
    let result=[]
    let maxIndex=0
    let p=0
    for(let i=0;i<newArray.length;i++){
        let indexLength=newArray[i].length
        if(indexLength>maxIndex){
            maxIndex=indexLength 
            p=i
        }
    }
    result.push(maxIndex,p)

    // count the vowels or consonant 
    for(let i=0;i<data.length;i++){
        if(data[i]==='a' || data[i]==='e'||data[i]==='i'||data[i]==='o'||data[i]==='u'||data[i]==='A'||data[i]==='E'||data[i]==='I'||data[i]==='O'||data[i]==='U'){
            vowels++
        }else{
            con++
        }
    }
    return [`vowels:${vowels}`,`consonant:${con}`,result]
}





// Write a function that takes two arrays and returns:common elements elements only in first array elements only in second array

// ⚙️ Level 2: Functions Returning Functions

// Write a function calculator(operation) that returns another function.

// operation can be "add", "subtract", "multiply"

// Returned function should accept two numbers and perform the operation.

// Create a function discountCalculator(discountPercent) that returns a function.

// Returned function accepts price

// Returns discounted price

// 🔁 Level 3: Callback & Higher-Order Functions

// Write a function processArray(arr, callback) that:

// applies the callback to each element

// returns a new array

// Create a function that accepts:

// an array of users {name, age}

// a callback
// and returns users filtered based on callback logic.

// 🧠 Level 4: Recursion + Deep Thinking

// Write a recursive function to:

// flatten a deeply nested array

// [1, [2, [3, [4, 5]]]]


// Write a recursive function that checks if a string is a palindrome (ignore spaces and case).

// Create a function that finds the sum of digits of a number using recursion.

// 🧩 Level 5: Real-World Scenarios

// Write a function bankAccount() that:

// returns an object with functions: deposit, withdraw, checkBalance

// balance must be private (closure)

// Write a function that simulates login authentication:

// accepts username & password

// stores attempts count

// locks user after 3 failed attempts



// call the function validators
let firstData=[12,23,45,22,45,676,223,67,78,344,56767,8,34,56,788]
console.log(validators(firstData))

// call the function checkVowels
let secondData="Hello sudarshan khatri , Iam javascript"
console.log(checkVowels(secondData))