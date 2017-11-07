document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  const submitButton = form.querySelector('button');

  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('invitedList');

  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  const filterCheckBox = document.createElement('input');

  //Click submit
  submitButton.addEventListener('click', (e)=>{
    // WAIT DON'T DO WHAT YOU NORMALLY DO
    e.preventDefault();

    //take what's inside input box
    let inviteeName = input.value;

      //display it in invitedList ul  
    ul.appendChild(createInviteeLI(inviteeName));
  });

  function createInviteeLI (name) {
    // Create Invitee List Item
    const invitee = document.createElement('li');

    // Create Name Element
    const nameEl = document.createElement('h4');
    nameEl.innerText = name;
    invitee.appendChild(nameEl);

    // Create Label
    const confirmedLabel = document.createElement('label');
    confirmedLabel.innerText = 'Confirmed';

    // Create and Append Checkbox to Label
    const confirmedCB = document.createElement('input');
    confirmedCB.type = "checkbox";
    confirmedCB.name = 'cb-' + name;
    confirmedLabel.appendChild(confirmedCB);

    // Append Label to Invitee List Item
    invitee.appendChild(confirmedLabel);

    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', removeInviteeLI);
    invitee.appendChild(removeButton);

    return invitee;
  }

  function removeInviteeLI (e) {
    // Grab which LI the button is part of
    const clickTarget = e.target;
    const li = clickTarget.parentNode;
    const ul = li.parentNode;

    // Remove the li from the ul
    ul.removeChild(li);
  }   
      
      
  //listen for the button click

    //on button click add name, edit, remove, confirm to list element

    //
});  
  
  
  
  
  
  
  
  
  