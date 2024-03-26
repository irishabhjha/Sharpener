// Get the form element
const form = document.getElementById('userForm');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get user inputs
  const username = form.elements['username'].value;
  const email = form.elements['email'].value;
  const phone = form.elements['phone'].value;

  // Store user details in local storage
  localStorage.setItem('Username', username);
  localStorage.setItem('Email', email);
  localStorage.setItem('Phone', phone);

  // Optionally, you can also clear the form fields after submission
  form.reset();

  // Display a confirmation message
  alert('User details stored successfully!');
}

// Attach the handleSubmit function to the form's submit event
form.addEventListener('submit', handleSubmit);