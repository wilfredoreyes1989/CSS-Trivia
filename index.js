/* 
Question 1

What is a box model?

Answer 

 - Box that wraps around every single HTML element.

 - includes margin, border, padding and content.

 div {
    width: 100px;
    height: 100px;
    background-color: red;
    border: 20px solid black;
    padding: 20px;
    margin: 20px
 }

*/

/* 
Question 2 

What is a specificity?

Answer 

 - Specificity is a weight given to a style to determine if it should be applied or not.

 div {
    background-color: black;
 }

 div {
    background-color: red;
 }

 the output will be red due to the specificity being highger on the second div. 

 a class will override because its higher specificity.


*/

/* 
Question 3

How to center a div?

Answer 

 -
 .outer {
    width: 300px;
    height: 300px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
 }

 .inner {
    width: 100px;
    height: 100px;
    background-color: red;
 }

 AND 


  .outer {
    width: 300px;
    height: 300px;
    background-color: black;
    position: relative;
 }

 .inner {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 }

 ALSO 

  .outer {
    width: 300px;
    height: 300px;
    background-color: black;
    display: flex;
 }

 .inner {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: auto;
 }

*/


/*
Question 4

Difference between 'div' and 'section'?

Answer

 - Divs are just used to group elements together, doesn't have a specific meaning.

 - Sections are usedto group  elements that are related to each other.

 - Sections are typically structured with headings then patagraph text etc.
*/


/*
Question 5

Difference between block, inline and inline-block

Answer 

 - Block - Starts on a new line and takes up the whole width e.g. <p> elements

 - Inline - Starts on the same line and can't set the width and height, e.g <span> elments

 - Inline-Block - Starts on the same line, you're allowed to set the width and height
*/


/*
Question 6

Difference between position relative, absolute, fixed, sticky and static

Answer

 - 
*/


/*
Question 7

Difference visibility: hidden; and display:none;

Answer - 

 - Visibility: hidden; Keeps the element in the DOM but makes it invisible on the screen.

 - Display: none; removes the element completely from the dom
*/

/*
Question 8

How do you build a triangle in CSS?

Answer - 

 - *{
   box-sizing: border-box;
 }

 div {
   width: 0;
   height: 0;
   border: 100px solid transparent;
   border-bottem: 100px solid black;
 }

*/


/*
Question 9

What are pseudo elements in CSS

Answer-

 - Used to give your element a special effects. The effects can be before and after.
*/


/*
Question 10

What are Data Attributes

Answer - 

 - Used to store data in HTML

*/