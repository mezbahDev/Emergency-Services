# Emergency-Servicec

1. difference between getElementById and getElementsByClassName

\*getElementById : 1) it returns single dom element with id 2) exm: document.getElementById("myDiv"); 3) only one element can have a given id;

\*getElementsByClassName: 1)it returns htmlcollection 2) document.getelementbyclassname('box') 3) it updates automatically if the dom changes

\*querySelector: 1) it returns the "first element" 2) exm: document.querySelector ('.box');

\*querySelectorAll: 1) it returns a static nodelist of all elements mathing the css selctor 2) exm: document.querySelectorAll('.box')

2.Create and Insert element into DOM

--- create elements

newDiv.textContent = "Hello World";
newDiv.className = "my-class"

--- insert element

document.body.appendChild(newDiv);

3.Event Bubbling:

-Event Bubbling is the process where an event starts from the deepest target element and bubbles up.

woking process:

1. Event occurs on the target element;
2. Event propagates upward through the DOM tree
3. Any ancestor with an event for the same event will also execute

4)Event Delegation in JS:
it is a technique where event listener is added to a parent element to handle events for its child elements. it works by using event bubbling to catch events on the parent and determine which child triggered the event. it reduces memory usage. it works for dynamically added elements.

5. Differences between preventDefault() and stopPropagation():
   preventDefault() -- it stops the default action of an element. it preventing a link from navigating
   stopPropagation() -- it stops the event from bubbling up to parent elements. it preventing a parent click handler from firing
