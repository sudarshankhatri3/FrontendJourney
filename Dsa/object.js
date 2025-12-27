// OBJECTS – JavaScript Practice Questions
// (Basic → Intermediate → Advanced)
// 1⃣ Basic Level (1–15)
// Focus: object creation, property access, modification, and basic iteration.
// 1. Create an object representing a person with name and age.
let person={name:"sudarshan",age:20}
console.log(person)
// 2. Access and print the name property using dot notation.
console.log(person.name)
// 3. Access and print the age property using bracket notation.
console.log(person.age)
// 4. Add a new property city to the object.
person.city="kathmandu"
console.log(person)
// 5. Modify the age property.
person.age=34
console.log(person)
// 6. Delete the city property from the object.
delete person.age
console.log(person)
// 7. Check if a property name exists using in operator.
console.log("name" in person)
console.log("age" in person)
console.log("city" in person)
// 8. Loop through all properties of an object using for…in.
for(let data in person){
    console.log(data)
}
// 9. Get all keys of an object using Object.keys().
console.log(Object.keys(person))
// 10. Get all values of an object using Object.values().
console.log(Object.values(person))
// 11. Get all entries (key-value pairs) using Object.entries().
console.log(Object.entries(person))
// 12. Merge two objects using Object.assign().
const obj1 = { name: "Sudarshan", age: 21 };
const obj2 = { age: 22, city: "Kathmandu" };
let mergeObj=Object.assign({},obj1,obj2)
console.log(mergeObj)
// 13. Use hasOwnProperty() to check if an object has a specific property.
// 14. Create a nested object and access a nested property.
// 15. Create an object using the new Object() constructor.
// 2⃣ Intermediate Level (16–35)
// Focus: object manipulation, dynamic keys, computed properties, and object methods.
// 16. Create a function that accepts an object and prints its keys and values dynamically.
// 17. Merge multiple objects into a single object.
// 18. Dynamically add properties to an object using variables as keys.
// 19. Create a function to count the number of properties in an object.
// 20. Convert an object to an array of keys and values and back.
// 21. Write a function that inverts keys and values of an object.
// 22. Implement a function to check if two objects are shallowly equal.
// 23. Create an object with a method that returns the object’s full name from firstName and
// lastName.
// 24. Use computed property names to create dynamic keys.
// 25. Create a function that removes a property from an object dynamically.
// 26. Write a function to merge two objects and sum the values of numeric keys if they
// overlap.
// 27. Loop through an object and print only numeric properties.
// 28. Write a function that returns the property with the maximum numeric value.
// 29. Create a function that copies an object deeply (nested objects included).
// 30. Implement a function that freezes an object and prevents modification.
// 31. Write a function to create a read-only property in an object.
// 32. Implement a function that finds all keys in an object whose values match a specific
// value.
// 33. Write a function to filter object properties by value type (e.g., keep only strings).
// 34. Create a function that safely accesses nested object properties using optional chaining.
// 35. Create an object with getter and setter methods for a property.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: advanced manipulation, nested objects, dynamic behavior, interview-level problems.
// 36. Write a function to deeply merge two objects, combining nested objects instead of
// overwriting.
// 37. Implement a function to flatten a nested object into a single-level object with
// dot-separated keys.
// 38. Write a function that counts all properties (nested included) in an object.
// 39. Implement a function that converts an object into a query string.
// 40. Create a function that removes all properties with falsy values from an object.
// 41. Write a function that finds all paths in a nested object that lead to a specific value.
// 42. Implement a function to clone an object but replace all string values with their uppercase
// equivalents.
// 43. Write a function that swaps keys and values recursively for nested objects.
// 44. Create a function that filters an array of objects by a property value.
// 45. Implement a function that calculates the sum of all numeric properties in an object,
// including nested ones.
// 46. Write a function that merges an array of objects by a key, grouping values into arrays.
// 47. Implement a function to detect circular references in a nested object.
// 48. Create a function to deep freeze an object (including nested objects).
// 49. Write a function that updates a nested property dynamically using a path string (e.g.,
// "address.city").
// 50. Implement a function that converts a nested object into a tree structure suitable for
// rendering a menu.