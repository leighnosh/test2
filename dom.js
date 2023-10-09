document.addEventListener('DOMContentLoaded', function() {
  var headerTitle = document.getElementById('header-title');
  var header = document.getElementById('main-header');
  header.style.borderBottom = 'solid 8px #000'

  var addItemHeading = document.querySelector('.title');
  addItemHeading.style.fontWeight = 'bold';
  addItemHeading.style.color = 'green';
  addItemHeading.style.textTransform = 'uppercase';
  headerTitle.style.textTransform = 'uppercase';
  headerTitle.style.color = 'black';

  var submitButton = document.querySelector('.btn-dark');
  submitButton.style.backgroundColor = 'green';

  var items = document.getElementsByClassName('list-group-item');
  items[2].style.backgroundColor = 'green';
  for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
  }
  //Cannot access item by via getElementByClassName as it is not a part of the class
  //Changes made to item 5 using tagName
  var li = document.getElementsByTagName('li');
  li[4].style.backgroundColor = 'pink'


});
