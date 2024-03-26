const axios = require('axios');

// Write your code below:
function handleFormSubmit(event) {
  
}

// Fetch user details when the DOM content is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('https://crudcrud.com/api/your-api-endpoint'); // Replace 'your-api-endpoint' with your actual API endpoint
        const users = response.data; // Assuming the response contains an array of user objects
        displayUsers(users); // Call a function to display the users on the screen
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
});

// Function to display users on the screen
function displayUsers(users) {
    // Assuming there's an element with id 'user-list' where we'll display the users
    const userListElement = document.getElementById('user-list');
    // Clear previous content
    userListElement.innerHTML = '';
    // Iterate through users and create list items to display them
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email}`; // Assuming user objects have 'name' and 'email' properties
        userListElement.appendChild(listItem);
    });
}

module.exports = handleFormSubmit;
