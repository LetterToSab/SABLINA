const menu = document.querySelector('.primary-navigation');
const menuBtn = document.querySelector('.mobile-nav-toggle');

menuBtn.addEventListener('click', () => {
 const visibility = menu.getAttribute("data-visible");

 if(visibility === "false") {
  menu.setAttribute("data-visible" , true);
  menuBtn.setAttribute("aria-expanded", true)
 }else if (visibility === "true"){
  menu.setAttribute("data-visible" , false);
  menuBtn.setAttribute("aria-expanded", false)
 }
})
