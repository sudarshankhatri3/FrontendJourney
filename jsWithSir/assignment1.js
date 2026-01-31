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
    let newArray=data.split(" ")      

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
    return [`vowels:${vowels}`,`consonant:${con}`,`New array after split:${newArray}`,result]
}
// Write a function that takes two arrays and returns:common elements elements only in first array elements only in second array
function checkCommonValue(value1,value2){
    let res=[]
    for(let i=0;i<value1.length;i++){
        for(let j=0;j<value2.length;j++){
            if(value1[i]===value2[j]){
                res.push(value1[i])
            }
        }
    }
    return res
}
// Create a function that accepts:an array of users {name, age} a callback and returns users filtered based on callback logic.

//Level 4: Recursion + Deep Thinking
// Write a recursive function to: flatten a deeply nested array [1, [2, [3, [4, 5]]]]
let flatArr=[1, [2, [3, [4, 5]]]]
console.log(flatArr.flat(Infinity))
// Write a recursive function that checks if a string is a palindrome (ignore spaces and case).
function checkPallindrome(data){
    let rev=data.split('').reverse().join('')
    if(rev===data){
        console.log("Pallindrome")
    }else{
        console.log("Not pallindrome")
    }
}
//  Level 5: Real-World Scenarios
//Write a function bankAccount() that: returns an object with functions: deposit, withdraw, checkBalance balance must be private (closure)
class BankAccount{
    constructor(inititalBalance){
        this.inititalBalance=inititalBalance
    }
    credit(amount){
        const now=new Date()
        let year=now.getFullYear()
        let month=now.getMonth()+1
        let day=now.getDay()
        let hour=now.getHours()
        let min=now.getMinutes()
        let sec=now.getSeconds()

        let total_amount=this.inititalBalance+amount
        return `Amount ${amount} credit  and total amount ${total_amount} at ${year}/${month}/${day} ${hour}:${min}:${sec}`
    }
}

let bank=new BankAccount(343434)
console.log(bank.credit(454545))




// call the function validators
let firstData=[12,23,45,22,45,676,223,67,78,344,56767,8,34,56,788]
console.log(validators(firstData))

// call the function checkVowels
let secondData="Hello sudarshan khatri , Iam javascript"
console.log(checkVowels(secondData))


// find the common value from two array
let val1=[1,2,3,4,5,6,7,78,434,67,34,5656,67]
let val2=[546,3,6,8,3,6,89,1]
console.log(checkCommonValue(val1,val2))


//check pallindrome 
let std="aaaa"
checkPallindrome(std)