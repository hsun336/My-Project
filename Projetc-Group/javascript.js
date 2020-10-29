

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

//Filter Content Task by Lucy Wu
function filterContent() {


//Task 7 funtion 2 by Steve Sun
function myFunction(info) {
  //var hiddentext= document.getElementById(info);
  //console.log(hiddentext.style.display);

  /*if(hiddentext.style.display=="none"){
    hiddentext.style.display="";
  }
  else{
    hiddentext.style.display="none";
  }
*/
  //hiddentext.style.display="none";
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
  {name: 'avocado', url:'avocado'},
  {name: 'apple', url:'Apple'},
  {name: 'banana', url:'Banana'},
  {name: 'watermelon', url:'Watermelon'},
  {name: 'cucumber', url:'Cucumber'},
  {name: 'cabbage',url:'Cabbage'},
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
      document.getElementById('result').innerHTML = product.url
    }
  }
  if (value_in_list == false) {
    document.getElementById('result').innerHTML = "Product not found."
  }
}
