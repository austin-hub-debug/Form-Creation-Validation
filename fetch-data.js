async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list to hold user names
        const userList = document.createElement('ul');

        // Loop through users and add list items
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear any existing content and show error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
