function getinfo()
{
    fetch("https://localhost:7252/api/Account")
    .then (r => r.json())
                .then (d => verwerkencsharp(d))
}

function verwerkencsharp3(data){
    document.getElementById("csharpuitkomst3").innerHTML ="";
    for(let x =0; x < data.length; x++){
        document.getElementById("csharpuitkomst3").innerHTML += data[x].Name + "<br>";
        document.getElementById("csharpuitkomst3").innerHTML += data[x].Email + "<br>";
        document.getElementById("csharpuitkomst3").innerHTML += data[x].Password + "<br>";
        document.getElementById("csharpuitkomst3").innerHTML += data[x].Telefoon + "<br>";
        document.getElementById("csharpuitkomst3").innerHTML += data[x].Postcode + "<br>";
        document.getElementById("csharpuitkomst3").innerHTML += data[x].Place + "<br>";
        document.getElementById("csharpuitkomst3").innerHTML += data[x].Adress + "<br>";

    }
}
function Accountadd()
{
   
   console.log("Account is gemaakt")
   alert("Account is gemaakt")
   var account = {}
   account.Name = document.getElementById("NameSignup").value
   account.Email = document.getElementById("Emailsignup").value
   account.Password = document.getElementById("Passwordsignup").value
   account.Telefoon = document.getElementById("NumberSignup").value
   account.Postcode = document.getElementById("PostcodeSignup").value
   account.Place = document.getElementById("PlaceSignup").value
   account.Adress = document.getElementById("AdressSignup").value

   var accountjson= JSON.stringify(account);
    console.log(accountjson);
    fetch("https://localhost:7252/api/Account", {
        method:"POST",
        headers:{
            "Content-Type": 'application/json'
        },
        body: accountjson
    }) 

}

