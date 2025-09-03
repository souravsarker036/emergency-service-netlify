Q1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used to search for one node in the document where the ID attribute value is equal to the given argument’s value and returns on success, and null otherwise. 
getElementsByClassName retrieves a collection of elements based on their class names and it is a live HTMLCollection and it is updated when the DOM changes. 
querySelector looks for just one match of any CSS selector, and querySelectorAll looks for all matches and returns a static (not live) NodeList.


Q2.How do you create and insert a new element into the DOM?

Ans:Create and insert a new element into the DOM in JavaScript, we generally follow some steps:
*Create the element using document. createElement().
*Assign its content / attributes (textContent, id, class).
*Add it to the DOM with some functions such as appendChild(), append(), prepend(), before(), after() etc.

Q3.What is Event Bubbling and how does it work?

Ans:Event bubbling is when an event starts at the target, the element that was clicked or interacted with, and makes its way up the DOM tree to the root/parent(s) of the tree. 
For example, the button click inside a div will trigger in such a way button click event is called first, then the parent div click event so on. 
This behavior allows for things as event delegation, and it can be stopped with event. stopPropagation().

Q4.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event delegation uses bubbling to handle events for multiple child elements through a single parent listener, making code more efficient and flexible.
it is useful for it's efficiency,dynamic elements,cleaner code.

Q5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:In JavaScript, preventDefault() is used to stop the browser’s default action for an event, while stopPropagation() is used to stop the event from bubbling up or capturing 
down through the DOM. preventDefault() controls the behavior of the event and stopPropagation() controls the flow of the event.
