// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();
  let myObj = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  let myObj_serialised = JSON.stringify(myObj);
  localStorage.setItem(myObj.email, myObj_serialised);

  displayDetails(myObj);
}

function displayDetails(myObj) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.className = 'detail';
  li.id = myObj.email;
  li.innerHTML = myObj.username + '-' + myObj.email + '-' + myObj.phone;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  li.appendChild(deleteBtn);

  ul.appendChild(li);

  deleteBtn.addEventListener('click', function (event) {
    const liToDelete = event.target.parentElement;
    localStorage.removeItem(liToDelete.id);
    ul.removeChild(liToDelete);

  const editButton = docunent.createElement('input')
  editButton. type = "button"
  editbutton.value = 'Edit'
  editButton.onclick =() => {
  localStorage. removeltem(obj.email)
  parentELen. removeChi1d(childElem)
  document.getElementById('usernameInputTag') .value = obj.name
  docunent.getElementByTd('enailInputTag') .value = obj.email
  document.getElementById('phoneNumberInputTag').value = obj.phonenumber
  }
  childElem.appendChild(deleteButton)
  childElem.appendChild(editButton)
  parentELem.appendChild(childElem)

  });
}

module.exports = handleFormSubmit;