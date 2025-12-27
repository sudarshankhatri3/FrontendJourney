// EVENTS – JavaScript Practice Questions
// (Basic → Intermediate → Advanced)
// 1 Basic Level (1–15)
// Focus: attaching, handling, and understanding basic events.
// 1. Add a click event listener to a button that shows an alert.
let clickEvent=document.getElementsByClassName("hero_content")
for(let i=0;i<clickEvent.length;i++){
    clickEvent[i].onclick=(e)=>{
        console.log(e.PrototType)
    }
}
// 2. Add a mouseover event to change the background color of a div.
let changeBg=document.getElementsByClassName("hero")
for(let i=0;i<changeBg.length;i++){
    changeBg[i].onmouseover=()=>{
        changeBg[i].style.backgroundColor = "red";
        console.log("hello bg iam changed")
    }
}
// 3. Add a mouseout event to reset the background color.
for(let i=0;i<changeBg.length;i++){
    changeBg[i].onmouseout=()=>{
        changeBg[i].style.backgroundColor = "none";
    }
}
// 4. Add a dblclick event to a paragraph that changes its text.
let dtContent=document.("p")
dtContent.ondblclick=()=>{
    console.log("hello double click")
    
}
// 5. Add a focus event to an input that highlights the border.
let changeBorder=document.querySelectorAll('tabel__menu  td[contenteditable="true"]')
changeBorder.forEach((cell)=> {
    cell.addEventListener("focus",(e)=>{
        this.style.border="3px solid red"
        this.style.backgroundColor="cyan"
        this.style.outline="none"
    })

    cell.addEventListener()
})
// 6. Add a blur event to an input that resets the border.
// 7. Add a keydown event to log the pressed key.
// 8. Add a keyup event to display the typed character in a div.
// 9. Add a keypress event to count the number of keys pressed.
// 10. Add a submit event to a form and prevent the default submission.
// 11. Add a change event to a dropdown and log the selected value.
// 12. Add a resize event to the window that logs the new dimensions.
// 13. Add a scroll event to detect scrolling on a div.
// 14. Add a contextmenu event to prevent right-click on an element.
// 15. Add a load event to execute a function after the page is fully loaded.
// 2⃣ Intermediate Level (16–35)
// Focus: event delegation, dynamic elements, event objects, and conditional handling.
// 16. Add a click event to multiple buttons using a loop.
// 17. Use event delegation to handle clicks on list items in a <ul>.
// 18. Add a mouseover event to highlight table rows.

// 19. Use the event object to get the target element of an event.
// 20. Use the event object to get the mouse coordinates on mousemove.
// 21. Add a keydown event to detect when the Enter key is pressed.

// 22. Add a keydown event to detect combination keys (e.g., Ctrl + S).
// 23. Prevent multiple form submissions using a submit event.
// 24. Add a click event that toggles the visibility of a section.
// 25. Use stopPropagation() to prevent an event from bubbling up.
// 26. Use stopImmediatePropagation() to prevent multiple listeners on the same
// element.
// 27. Add a mouseenter event to change styles without triggering child events.
// 28. Add a mouseleave event to revert styles.
// 29. Add a wheel event to detect scroll direction.
// 30. Add a dragstart event to log the dragged element.
// 31. Add a dragover event to allow dropping.
// 32. Add a drop event to append a dragged element to a target container.
// 33. Dynamically add buttons and attach a click event to each new button.
// 34. Use once: true option to execute an event listener only once.
// 35. Add a touchstart event for mobile devices and log the touch coordinates.
// 3⃣ Advanced / Higher Level (36–50)
// Focus: complex event handling, custom events, debouncing, throttling, and interview-level
// challenges.
// 36. Implement a debounce function for an input event (search bar).
// 37. Implement a throttle function for scroll events.
// 38. Create and dispatch a custom event when a condition is met.
// 39. Listen for a custom event on a parent element.
// 40. Create a key sequence detector (e.g., Konami code) using keydown.
// 41. Implement drag-and-drop sorting of list items.
// 42. Implement resizing of a div using mousedown, mousemove, and mouseup events.
// 43. Implement a tooltip that shows on mouseover and hides on mouseout.
// 44. Implement a modal popup with open/close events and overlay click handling.
// 45. Track mouse movement over a canvas and draw lines dynamically.
// 46. Implement a double-click toggle functionality on an element.
// 47. Implement event delegation for dynamically added table rows.
// 48. Use events to dynamically update a live character count in a text area.
// 49. Implement a swipe detection on a touch device using touchstart and touchend.
// 50. Implement a drag-and-drop image upload area with preview using events