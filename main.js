window.onscroll = slideDown;

function slideDown() {

  // Déclaration des variables
  var scrollTop = document.documentElement.scrollTop ;
  var navbar = document.getElementById("navbar") ;
  console.log(scrollTop);

  //Conditiob
  if (scrollTop > 240) {
    navbar.style.top = "0px";
  }else{
    navbar.style.top = "-56px";
  }
}
