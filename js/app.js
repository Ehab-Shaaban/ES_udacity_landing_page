/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navlistBlock=document.querySelector("#navbar__list");
const sectionsList=document.querySelectorAll("section");
const ListItemsFrag = document.createDocumentFragment();

for (let i = 0; i < sectionsList.length ; i++) {

    const listItem=document.createElement("li");   
    const anchor=document.createElement("a");

    const ahref = document.createAttribute("href");
    ahref.value = `#${sectionsList[i].id}`;
    anchor.setAttributeNode(ahref);
    anchor.innerText = sectionsList[i].firstElementChild.firstElementChild.innerHTML;

    
    listItem.appendChild(anchor);

    ListItemsFrag.appendChild(listItem);

    sectionsList[i].addEventListener('mouseenter',function(){
        listItem.style.backgroundColor='rgba(136,203,171,1)';
    })
    sectionsList[i].addEventListener('mouseleave',function(){
        listItem.style.backgroundColor='rgba(0,13,60,1)';
    })
}
navlistBlock.appendChild(ListItemsFrag);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


