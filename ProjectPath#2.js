"use strict";

/***************************JS*************************************
// ANASTASIIA ALTSHULER 
// AND EVGENY ALTSHULER 
/************************************************************************/

const contacts = [
  {
    id: 1,
    name: 'Bertie Yates',
    address: "Haifa",
    phone: "054999000",
    imageUrl: "./image/contact1.png"
  },
  {
    id: 2,
    name: 'Hester Hogan',
    address: "Haifa",
    phone: "054996669",
    imageUrl: "./image/contact2.png"
  },
  {
    id: 3,
    name: 'Larry Little',
    address: "Haifa",
    phone: "054966699",
    imageUrl: "./image/contact3.png"
  },
  {
    id: 4,
    name: 'Sean Walsh',
    address: "Haifa",
    phone: "054555999",
    imageUrl: "./image/seanWalsh.png"
  },
  {
    id: 5,
    name: 'Carry Jonh',
    address: "Haifa",
    phone: "054555999",
    imageUrl: "./image/carryJonh.png"
  },
]

///////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////ADD HTML ELEMENT INTO UL///////////////////////////////////////////

//Function for upload to the page all exist objects
//Chosed UL for add into it all info about contacts
const contactsListElement = document.querySelector('.user-list');

//Created function forEacb that will upload all elementson the page
//contact is our Array with objects
contacts.forEach((contact) => {
  //Created new element into html
  const liList = document.createElement('li')
  liList.className = 'user-items'//Added className
  liList.setAttribute('data-name', contact.name.toLowerCase());//Added attributes for future searching
  liList.setAttribute('data-phone', contact.phone);//Added attributes for future searching
  //Added element content
  liList.innerHTML =
    ` <div class="user-info">
            <img src="${contact.imageUrl}" alt="contact1" title="${contact.name}" class="avatar">
            <span class="user-name" >${contact.name}</span>
          </div>
          <div class="user-actions">
            <i class="info action-icon"><img src="./image/infoicon.png" alt="infoicon" title="info"></i>
            <i class="edit action-icon"><img src="./image/linepenpencilicon.png" alt="penicon" title="edit"></i>
            <i class="delete action-icon"><img src="./image/trashbasketdeleteremoveicon2.png" alt="trashbasket2"
                title="delete"></i>
          </div>
        `
  contactsListElement.appendChild(liList)//Added new contect into UL (html)
})

/////////////////////////////////////////////////END/////////////////////////////////////////////////


