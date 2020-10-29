//Task 7 funtion 2 Collapsible Content by Steve
function myView() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "view more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "view less";
    moreText.style.display = "inline";
  }
}
//from here is function 1 SearchBar. By Steve
//Web designer can change the contents in this list. this is our product
const Products = [
  {name: 'avocado', url:'<a href="fruit.html" target="_blank" >click to view our fruits</a>', image:'avocado.jpg'},
  {name: 'apple', url:'<a href="fruit.html" target="_blank" >click to view our fruits</a>', image:'apples.jpg'},
  {name: 'banana', url:'<a href="fruit.html" target="_blank" >click to view our fruits</a>', image:'banana.jpg'},
  {name: 'watermelon', url:'<a href="fruit.html" target="_blank" >click to view our fruits</a>', image:'watermelon.jpg'},
  {name: 'cucumber', url:'<a href="vege.html" target="_blank" >click to view our vegetables</a>', image:'cucumber.jpg'},
  {name: 'cabbage',url:'<a href="vege.html" target="_blank" >click to view our vegetables</a>', image:'cabbage.jpg'},
  {name: 'carrot',url:'<a href="vege.html" target="_blank" >click to view our vegetables</a>', image:'carrot.jpg'}
];
const searchInput = document.getElementById('search');//this search value entered by user
console.log(searchInput);

function searchBar() {
  var input = searchInput.value;
  console.log(input);
  var content = input.toLowerCase();
  console.log(content);
  // this variable tells if the search item in our list or not.
  let value_in_list = false;
  for (let product of Products) {
    //if content received from user in our product list, then return the link in a new paragraph
    if (product.name == content) {
      value_in_list = true;
      //change the value to display whatever we want to show our customers
      document.getElementById('result').innerHTML = product.url+"<br><br>"+"<img src=\'"+product.image+ "\'width=350px height=250px>";

    }
  }
  if (value_in_list == false) {
    document.getElementById('result').innerHTML = "Product not found."
  }
}
//Slide Show Task by Lucy Wu
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
