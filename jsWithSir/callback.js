// function data(a){
//     a("helllo sudarshan")
//     return a
// }

// function doSomething(text){
//     console.log(text)
// }

// let res=data(doSomething)("hello")
// console.log(res)



// function fetch(data,callback){
//     console.log("Hello sudarshan")
//     callback(data)
   
// }

// function helo(value){
//    console.log(value)
// }

// fetch("helli",helo)





function checker(element){
    return element%2===0
}


function checkerData(element){
    return  element.length%2===0
}


function globalFilter(dataValue,callBack){
    let res=[]
    dataValue.forEach(data => {
        const element=data
        const val=callBack(element)
        if(val){
            res.push(element)
        }
    });
    return res
}

let data1=[1,2,3,4,5]
console.log(globalFilter(data1,checker))


let std=["data","value","hell","rashkesh"]
console.log(globalFilter(std,checkerData))




function transformer(data){
    return data+3
}

function globalTransformer(dataMapper,callBack){
    let res=[]
    dataMapper.forEach(value=>{
        let element=value
        let finalResult=callBack(element)
        res.push(finalResult)  
    })
    return res
}


let mapArray=[2,3,4,5,6,7,7]
console.log(globalTransformer(mapArray,transformer))




// splice method 
function splicePicker(data){
    return 
}



function reverseData(value){
    let reversedRes=[]
    for(let i=value.length-1;i>=0;i--){
        reversedRes.push(value[i])
    }
    return reversedRes
}

let rData=[1,2,3,4,5,6,7,8]
console.log(reverseData(rData))
console.log(reverseData("hello nepal"))




function splicerValue(data){
    return data
}


function spliceChecker(dataArray,startIdx,endIdx,callBack){
    let rs=[]
    for(let i=startIdx;i<=endIdx;i++){
        let value=callBack(dataArray[i])
        rs.push(value)
    }
    return rs
}


let rng=[12,34,56,32,5,6,67,7,532,2]
console.log(spliceChecker(rng,2,7,splicerValue))




const dataResponse=new Promise(function(resolve,reject){
    let result=true
    if(result){
        resolve("hello iam sudarshan khatri")
    }else{
        reject("Iam not sudarshan khatri")
    }
})

dataResponse.then(function(data){
    console.log(data)
}).catch(function(data){
    console.log(data)
}).finally(function(){
    console.log("resolve")
})



const promise1=new Promise(function(resolve){
    setTimeout(resolve("hello sudarshan khatri"),2000)
})
const promise2=new Promise(function(resolve){
    setTimeout(resolve("Hi iam sudarshan man"),1000)
})
const promise3=new Promise(function(resolve){
    setTimeout(resolve("hi iam pyakuli"),5000)
})

Promise.all([promise1,promise2,promise3]).then(function(res){
    console.log(res)
}).catch(function(ress){
    console.log(ress)
})

Promise.race([promise1,promise2,promise3]).then(function(data){
    console.log(data)
})
// Fetch user data and:

// If age >= 18, fetch posts of that user

// Else return "Access denied"

// API

// Users: https://jsonplaceholder.typicode.com/users

// Posts: https://jsonplaceholder.typicode.com/posts


const apiHandler=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            reject("API not handled properly")
        }
    }).then(data=>{
        resolve(data)
    }).catch(error=>{
        reject(error)
    })
    
})
apiHandler.then((data)=>{
    console.log(data)
}).catch((resp)=>{
    console.log(resp)
})

const apiHandler1=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            reject("api not handled")
        }
    }).then(data=>{
        resolve(data)
    }).catch(error=>{
        reject(error)
    })
})


const apiHandler2=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            reject("api not handled")
        }
    }).then(data=>{
        resolve(data)
    }).catch(error=>{
        reject(error)
    })
})

const apiHandler3=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            reject("api not handled")
        }
    }).then(data=>{
        resolve(data)
    }).catch(error=>{
        reject(error)
    })
})


Promise.all([apiHandler1,apiHandler2,apiHandler3]).then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})