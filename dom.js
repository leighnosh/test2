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

  var headerTitle = document.querySelector('#main-header')
  header.style.border ='solid 10px pink';

  var input = document.querySelector('input');
  input.value = 'Hello World'

  var submit = document.querySelector('input[type="submit"]');
  submit.value = 'SEND';

  var item = document.querySelector('.list-group-item');
  item.style.color = 'red';

  //Changing bg color for 2nd item to green
  var secondItem = document.querySelector('.list-group-item:nth-child(2');
  secondItem.style.backgroundColor = 'green';


//Making  thrid item invisible
  var thirdItem = document.querySelector('.list-group-item:nth-child(3');
  thirdItem.style.visibility = 'hidden';


//Making second child font green
  var even = document.querySelectorAll('li:nth-child(even');
  even[0].style.color = 'green'

  

//Making odd item background green
  var odd = document.querySelectorAll('li:nth-child(odd');
  for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
  }

});
