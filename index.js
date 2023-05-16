let index = 0;
displayImages();
function displayImages() {
  let i;
  const book = document.querySelectorAll("#book");
  for (i = 0; i < book.length; i++) {
    book[i].style.display = "none";
  }
  index++;
  if (index > book.length) {
    index = 1;
  }
  book[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}