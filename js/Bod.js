let MinimumBod = 0; // Initialize minimum bid
let Laatsebod = 0; // Initialize last bid
let LaatstebodAccepted = false; // Initialize bid acceptance status

function botdata() {
    fetch("https://localhost:7252/api/Bod")
        .then(r => r.json())
        .then(d => verwerkencsharp5(d))
        .catch(error => console.error('Error in botdata:', error));
}

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

        })
        .catch(error => {
            console.error('Error in getaccount:', error);
            // Handle the error (e.g., display an error message to the user)
        });
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

async function getveilingid() {
    try {
        const response = await fetch("https://localhost:7252/api/Veiling");
        if (!response.ok) {
            throw new Error(`Failed to fetch veiling data. Status: ${response.status}`);
        }
        const data = await response.json();
        // Store the retrieved veiling data in sessionStorage
        sessionStorage.setItem('veilingData', JSON.stringify(data));
        // You can choose to perform other actions here if needed
        return data;
    } catch (error) {
        console.error('Error in getveilingid:', error);
        throw error; // Throw the error so that the calling code can handle it
    }
}

function gettingveilid() {
    // Parse the user object from sessionStorage
    let VeilingData = sessionStorage.getItem('veilingData');

    if (VeilingData) {
        veilingdata = JSON.parse(VeilingData);

        // Extract userId from the user object
        const veilingId = parseInt(VeilingData.veilingId, 10);

        console.log("User ID in gettingid:", veilingId);

        // Return the userId
        return veilingId;
    } else {
        // Redirect to the login page if user information is not found
        window.location.href = "Login.html";
        return null; // Return null or handle accordingly
    }
}




function acceptBid(bod) {
    console.log("Accept Bod");
    LaatstebodAccepted = true;
    return bod.Laatstebod;
}

function declineBid(bod) {
    console.log("Bod declined");
    LaatstebodAccepted = false;
    return bod.MinimumBod;
}

async function bod() {
    console.log("Bod aangemaakt");

    const accountId = sessionStorage.getItem("userId");
    const veilingId = sessionStorage.getItem("veilingId")

    if (veilingId) {
        try {
            const response = await fetch(`https://localhost:7252/api/Veiling/${veilingId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch veiling data. Status: ${response.status}`);
            }
            const veiling = await response.json();

            const bodData = {
                Prijs: document.getElementById('Invoerbod').value,
                account: { accountId },
                Veiling: veiling
            };

            const bodjson = JSON.stringify(bodData);
            console.log(bodjson);

            const responseNewVeiling = await fetch("https://localhost:7252/api/Bod", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: bodjson
            });

            if (!responseNewVeiling.ok) {
                throw new Error(`Failed to create bid. Status: ${responseNewVeiling.status}`);
            }

            const newVeiling = await responseNewVeiling.json();
            bodchecker(veiling, newVeiling); // Pass veiling and newVeiling to bodchecker
        } catch (error) {
            console.error('Error creating bid:', error);
        }
    } else {
        // Handle the case where veilingId is not available
        console.error('Veiling ID not found');
    }
}

function bodchecker(veiling, bod) {
    let Laatsebod = 0;
    let MinimumBod = 0;

    if (veiling.Openingsbod === 0 || veiling.Openingsbod === null) {
        veiling.Openingsbod = Laatsebod;
        MinimumBod = 1;
    } else {
        // Update bod.Prijs based on the latest Laatsebod
        Laatsebod = bod.Prijs; // Access bod.Prijs directly
        MinimumBod = parseInt(Laatsebod * 1.15);
        if (bod.Prijs > MinimumBod) {
            Laatsebod = acceptBid(bod);
        } else {
            MinimumBod = declineBid(bod);
        }
    }

    return {
        minimumBod: MinimumBod,
        laatsebod: Laatsebod
    };
}



