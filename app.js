document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  // select the main div
  const mainDiv = document.querySelector('.main');
  // select ul element
  const ul = document.getElementById('invitedList');

  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  const filterCheckBox = document.createElement('input');
  // add text content to the label
  filterLabel.textContent = "Hide those who haven't responded";
  // set input type to checkbox
  filterCheckBox.type = 'checkbox';
  // append filter element to the div element
  div.appendChild(filterLabel);
  div.appendChild(filterCheckBox);
  // insert div before the unordered list element
  mainDiv.insertBefore(div, ul);

  filterCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children; // referene to the collection
    if(isChecked){
      for(let i = 0; i < lis.length; i+=1){
        let li = lis[i];
        if(li.className === 'responded'){
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      }
    } else {
      for(let i = 0; i < lis.length; i+=1){
        let li = lis[i];
        li.style.display = '';
      }
    }
  });

  function createLI(text) {
    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }

    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value);
      // append the span to li element
      li.appendChild(element);
      return element;
    }
    // create list element
   const li = document.createElement('li');
   appendToLI('span', 'textContent', text);
   appendToLI('label', 'textContent', 'Confirmed')
    .appendChild(createElement('input', 'type', 'checkbox'));
   appendToLI('button', 'textContent', 'edit');
   appendToLI('button', 'textContent', 'remove');

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
        // target the span element
        const span = li.firstElementChild;
        // create an input
        const input = document.createElement('input');
        // set input's type to text
        input.type = 'text';
        // get the name to edit
        input.value = span.textContent;
        // insert the new input element
        li.insertBefore(input, span);
        // remove span element
        li.removeChild(span);
        // change the button text to save
        button.textContent = 'save';
      } else if (button.textContent === 'save'){
        // target the input element
        const input = li.firstElementChild;
        // create a span element
        const span = document.createElement('span');
        // set span's text to whats inside the input
        span.textContent = input.value;
        // insert the span before the input
        li.insertBefore(span, input);
        // remove the input
        li.removeChild(input);
        // change the button text to save
        button.textContent = 'edit';
      }
    }
  });
});
