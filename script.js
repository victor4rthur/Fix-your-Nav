// Select the element with the id 'main' and assign it to the variable 'nav'
const nav = document.querySelector('#main');

// Get the offsetTop property of the 'nav' element and assign it to the variable 'topOfNav'
const topOfNav = nav.offsetTop;

// Function to fix the navigation bar based on the scroll position
function fixNav() {
    // Check if the current scroll position (window.scrollY) is greater than or equal to the offsetTop of the 'nav' element
    if (window.scrollY >= topOfNav) {
        // If true, add padding to the body equal to the height of the 'nav' element
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        
        // Add the 'fixed-nav' class to the body element to apply fixed positioning to the navigation bar
        document.body.classList.add('fixed-nav');
    } else {
        // If false, reset the body's padding and remove the 'fixed-nav' class
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

// Add an event listener to the window's scroll event, calling the 'fixNav' function
window.addEventListener('scroll', fixNav);
