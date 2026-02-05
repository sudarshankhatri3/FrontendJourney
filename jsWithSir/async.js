// async function checkerData() {
//     try{
//         const response=await fetch("https://dogapi.dog/api/",{
//             method:'POST',
//             headers:{
//                 'conten-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 name:'nititn',
//                 email:'khatrisudarshan360@gmail.com'
//             })
//         })
        
//     }catch(error){
//         console.log(error)
//     }
    
// }
// checkerData()


async function deletePacket(){
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await response.json()
        const dataliger=data.filter((value)=>value.id>98)
        console.log(dataliger)
    } catch (error){
        console.log(error)
    } 
}
deletePacket()