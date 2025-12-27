var plusOne = function(digits) {
    let temp=digits
    let ln=digits.length
    value=digits[ln-1]
    if(value>=9){
        let res=[]
        res.push(value+1)
        let cvt=String(res)
        let rs=cvt.split("")
        let cmp=[]
        for(let i=0;i<rs.length;i++){
            let dt=Number(rs[i])
            cmp.push(dt)
        }
        temp.pop()
        temp=temp.concat(cmp)
       
    }else{
        value=value+1
        temp.pop()
        temp.push(value)
    }
    return temp
};

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([12,34,45,22,56]))



// let dt=[10]
// let res=String(dt)
// let rs=res.split("")
// let r=[]
// for(let i=0;i<rs.length;i++){
//     let d1=Number(rs[i])
//     r.push(d1) 
// }

// console.log(r)
// console.log(res)
// console.log(rs)

