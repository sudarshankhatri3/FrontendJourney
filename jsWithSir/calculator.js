function calculator(num1,num2,operation){
    switch(operation){
        case "+":
            let res1=num1+num2
            console.log(`Sum of ${num1} and ${num2} =${res1}`)
            break
        case "-":
            let res2=num1-num2
            console.log(`Subtraction of ${num1} and ${num2} =${res2}`)
            break
        case "*":
            let res3=num1*num2
            console.log(`Multiplication of ${num1} and ${num2} =${res3}`)
            break
        case "/":
            let res4=num1/num2
            console.log(`Division of ${num1} and ${num2} =${res4}`)
            break
            
        default:
            console.log("Invalid case !!!!!")
        
    }
}

function interestCalculator(p,t,r,n,opt){
    switch(opt){
        case "quartely":
            let val=p*Math.pow((1+r/n),n*t)
            console.log(`Interest quarterly:${val}`)
            break
        case "simple":
            let val1=(p*t*r)/100
            console.log(`Simple interset:${val1}`)
            break
        default:
            console.log("Invalid case")
    }
}


calculator(2,3,"+")
calculator(5,7,"*")
interestCalculator(8000,2,2,1,"simple")
interestCalculator(9000,2,2,1,"quartely")