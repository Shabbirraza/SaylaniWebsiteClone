var navbar = document.getElementById("navbar")
var navbarList = document.getElementById("listNavbar")
var listdiv = document.getElementById("listDiv")
var listItem = document.getElementsByClassName("link")
console.log(navbar)

function navClick() {

  
    console.log(navbar)
    navbar.classList.toggle("navbarHam")
   
    navbarList.classList.toggle("ulOnHamClick")


 
    listdiv.classList.toggle("toggleWidth")
    
    console.log(listItem)
    for (let item of listItem) {
        console.log(item)
        item.classList.toggle("liOnHamClick")
    }
}

window.addEventListener('resize', e => {
    if (window.matchMedia(`(min-width: 1200px)`).matches) {
      navbar.classList.remove('navbarHam');
      navbarList.classList.remove("ulOnHamClick");
      listdiv.classList.remove("toggleWidth");
      for (let item of listItem) {
        item.classList.remove("liOnHamClick")
      }
    }
 });