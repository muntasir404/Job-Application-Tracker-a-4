### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1. getElementById() - this catch one element which id is fixed and the id will obiously unique
2. getElementsByClassName() – it catch the same class element and this return something I forget for no

### 2. How do you create and insert a new element into the DOM?

ans: 
to make new element use document.createElement("tagName") and to put text use textContent or innerHTML.  
to add this element in page use appendChild() or prepend() or insertBefore().


### 3. What is Event Bubbling? And how does it work?
Event Bubbling is when an event like click moves up from child element to parent.
It works by JS listening on parents after child got the event.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation mane ekta parent element handle kore child elements er events.
Useful, karon kom code lagbe ar nirdisto dynamic elements er event o kaj korbe.

### 5. What is the difference between preventDefault() and stopPropagation() methods?


