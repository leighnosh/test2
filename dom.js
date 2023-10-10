var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var fiter = document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
  
    // Create separate elements for item name and description
    var itemNameElement = document.createElement('span');
    itemNameElement.appendChild(document.createTextNode(newItem));

    var descriptionElement = document.createElement('span');
    descriptionElement.className = 'description';
    descriptionElement.appendChild(document.createTextNode(newDescription));

    //create delete button element
    var deleteBtn = document.createElement('button');
    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //create edit button element
    var editBtn = document.createElement('button');
    //add classes to edit button
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    //append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append elements to li
    li.appendChild(itemNameElement);
    li.appendChild(descriptionElement);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    itemList.appendChild(li);

    // Clear input fields after adding item
    document.getElementById('item').value = '';
    document.getElementById('description').value = '';
}
//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e){
    // convert text to lower
    var text = e.target.value.toLowerCase();
    // Get li
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemDescription = item.childNodes[1].textContent.toLowerCase();
      if(itemName.toLowerCase().indexOf(text) != -1 || itemDescription.indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }