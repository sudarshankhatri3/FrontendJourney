
// 18. Write a program to check the type of triangle (equilateral, isosceles, scalene).
// 19. Write a program to check if a number is divisible by 2, 3, and 5.
function checker(num){
    if(num%2===0){
        return `number ${num} is divisible by 2`
    }else if (num%3===0){
        return `number ${num} is divisible by 3`
    }else if(num%5===0){
        return `number ${num} is divisible by 5`
    }else if(num%2===0 && num%3===0){
        return `number ${num} is divisible by 2 and 3`
    }else if(num%3===0 && num%5===0){
        return `number ${num} is divisible by 3 and 5`
    }else{
        return `number is none`
    }

}
let nm=1234
Result=checker(nm)
console.log(Result)
// 20. Write a program to find the smallest among three numbers.
function smallestNumber(a,b,c){
    if(a<b && a<c){
        return `${a} is smallest`
    }else if(b<a && b<c){
        return `${b} is smallest`
    }else{
        return `${c} is smallest`
    }
}
console.log(smallestNumber(3,4,6))
console.log(smallestNumber(232,3445,11))
// 21. Write a program to print the day of the week using switch.
let exp="sunday"
switch(exp){
    case "sunday":
        console.log('Day is sunday')
        break
    case "monday":
        console.log("Day is monday")
        break
    case "tuesday":
        console.log("day is tuesday")
        break
    case "wednesday":
        console.log("Day is wednesday")
        break
    case "thrusday":
        console.log("Day is thrusday")
        break
    case "friday":
        console.log("Day is friday")
        break
    case "saturday":
        console.log("Day is saturday")
        break
    default:
        console.log("Invalid case")
}
// 22. Write a program to print the month name based on the month number using switch.
let month="july"
switch(month){
    case "january":
        console.log("January")
        break
    case "feburary":
        console.log("Feburary")
        break
    case "march":
        console.log("March")
        break
    case "april":
        console.log("April")
        break
    case "may":
        console.log("May")
        break
    case "june":
        console.log("June")
        break
    case "july":
        console.log("July")
        break
    case "august":
        console.log("August")
        break
    case "september":
        console.log("September")
        break
    case "octber":
        console.log("Octber")
        break
    case "november":
        console.log("November")
        break
    case "december":
        console.log("December")
        break
    default:
        console.log("Invalid case")
}
// 23. Write a program to determine if a year is a leap year using nested if.
function leapYear(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                console.log("Leap year !!!!")
            }else{
                console.log("Not leap year")
            }
        }else{
            console.log("leap year !!!")
        }
    }else{
        console.log("Not leap year")
    }
}
console.log(leapYear(2000))
console.log(leapYear(1999))
console.log(leapYear(2342))
console.log(leapYear(5670))

// 24. Write a program to determine eligibility for multiple conditions: age, citizenship, and registration.

