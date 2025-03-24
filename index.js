function submitData(name, email) {
    // Define the data to be sent
    const userData = {
      name: name,
      email: email
    };
  
    // Define configuration object for the fetch request
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userData) // Convert JS object to JSON
    };
  
    // Make the POST request
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json()) // Parse JSON response
      .then(data => {
        // Append new ID to the DOM
        document.body.innerHTML += `<p>New User ID: ${data.id}</p>`;
      })
      .catch(error => {
        // Append error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  
  // Example Usage:
  submitData("Alice", "alice@example.com");
  