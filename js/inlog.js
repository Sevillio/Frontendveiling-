async function login(event) {
    try {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        // Get user input
        let email = document.getElementById("EmailLogin").value;
        let password = document.getElementById("PasswordLogin").value;

        // Dummy data for demonstration purposes (replace this with actual API calls)
        let response = await fetch("https://localhost:7252/api/Account");

        if (!response.ok) {
            throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

        // Extract JSON data from the response
        let data = await response.json();

        // Check login credentials
        let user = checkLogin(data, email, password);

        if (user) {
            // Simulate successful authentication by storing user information in sessionStorage
            sessionStorage.setItem('user', JSON.stringify(user));
            

            // Redirect to the profile page or another authenticated page
            window.location.href = "Home.html";
        } else {
            // Display login feedback
            document.getElementById("loginFeedback").textContent = "Invalid email or password. Please check your credentials";
        }
    } catch (error) {
        console.error('Error in login:', error);

        // Display user-friendly error message
        alert("Failed to perform login. Please try again later.");
    }
}

function checkLogin(data, email, password) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
            console.log("Match found");
            // Return user information for successful login
            return {
                userId: data[i].id,
                username: data[i].name,
                email: data[i].email,
                telephone: data[i].telefoon,
                postcode: data[i].postcode,
                plaats: data[i].place,
                adress: data[i].address,
                password: data[i].password
                

                // Add other user properties as needed
            };
        }
    }
    console.log("Invalid email or password. Please check your credentials");
    return null;

}

window.login = login;

function cancel()
{
    window.location.href="Home.html"

}