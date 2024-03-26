const axios = require('axios');

// Write your code below:
async function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the form data
  const formData = new FormData(event.target);
  
  // Extracting the user details from the form
  const userDetails = {
    id: formData.get('userId'),
    name: formData.get('userName'),
    email: formData.get('userEmail')
    // Add more fields as needed
  };
  
  // Make a DELETE request to delete the user
  try {
    await axios.delete(`https://crudcrud.com/api/users/${userDetails.id}`);
    console.log('User deleted successfully');
  } catch (error) {
    console.error('Error occurred while deleting user:', error.message);
    return;
  }
  
  // Make a POST request to save the updated user details
  try {
    const response = await axios.post('https://crudcrud.com/api/users', userDetails);
    // Assuming the response contains the updated user details, you can update the UI here
    const updatedUserDetails = response.data;
    // Update UI with the updated user details
    console.log('User details updated successfully:', updatedUserDetails);
  } catch (error) {
    console.error('Error occurred while saving user details:', error.message);
  }
}

// Do not touch the code below
module.exports = handleFormSubmit;