// DOM – JavaScript Practice Questions
// (Basic → Intermediate → Advanced)
// 1⃣ Basic Level (1–15)
// Focus: selecting, reading, and manipulating basic DOM elements.
// 1. Select an element by id and change its text content.
const iconElement=document.getElementById('data')
iconElement.innerHTML="<h1>Hello bro</h1><h2>Hellllo bro</h2><p>K gari ra xau</p>"
// 2. Select elements by class and change their text content.
const paragraphData=document.getElementsByClassName("code")
for(let i=0;i<paragraphData.length;i++){
    paragraphData[i].textContent="If you want to hide the left-side Dock (side icons) in Ubuntu, you can do it easily. Here are the 3 best methods depending on your Ubuntu version."
}
// 3. Select elements by tag and change their background color.
const elementByTg=document.getElementsByTagName('h1')
for(let i=0;i<elementByTg.length;i++){
    elementByTg[i].style.backgroundColor="red"
    elementByTg[i].style.borderRadius="10px"

}
// 4. Get the value of an input field.
// 5. Set the value of an input field.
// 6. Get the inner HTML of a div.
const innerData=document.getElementById("getData")
const innerHtmlContent=innerData.innerHTML
console.log(innerHtmlContent)
// 7. Set the inner HTML of a div.
innerData.innerHTML="<h1>Hello sir</h1><p>I am watching video </p><p>My vision is to achieve efficient model of AI</p>"
// 8. Change the style (color, font-size) of an element using style property.
const dataByTag=document.getElementsByTagName("p")
for(let i=0;i<dataByTag.length;i++){
    dataByTag[i].style.color="red"
    dataByTag[i].style.fontSize = "23px"
}
// 9. Hide an element by setting display: none.
const documentDt=document.getElementById("getData")
documentDt.style.display="none"
// 10. Show a hidden element by setting display: block.
documentDt.style.display="block"
// 11. Add a new paragraph element inside a div.
documentDt.innerHTML="<p>Hello iam Learning frontend with myself.Iam dedicated and passionate.</p>"
// 12. Remove a paragraph element from the DOM.
const  removeParagraph=document.getElementsByClassName("para")
removeParagraph.remove()
// 13. Add a class to an element using classList.add().
removeParagraph.classList.add("hello")
// 14. Remove a class from an element using classList.remove().
// 15. Toggle a class on an element using classList.toggle().
// 2⃣ Intermediate Level (16–35)
// Focus: DOM traversal, dynamic manipulation, attributes, and event handling.
// 16. Select the first child of a parent element.
// 17. Select the last child of a parent element.
// 18. Select all children of a parent element.
// 19. Select the parent of a given element.
// 20. Select the next sibling of an element.
// 21. Select the previous sibling of an element.
// 22. Change the src attribute of an image.
// 23. Change the href attribute of a link.
// 24. Get all elements with a specific data attribute.
// 25. Set a custom data attribute for an element.
// 26. Create a new list item <li> and append it to a <ul>.
// 27. Remove a list item from a <ul>.
// 28. Clone an element and append it to the DOM.
// 29. Add an event listener to a button for click that changes text content.
// 30. Add an event listener to an input for change that logs the new value.
// 31. Remove an event listener from an element.
// 32. Add multiple event listeners to elements using a loop.
// 33. Prevent the default action of a form submission using preventDefault().
// 34. Stop event propagation using stopPropagation().
// 35. Dynamically change the style of all paragraphs on button click.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex DOM manipulation, dynamic content, forms, tables, and real-world tasks.
// 36. Implement a dynamic to-do list where items can be added and removed.
// 37. Implement a live search filter for a list of items.
// 38. Create a table dynamically from an array of objects.
// 39. Update a table row dynamically based on user input.
// 40. Delete a table row dynamically.
// 41. Implement a dropdown menu that shows/hides submenus.
// 42. Create an image gallery that updates the main image when thumbnails are clicked.
// 43. Implement a modal popup that opens and closes dynamically.
// 44. Change the text color of list items alternatingly (odd/even).
// 45. Count the number of visible elements on a page dynamically.
// 46. Implement a rating system with clickable stars.
// 47. Implement tabbed content where clicking a tab shows related content.
// 48. Dynamically sort table rows based on column values.
// 49. Implement infinite scrolling: append more items as the user scrolls down.
// 50. Implement drag-and-drop functionality for elements