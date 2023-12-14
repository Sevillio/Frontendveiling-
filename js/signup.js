function getinfo()
{
    fetch("https://localhost:7252/api/Account")
    .then (r => r.json())
                .then (d => verwerkencsharp(d))
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
    console.log(veilingjson);
    fetch("https://localhost:7252/api/Account", {
        method:"POST",
        headers:{
            "Content-Type": 'application/json'
        },
        body: accountjson
    }) 

}

function back()
{

}