/////////////////////////////////////////Search INPUT/////////////////////////////////////////////
//////////////////////////////////////////Search CONTACT//////////////////////////////////
//Choses all needed variables. 
let searchInput = document.getElementById('searchInput')//Search area
// Function that reacts to keyboard actions
searchInput.addEventListener('input', () => {
  //New variable that take value of input search
  const filter = searchInput.value.toLowerCase();
  //Get LI content from UL that we added above
  const searchContactList = contactsListElement.querySelectorAll('.user-items');

  //Function that checked all elements with class .user-items (our LI)
  searchContactList.forEach(contact => {
    //New Variable that take value from .user-items (our LI)
    const name = contact.getAttribute('data-name');
    const phone = contact.getAttribute('data-phone');

    //If element contain printed text on input area it removed class with style display: none;
    if (name.includes(filter) || phone.includes(filter)) {
      contact.classList.remove('displayNone')
    }
    else {
      contact.classList.add('displayNone')
    }
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////Popup////////// button info/////////////////////////////////
//Choses all needed variables.
const infoButton = document.querySelectorAll('.info')
let infoPopup = document.getElementById('infoPopup');
const closePopup = document.querySelectorAll('.close');
//if click on .info popup showes information
infoButton.forEach(elem => {
  elem.addEventListener('click', () => {
    infoPopup.style.display = 'block'
  })
})
//if click on X close the popup
closePopup.forEach(elem => {
  elem.addEventListener('click', () => {
    infoPopup.style.display = 'none'
  })
})
//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////Popup////////// button AddPerson/////////////////////////////////

//Choses all needed variables.
const addButton = document.getElementById('addPerson')
let addPopup = document.getElementById('addingPopup')
//if c});lick on .addPerson popup showes information
addButton.addEventListener('click', () => {
  addPopup.style.display = 'block'
})
//if click on X close the popup
closePopup.forEach(elem => {
  elem.addEventListener('click', () => {
    addPopup.style.display = 'none'
  })
})
///////////////////////////////////////Popup////////// button AddPerson/////////////////////////////////

////////////////////////POPUP/////////////////////EDIT PERSON///////////////////////////////////////
//Choses all needed variables.
const editButton = document.querySelectorAll('.edit')
let editPopup = document.getElementById('editPopup')
//if click on .edit popup showes information
editButton.forEach(elem => {
  elem.addEventListener('click', () => {
    editPopup.style.display = 'block';
  })
})
//if click on X close the popup
closePopup.forEach(elem => {
  elem.addEventListener('click', () => {
    editPopup.style.display = 'none'
  })
})
////////////////////////POPUP/////////////////////EDIT PERSON///////////////////////////////////////


/////////////////////////////////////////////Save//button/////////////////////////////////////////////
////////////////////////////////////////////ADD NEW CONTACT/////////////////////////////
//Choses save button to add new contact
const addSaveButton = document.getElementById('addSaveButton')


//Choses variables that will be provided by owner. From ADD POPUP
const newContactName = document.querySelector('.new-user-name');
const newContactPhone = document.querySelector('.new-user-phone');
const newContactAddress = document.querySelector('.new-user-address');
const newContactAge = document.querySelector('.new-user-age');
const newContactImageURL = document.querySelector('.new-user-image');

//Additional function to reset the provided data
//this function needed to reset the value for future data
const resetData = () => {
  newContactName.value = ""
  newContactPhone.value = ""
  newContactAddress.value = ""
  newContactAge.value = ""
  newContactImageURL.value = ""
}

//Created function that save the provided data
const addSendData = (e) => {/***************OPEN FUNCTION***************/
  e.preventDefault();//Use event to stop the page updating

  /************************************************************ */
  //Added variables for save provided value in input area.
  //Saved the providede data
  const inputName = newContactName.value;
  const inputPhone = newContactPhone.value;
  const inputAddress = newContactAddress.value;
  const inputAge = newContactAge.value;
  const inputImageURL = newContactImageURL.value;
  /********************************************************** */

  //Check If there some input is empty -> display the message
  if (!inputName.trim() || !inputPhone.trim() || !inputAddress.trim() || !inputAge.trim() || !inputImageURL.trim()) {
    alert("All fields required!")
  } else { //If all good we save object
    //We call resert function that reset all provided data
    resetData();

    // /************************CREATE NEW CONTACT AREA INTO THE FUNCTION******************************/
    //After save value we create new contact on the page, it's element LI
    const liLisNewt = document.createElement('li')
    //Give className to new element
    liLisNewt.className = 'user-items'
    liLisNewt.setAttribute('data-name', inputName.toLowerCase());//Added attributes for future searching
    liLisNewt.setAttribute('data-phone', inputPhone);//Added attributes for future searching

    //Set up data in the new element. //Added element content
    liLisNewt.innerHTML = `<div class="user-info"><img src ="${inputImageURL}" alt = "${inputName}" title = "${inputName}" class="avatar" ><span class="user-name">${inputName}</span></div ><div class="user-actions">
    <i class="info action-icon"><img src="./image/infoicon.png" alt="infoicon" title="info"></i>
    <i class="edit action-icon"><img src="./image/linepenpencilicon.png" alt="penicon" title="edit"></i>
    <i class="delete action-icon"><img src="./image/trashbasketdeleteremoveicon2.png" alt="trashbasket2"
      title="delete"></i></div>`

    //Created new Object
    const newObj = {
      id: contacts.length + 1,
      name: inputName,
      address: inputAddress,
      phone: inputPhone,
      imageUrl: inputImageURL
    }
    //Added new LI to UL on HTML page
    contactsListElement.appendChild(liLisNewt);
    //Added new Object to our Array
    contacts.push(newObj);

    //Updated count of contacts
    countOfContact.textContent = contacts.length + " people"
  }
}/***************CLOSE FUNCTION***************/

/**********************************************************************/
//Variable. This our button with event click. 
// When the button is clicked, we call the function above (sendData).
addSaveButton.addEventListener('click', addSendData)
addSaveButton.addEventListener('click', (e) => {
  e.preventDefault()
})
/**********************************************************************/
//////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////Sum of Contact Count on top of site page//////////////////
const countOfContact = document.getElementById('count-people')
countOfContact.textContent = contacts.length + " people"

//////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const editSaveButton = document.querySelector('#editSaveBottom')

// //Choses variables that will be provided by owner
// const editContactName = document.querySelector('.edit-user-name');
// const editContactPhone = document.querySelector('.edit-user-phone');
// const editContactAddress = document.querySelector('.edit-user-address');
// const editContactAge = document.querySelector('.edit-user-age');

// const userName = document.querySelector('.user-name')
// const currentUsername = document.querySelector('.current-user-name');
// const currentPhone = document.querySelector('.current-user-phone');
// const currentAddress = document.querySelector('.current-user-address');
// const currentAge = document.querySelector('.current-user-age');


// //Created function that save the provided data
// const editSendData = (e) => {
//   e.preventDefault();//Use event to stop the page updating

//   userName.textContent = editContactName.value;
//   currentUsername.textContent = editContactName.value;
//   currentPhone.textContent = editContactPhone.value;
//   currentAddress.textContent = editContactAddress.value;
//   currentAge.textContent = editContactAge.value;
// }

// editSaveButton.addEventListener('click', editSendData)
// editSaveButton.addEventListener('click', (e) => {
//   e.preventDefault()
// })

// //////////////////////////////////////////////////////////////////////////////

