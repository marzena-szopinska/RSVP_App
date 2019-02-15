const form = document.getElementById('registrar');
const input = form.querySelector('input');

// add event on submit for our button
form.addEventListener('submit', (evnt) => {
  // *** ADDING PEOPLE TO THE LIST ***
  // prevent page reload on submit
  evnt.preventDefault();
  // store the name
  const text = input.value;
  // clear the input
  input.value = '';
  // select ul element
  const ul = document.getElementById('invitedList');
  // create list element
  const li = document.createElement('li');
  // set text content for the li element
  li.textContent = text;
  // place the li element inside the unordered list element
  ul.appendChild(li);
});
