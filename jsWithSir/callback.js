function data(a){
    a("helllo sudarshan")
    return a
}

function doSomething(text){
    console.log(text)
}

let res=data(doSomething)("hello")
console.log(res)



function fetch(data,callback){
    console.log("Hello sudarshan")
    callback(data)
   
}

function helo(value){
   console.log(value)
}

fetch("helli",helo)

