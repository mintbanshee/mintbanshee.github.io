
let menuOpen = false;
function toggleMenu() { 
  if(!menuOpen) { // open menu
    $('nav').animate({
      right: 0
    }, 420, 'swing');
  }
  else { // close menu
    $('nav').animate({
      right: -350
    }, 420, 'swing');
  }
  // toggles the state
  menuOpen = !menuOpen; 
} // toggleMenu()

