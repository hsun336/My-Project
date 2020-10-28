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
