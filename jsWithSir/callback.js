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




function reducerList(val){
    
}