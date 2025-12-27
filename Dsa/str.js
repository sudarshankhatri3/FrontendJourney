// STRINGS – JavaScript Practice Questions
// (Basic → Intermediate → Advanced)
// 1⃣ Basic Level (1–15)
// Focus: string creation, access, length, and basic operations.
// 1. Declare a string variable and print its length.
let data="hello iam sudarshan khatri"
console.log(`Actual data::${data} and its length is:${data.length}`)
// 2. Access the first and last characters of a string.
console.log(`Char at first:${data.at(0)} and char at last:${data.at(data.length-1)}`)
// 3. Concatenate two strings using + operator.
let data_1="Hello my name is sudiksha"
console.log(`After concat using +:${data+data_1}`)
// 4. Concatenate two strings using template literals.
console.log(`Data concat using concat:${data.concat(data_1)}`)
// 5. Convert a string to uppercase.
console.log(`UpperCase:${data_1.toUpperCase()}`)
// 6. Convert a string to lowercase.
console.log(`lowerCase:${data_1.toLowerCase()}`)
// 7. Trim whitespace from the start and end of a string.
console.log(`Trim:${data_1.trim()}`)
// 8. Extract a substring using slice().
console.log(`using slice:${data_1.slice(2,7)}`)
// 9. Extract a substring using substring().
console.log(`substring:${data_1.substring(2,5)}`)
// 10. Replace a word in a string using replace().
console.log(`Repalce:${data_1.replace("Hello","hiiii")}`)
// 11. Replace all occurrences of a word using replaceAll().
console.log(`repalceAll:${data_1.replaceAll("Hello","hiiii")}`)
// 12. Check if a string includes a substring using includes().
console.log(`includes:${data_1.includes("hello")}`)
// 13. Check if a string starts with a specific substring using startsWith().
console.log(`startWith:${data_1.startsWith("h")}`)
// 14. Check if a string ends with a specific substring using endsWith().
console.log(`endWith:${data_1.endsWith("o")}`)
// 15. Split a string into an array of words using split().
console.log(`Split:${data_1.split()}`)
// 2⃣ Intermediate Level (16–35)
// Focus: string manipulation, search, formatting, and dynamic operations.
// 16. Reverse a string without using built-in reverse methods.
function reverseString(arr){
    let res=[]
    for(let i=arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    return res
}
let dt=['a','b','c','d','e']
console.log(reverseString(dt))
// 17. Count the number of vowels in a string.
function countVowel(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="a" || arr[i]==="e" || arr[i]==="i" || arr[i]==="o" || arr[i]==="u" || arr[i]==="A" || arr[i]==="E" || arr[i]==="I" || arr[i]==="O" || arr[i]==="U"){
            count++
        }
    }
    return count
}
let vowels="hello iam sudarshan khatri"
console.log(countVowel(vowels))
// 18. Count the number of words in a string.
function countWord(data){
    let count=0
    for(let i=0;i<data.length;i++){
        if(data[i]===" "){
            count++
        }
    }
    return count
}
let word="Hello sudarshn khatri iam here "
console.log(countWord(word))

// 19. Find the first occurrence of a character using indexOf().
console.log(word.indexOf("H"))
// 20. Find the last occurrence of a character using lastIndexOf().
// 21. Capitalize the first letter of each word in a string.
// 22. Remove all vowels from a string.
function removeVowels(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=="a" && arr[i]!=="e" && arr[i]!=="i" && arr[i]!=="o" && arr[i]!=="u" && arr[i]!=="A" && arr[i]!=="E" && arr[i]!=="I" && arr[i]!=="O" && arr[i]!=="U"){
            res.push(arr[i])
        }
    }
    return res.join("")
}
let rmv="hello sudarshan khatri.I am sudarshan khatri from sdssd"
console.log(removeVowels(rmv))
// 23. Check if a string is a palindrome.
function pallindrome(arr){
    let res=arr.split(" ").reverse(" ").join("")
    return res
}
let pallin="i love u"
console.log(pallin)
// 24. Convert a hyphen-separated string into camelCase.
// 25. Convert a snake_case string into camelCase.
// 26. Find all occurrences of a substring in a string.
// 27. Replace all spaces in a string with hyphens.
// 28. Count how many times a specific word occurs in a string.
// 29. Extract all numbers from a string and return them as an array of numbers.
// 30. Remove extra spaces between words (normalize spacing).
// 31. Mask part of a string with asterisks (e.g., mask email or phone).
// 32. Convert a string into an array of characters and perform some operation (e.g., double
// vowels).
// 33. Repeat a string n times using repeat().
// 34. Create a function that compresses repeated characters (e.g., "aaabbc" → "a3b2c1").
// 35. Remove all non-alphanumeric characters from a string.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex string manipulations, regex, and interview-level challenges.
// 36. Write a function to check if two strings are anagrams.
// 37. Find the longest substring without repeating characters.
// 38. Implement your own trim() function without using built-in methods.
// 39. Convert a string representing a number with commas into an actual number
// ("1,234,567" → 1234567).
// 40. Implement a function that finds the most frequent character in a string.
// 41. Replace all numbers in a string with their word equivalents ("I have 2 apples" →
// "I have two apples").
// 42. Extract all email addresses from a string using regex.
// 43. Implement a function to reverse the order of words in a sentence.
// 44. Implement a function to capitalize alternate words in a string.
// 45. Detect and return all palindromic words in a string.
// 46. Convert a string to title case (capitalize first letter of each word).
// 47. Write a function to remove all duplicate characters from a string.
// 48. Implement a function to check if a string contains only unique characters.
// 49. Convert a string of digits into its corresponding English words ("123" → "one two
// three").
// 50. Implement a function to find all substrings of length k that are palindromes.
