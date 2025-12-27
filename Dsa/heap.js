// STACK & HEAP IN MEMORY – JavaScript
// Practice Questions (Basic → Intermediate
// → Advanced)
// 1⃣ Basic Level (1–15)
// Focus: primitive vs reference types, memory basics, stack vs heap understanding.
// 1. Create a number variable and a string variable. Explain where they are stored (stack or
// heap).
// 2. Create an object and explain its storage in memory.
// 3. Assign one primitive variable to another and modify the first. Observe the second.
// 4. Assign one object to another and modify the first. Observe the second.
// 5. Demonstrate how passing a primitive to a function does not change the original value.
// 6. Demonstrate how passing an object to a function can modify the original object.
// 7. Compare two different objects with the same content using == and ===.
// 8. Explain the effect of changing a property in a nested object on other references.
// 9. Create a primitive variable and log its memory address (conceptually, explain stack
// storage).
// 10. Create an object and log its memory address (conceptually, explain heap storage).
// 11. Create an array and assign it to another variable. Modify one and check the other.
// 12. Explain the difference in memory allocation between strings and objects.
// 13. Demonstrate stack behavior using function calls (nested function calls).
// 14. Demonstrate that primitive variables are copied by value when assigned.
// 15. Demonstrate that objects are copied by reference when assigned.
// 2⃣ Intermediate Level (16–35)
// Focus: closures, memory leaks, reference handling, and stack/heap behavior.
// 16. Write a function that returns a closure storing a counter value. Explain where the counter
// is stored.
// 17. Create two objects and swap their references without copying values.
// 18. Create a function that modifies a nested object property and explain memory effects.
// 19. Create a deep copy of an object and modify the copy. Show the original remains
// unchanged.
// 20. Create a shallow copy of an object and modify the copy. Show how the original changes.
// 21. Implement a function that uses recursion to sum numbers in a nested object or array.
// 22. Explain what happens to variables when a function scope ends.
// 23. Demonstrate memory behavior when large arrays are copied by reference vs by value.
// 24. Implement a function that creates a circular reference in an object.
// 25. Explain the memory implications of circular references in JavaScript.
// 26. Create a function that generates a closure in a loop and observe captured variables.
// 27. Explain the difference in memory between string concatenation using + vs template
// literals.
// 28. Demonstrate how garbage collection removes unreferenced objects.
// 29. Implement a memoization function and explain memory usage.
// 30. Explain what happens in memory when let and const variables go out of scope.
// 31. Show how passing an object to multiple functions affects memory.
// 32. Implement a function that stores data in a global object and explain heap impact.
// 33. Explain memory difference between primitive arrays and array of objects.
// 34. Show how modifying a property of an object in a nested array affects other references.
// 35. Demonstrate stack overflow by writing a deeply recursive function.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex memory management, recursion, closures, heap optimization, and
// interview-level problems.
// 36. Implement a recursive function to reverse a linked list stored as nested objects.
// 37. Write a function that creates multiple closures holding references to large arrays and
// discuss memory optimization.
// 38. Implement a function that avoids memory leaks by properly nullifying references.
// 39. Demonstrate how a circular linked list is stored in heap memory.
// 40. Create a function that dynamically generates objects and cleans up unused ones to
// avoid memory leaks.
// 41. Explain the difference in memory between using spread operator vs direct assignment
// for objects.
// 42. Write a function to merge multiple large objects without duplicating memory
// unnecessarily.
// 43. Demonstrate stack and heap usage in recursive factorial computation.
// 44. Implement a function to deep clone an object with nested arrays efficiently.
// 45. Create a function that simulates a stack using arrays and explain memory use.
// 46. Create a function that simulates a heap using objects with dynamic allocation.
// 47. Implement a function that tracks memory usage of created objects (simulate).
// 48. Write a function to safely handle very large arrays without crashing the stack.
// 49. Demonstrate closures retaining references after the outer function scope ends.
// 50. Implement a function to clean up a large object graph to allow garbage collection