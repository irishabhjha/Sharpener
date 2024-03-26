// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
    let myObj={
    username : event.target.username.value,
    email : event.target.email.value,
    phone : event.target.phone.value,
    }
    let myObj_serialised=JSON.stringify(myObj);
    localStorage.setItem(myObj.email, myObj_serialised);
  
    displayDetails(myObj);
  }

    function displayDetails(myObj)
    {
      const ul = document.getElementById('listcontainer');
      const li = document.createElement('li');
      li.textContent = myObj.username+'-'+myObj.email+'-'+myObj.phone;
      ul.appendChild(li);
    }

module.exports = handleFormSubmit;