// 25. Write a program to check if a character is a vowel using switch.
// 26. Write a program to implement a simple calculator using switch (+, -, *, /).
let operation="*"
switch(operation){
    case "+":
        function sum(a,b){
            return a+b
        }
        console.log(`Sum:${sum(4,5)}`)
        break
    case "-":
        function subtract(a,b){
            return a-b
        }
        console.log(`Subtract:${subtract(5,4)}`)
        break
    case "*":
        function multiple(a,b){
            return a*b
        }
        console.log(`Multiple:${multiple(4,5)}`)
        break
    case "/":
        function division(a,b){
            return a/b
        }
        console.log(`Division:${division(8,4)}`)
        break
    default:
        console.log("Invalid case")
    
}
// 27. Write a program to classify angles (acute, right, obtuse, straight) using if/else.
// 35. Write a program to classify a triangle based on angles using if/else.
function anglesChecker(angle){
    if(angle>0 && angle<90){
        return `angle is acute`
    }else if(angle===90){
        return `Right angle`
    }else if(angle>90 && angle<180){
        return 'Obtuse angle'
    }else if(angle ===180){
        return ` straight angle`
    }else{
        return `Invalid angle`
    }
}
let ang=Math.floor(Math.random()*360)
console.log(anglesChecker(ang))
// 28. Write a program to check if a number is a multiple of 3 or 7 but not both.
function multipleData(number){
    if(number%3===0 || number%7===0){
        return `number is multiple of 3 or 7`
    }else{
        return 'Number is not multiple of 3 or 7'
    }
}
console.log(multipleData(234))
console.log(multipleData(123))
console.log(multipleData(11))
// 29. Write a program to categorize a person based on age groups (child, teen, adult, senior).
function ageChecker(age){
    if(age>0 && age<8){
        return `Your are child`
    }else if(age>8 && age<20){
        return `You are teenage`
    }else if(age>20 && age<40){
        return `You are adult`
    }else if(age>40 && age<60){
        return 'You are post mature'
    }else{
        return 'You are mature'
    }
}
console.log(ageChecker(23))
console.log(ageChecker(60))
console.log(ageChecker(33))
console.log(ageChecker(2))
// 30. Write a program to check if a number is divisible by any of 2, 3, or 5.
function nbrChecker(nm){
    if(nm%2===0 || nm%3===0 ||nm%5===0){
        return `Number is divisible by 2,3 or 5`
    }else{
        return `Number is not divisible by 2,3 or 5`
    }
}
console.log(nbrChecker(34))
// 31. Write a program to assign a letter grade (A, B, C, D, F) using switch.
let grade="b"
switch(grade){
    case 'a':
        console.log("you got A grade")
        break
    case 'b':
        console.log("you got b grade")
        break
    case 'c':
        console.log('you got c grade')
        break
    case 'd':
        console.log("You got D grade")
        break
    case 'e':
        console.log("you got E grade")
        break
    default:
        console.log("Invalid result")
}
// 32. Write a program to print the number of days in a month using switch.
let mnth="march"
switch(mnth){
    case "january":
        console.log(`In january there is 28 days`)
        break
    case "feburary":
        console.log("Feburary has 29 days")
        break
    case "march":
        console.log("March has 30 days")
        break
    case "april":
        console.log("April has 27 days")
        break
    case "may":
        console.log("May has 29 days")
        break
    case "june":
        console.log("June has 26 days")
        break
    case "july":
        console.log("July has 28 days")
        break
    case "august":
        console.log("August has 29 days")
        break
    case "september":
        console.log("September 30 days")
        break
    case "octber":
        console.log("Octber 28 days")
        break
    case "november":
        console.log("November has 29 days")
        break
    case "december":
        console.log("December has 30 days")
        break
    default:
        console.log("Invalid case")
}

// 33. Write a program to find the maximum of four numbers using nested if/else.
// 34. Write a program to check if a number is divisible by 4 and 6 but not by 9.
function numberDivisible(num){
    if(num%4===0 &&num%6===0 && num%9!==0){
        return `${num} is divisible by 4 and 6 but not by 9`
    }else{
        return `${num} is not divisible by 4 and 6 not by 9`
    }
}
console.log(numberDivisible(56))
console.log(numberDivisible(23))
console.log(numberDivisible(67))

// 3 Advanced / Higher Level (36–50)
// Focus: complex conditions, nested control flow, decision-making, and interview-level
// challenges.
// 36. Write a program to implement a simple menu system using switch with multiple options.
// 37. Write a program to determine the number of digits in a number using if/else.
// 38. Write a program to find the second largest number among four numbers using nested
// if.
// 39. Write a program to check if three numbers can form a Pythagorean triplet.
// 40. Write a program to calculate the total cost with different discounts based on price
// ranges.
// 41. Write a program to classify triangles based on both sides and angles.
// 42. Write a program to determine the quadrant of a point (x, y) in a 2D plane.
// 43. Write a program to check if a year is a leap year and century leap year correctly.
// 44. Write a program to implement a basic role-based access control using switch.
// 45. Write a program to determine eligibility for a loan based on multiple conditions.
// 46. Write a program to find the largest even number among four numbers.
// 47. Write a program to determine if a number is prime using nested if.
// 48. Write a program to calculate tax based on different slabs using if/else.
// 49. Write a program to implement a basic grading system with plus/minus grades using
// switch.
// 50. Write a program to simulate a vending machine selection using switch and nested
// if/else.
