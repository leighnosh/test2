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
  });
  