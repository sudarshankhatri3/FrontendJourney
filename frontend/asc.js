async function runProcess() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json=await response.json()
        console.log(json)
    }catch(error){
        console.log(error)
    }
}
runProcess()


const data=new Promise((resolve,reject)=>{
    let data=true
    if(data){
        resolve("Hello data passed")
    }else{
        reject("Data not passed")
    }
})

data.then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
}).finally(()=>{
    console.log("However data not passed")
})