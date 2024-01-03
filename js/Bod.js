let MinimumBod = 0; // Initialize minimum bid
let Laatsebod = 0; // Initialize last bid
let LaatstebodAccepted = false; // Initialize bid acceptance status

function botdata() {
    fetch("https://localhost:7252/api/Bod")
        .then(r => r.json())
        .then(d => verwerkencsharp5(d))
        .catch(error => console.error('Error in botdata:', error));
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





function gettingveilingstukid() {
    // Parse the user object from sessionStorage
    let VeilingstukData = sessionStorage.getItem('veilingstukId');

    if (VeilingstukData) {
        VeilingstukData = JSON.parse(VeilingstukData);

        // Extract userId from the user object
        const veilingstukId = parseInt(VeilingstukData.veilingstukId, 10);

        console.log("veiling ID in gettingid:", veilingstukId);

        // Return the userId
        return veilingstukId;
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
        Laatsebod = bod.Prijs;
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



