async function getinfo() 
{
    let response = await fetch("https://localhost:7252/api/Account");
    let data = await response.json();
    verwerkencsharp4(data);
    return data;
}

function verwerkencsharp4(data){
    document.getElementById("csharpuitkomst4").innerHTML ="";
    for(let x =0; x < data.length; x++){

        document.getElementById("csharpuitkomst4").innerHTML += data[x].Email + "<br>";
        document.getElementById("csharpuitkomst4").innerHTML += data[x].Password + "<br>";
     

    }
}

function checkData(data, elementId, propName) {
    var userInput = document.getElementById(elementId).value;
    for (let i = 0; i < data.length; i++) {
        if (data[i].propName === userInput) {
            console.log("Match found");
            break;
        }
    }
}


async function inlog()
{
    let data = await getinfo();
    checkData(data, "EmailLogin", "Email");
    checkData(data, "PasswordLogin", "Password");
}