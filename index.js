const nav=document.querySelector("nav");
window.addEventListener("scroll",function(){
  nav.classList.toggle("sticky",window.scrollY > 100);
})

let menu=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");
 menu.onclick =()=>
 {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll=()=>
{
  menu.classList.remove('bx-x');
  navlist.classList.remove("open");
}































// let index = 0;
// displayImages();
// function displayImages() {
//   let i;
//   const book = document.querySelectorAll("#book");
//   for (i = 0; i < book.length; i++) {
//     book[i].style.display = "none";
//   }
//   index++;
//   if (index > book.length) {
//     index = 1;
//   }
//   book[index-1].style.display = "block";
//   setTimeout(displayImages, 2000); 
// }
