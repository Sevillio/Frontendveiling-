function getaccount() {
    fetch("https://localhost:7252/api/Account")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user data. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Store the retrieved user data in sessionStorage
            sessionStorage.setItem('user', JSON.stringify(data));

            // Call the function to update the account page with the new data
            updateAccountPage();
        })
        .catch(error => {
            console.error('Error in getaccount:', error);
            // Handle the error (e.g., display an error message to the user)
        });
}


function updateAccountPage() {
    let user = sessionStorage.getItem('user');

    if (user) {
        user = JSON.parse(user);

        const userId = user.userId;

        console.log("User Object:", user);
        console.log("User ID:", userId);


        // Update the account page with user information  
        
       let nameElement= document.getElementById("Name");
       nameElement.textContent = user.username;

       let emailElement = document.getElementById("Email");
       emailElement.textContent = user.email;

       let telefoonElement = document.getElementById("Telephone");
       telefoonElement.textContent = user.telephone;

       let postcodeElement = document.getElementById("Postalcode");
       postcodeElement.textContent = user.postcode;

       let placeElement = document.getElementById("place");
       placeElement.textContent = user.plaats;

       let adressElement = document.getElementById("adress");
       adressElement.textContent = user.adress;

       

        // Add other user properties as needed
    } else {
        // Redirect to the login page if user information is not found
        window.location.href = "Login.html";
    }

}

function gettingid() {
    // Parse the user object from sessionStorage
    let user = sessionStorage.getItem('user');

    if (user) {
        user = JSON.parse(user);

        // Extract userId from the user object
        const userId = parseInt(user.userId, 10);

        console.log("User ID in gettingid:", userId);

        // Return the userId
        return userId;
    } else {
        // Redirect to the login page if user information is not found
        window.location.href = "Login.html";
        return null; // Return null or handle accordingly
    }
}

//document.addEventListener('DOMContentLoaded',  function () {
   
     const userId = gettingid();
     console.log("Retrieved User ID:", userId);
    
async function changeaccountdetails(userId) {
        var account = {};
        

        let user = sessionStorage.getItem('user');

        if (!user) {
            console.error("User information not found.");
            return;
        }

        console.log("Account Id", userId)

        if (userId === null || userId === undefined) {
            console.error("Account ID is null or undefined");
            return;
        }

        user = JSON.parse(user);



        account.Name = document.getElementById("Editname")?.value?.trim();
        account.Email = document.getElementById("Editemail")?.value?.trim();
        account.Telefoon = document.getElementById("Edittelefoon")?.value?.trim();
        account.Place = document.getElementById("Editplaats")?.value?.trim();
        account.Address = document.getElementById("Editadress")?.value?.trim();
        account.Postcode = document.getElementById("Editpostcode")?.value?.trim();

       
        
        const passwordInput = document.getElementById("passwordInputId");
        if (passwordInput) {
            account.password = passwordInput.value.trim();
        }

        if (!isFormModified(user)) {
            console.log("No changes made. Skipping update.");
            return;
        }

        var accountjson = JSON.stringify(account);

        try {
            const response = await fetch(`https://localhost:7252/api/Account/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: accountjson
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to update account details. Status: ${response.status}, Message: ${errorMessage}`);
            }

            console.log("Account details updated successfully");
        } catch (error) {
            console.error("An error occurred while updating account details:", error.message);
        }
    }

    function isFormModified(user) {
        const nameInput = document.getElementById("Editname");
        const emailInput = document.getElementById("Editemail");
        const passwordInput = document.getElementById("passwordInputId");
        const addressInput = document.getElementById("Editadress");
        const placeInput = document.getElementById("Editplaats");
        const postcodeInput = document.getElementById("Editpostcode");
        const telefoonInput = document.getElementById("Edittelefoon");

        console.log("nameInput",nameInput)
        console.log("emailInput",emailInput)
        console.log("passwordInput",passwordInput)
        console.log("addressInput",addressInput)
        console.log("placeInput",placeInput)
        console.log("postcodeInput",postcodeInput)
        console.log("telefoonInput",telefoonInput)
        
    
        // Check if any of the form fields have been modified
        return (
            (nameInput && nameInput.value.trim() !== user.username) ||
            (emailInput && emailInput.value.trim() !== user.email) ||
            (telefoonInput && telefoonInput.value.trim() !== user.Telefoon) ||
            (addressInput && addressInput.value.trim() !== user.adress) ||
            (passwordInput && passwordInput.value.trim() !== user.password) ||
            (placeInput && placeInput.value.trim() !== user.plaats) ||
            (postcodeInput && postcodeInput.value.trim() !== user.postcode)
            // Add other conditions as needed
        );
    }
    console.log("Retrieved User ID before calling changeaccountdetails:", userId);
    changeaccountdetails(userId); // Pass the userId as an argument
//});



