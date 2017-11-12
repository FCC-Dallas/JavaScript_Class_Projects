let invitees = [];

class Invitee {
    constructor (name, preconfirmed = false, updateDisplay) {
        this.name = name;
        this.confirmed = preconfirmed;

        this.add(updateDisplay);
    }

    add (shouldUpdateDisplay) {
        invitees.push(this);

        if (shouldUpdateDisplay !== false) {
            updateDisplay();
        }
    }

    remove () {
        let index = invitees.indexOf(this);

        if (index >= 0) {
            invitees.splice(index, 1);
        }

        updateDisplay();
    }

    changeName (newName) {
        this.name = newName;
    }

    changeStatus (newStatus) {
        this.confirmed = newStatus;
    }

}

function saveToPersistentStorage () {
    localStorage.setItem('invitees', JSON.stringify(invitees));
}

function getFromPersistentStorage () {
    let inviteeList = localStorage.getItem('invitees');

    if (!inviteeList) {
        inviteeList = [];
    } else {
        inviteeList = JSON.parse(inviteeList);
    }

    let results = [];
    inviteeList.forEach((invitee) => {
        results.push(new Invitee(invitee.name, false, false));
    });

    return results;
}

invitees = getFromPersistentStorage();

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const submitButton = form.querySelector('button');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');

function updateDisplay () {
    saveToPersistentStorage();

    // Remove Elements
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    // Create New Elements
    invitees.forEach((invitee) => {
        ul.appendChild(createInviteeLI(invitee));
    });
}

function createInviteeLI (inviteeObject) {
  // Create Invitee List Item
  const invitee = document.createElement('li');

  // Create Name Element
  const nameEl = document.createElement('h4');
  nameEl.innerText = inviteeObject.name;
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
  removeButton.addEventListener('click', () => { inviteeObject.remove() });
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

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();

    //Click submit
    submitButton.addEventListener('click', (e)=>{
      // WAIT DON'T DO WHAT YOU NORMALLY DO
      e.preventDefault();

      //take what's inside input box
      let inviteeName = input.value;

        //display it in invitedList ul
      new Invitee(inviteeName);
    });
});
