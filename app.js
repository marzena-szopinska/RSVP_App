const form = document.getElementById('registrar');
const input = form.querySelector('input');
// select ul element
const ul = document.getElementById('invitedList');

// add event on submit for our button
form.addEventListener('submit', (e) => {
  // *** ADDING PEOPLE TO THE LIST ***
  // prevent page reload on submit
  e.preventDefault();
  // store the name
  const text = input.value;
  // clear the input
  input.value = '';
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
  // place the li element inside the unordered list element
  ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
  //console.log(e.target.checked);
  const checkbox = e.target;
  // returns true when checkbox has been checked, and false when it has benn unchecked
  const checked = checkbox.checked;
  // get the list item traversing through (checkbox -> label -> li)
  const listItem = checkbox.parentNode.parentNode;
  // set the list class name
  if(checked) {
    listItem.className = 'responded';
  }
  else
  {
    listItem.className = '';
  }
});
