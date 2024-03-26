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
  });
}

module.exports = handleFormSubmit;