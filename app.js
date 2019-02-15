const form = document.getElementById('registrar');
const input = form.querySelector('input');
// select ul element
const ul = document.getElementById('invitedList');

function createLI(text) {
  // create list element
 const li = document.createElement('li');
 // set text content for the li element
 li.textContent = text;
 // create a label
 const label = document.createElement('label');
 // set the label text content to Confirmed
 label.textContent = 'Confirmed';
 // create an input
 const checkbox = document.createElement('input');
 // set input type to checkbox
 checkbox.type = 'checkbox';
 // append the checkbox to the label
 label.appendChild(checkbox);
 // append the label to the list element
 li.appendChild(label);

 // create a button
 const editButton = document.createElement('button');
 // set button text content to edit
 editButton.textContent = 'edit';
 // append the edit button to the li element
 li.appendChild(editButton);

 // create a button
 const removeButton = document.createElement('button');
 // set button text content to remove
 removeButton.textContent = 'remove';
 // append the button to the li element
 li.appendChild(removeButton);
// return li element
 return li;
}
// add event on submit for our button
form.addEventListener('submit', (e) => {
  // *** ADDING PEOPLE TO THE LIST AS WELL AS CHECKBOXES FOR ONFIRMATION ***
  // prevent page reload on submit
  e.preventDefault();
  // store the name
  const text = input.value;
  // clear the input
  input.value = '';
  const li = createLI(text);
  // place the li element inside the unordered list element
  ul.appendChild(li);
});

// CONFIRMING INVITATIONS
ul.addEventListener('change', (e) => {
  //console.log(e.target.checked);
  const checkbox = e.target;
  // returns true when checkbox has been checked, and false when it has benn unchecked
  const checked = checkbox.checked;
  // get the list item traversing through (checkbox -> label -> li)
  const listItem = checkbox.parentNode.parentNode;
  // set the list class name
  if(checked) {
    //... to responded
    listItem.className = 'responded';
  }
  else
  {
    // ... to empty class
    listItem.className = '';
  }
});

// REMOVING PEOPLE FROM THE LIST
ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON'){
    const button = e.target;
    const li = e.target.parentNode;
    const ul = li.parentNode;
    
    if(button.textContent === 'remove'){
      // remove the whole li element
      ul.removeChild(li);
    } else if(button.textContent === 'edit'){
      console.log('edit');
    }
  }
});
