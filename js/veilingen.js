function eventesten(){
                fetch("https://localhost:7252/api/Veiling")
                .then (r => r.json())
                .then (d => verwerkencsharp(d))
    }
function eventesten1(){
                fetch("https://localhost:7252/api/Veilingstuk")
                .then (r => r.json())
                .then (d => verwerkencsharp(d))
            }
function eventesten2(){
                fetch("https://localhost:7252/api/Account")
                .then (r => r.json())
                .then (d => verwerkencsharp(d))
            }
            
            //function doen(data){
               // console.log(data);
                //document.getElementById("doen").innerHTML=data.Duratie;
                //document.getElementById("doen").innerHTML=data.LaatsteBod;
                //document.getElementById("doen").innerHTML=data.MinimumBod;
                //for(var x =0; x < data.length; x++){
                    //document.getElementById("doen").innerHTML +=data[x].Duratie+"<br>-";
                    //document.getElementById("doen").innerHTML +=data[x].LaatsteBod+"<br>-";
                    //document.getElementById("doen").innerHTML +=data[x].MinimumBod+"<br>-";
                //}

                 
            //}

            function ToonVeiling(){
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange=function(){
                    if(this.readyState == 4){
                        console.log(this.responseText);
                        var AllVeiling = JSON.parse(this.responseText);
                        var eindString ="<table>";
                        for(var x= 0; x < AllVeiling.length; x++){
                            console.log(AllVeiling)
                            eindString += "<tr><td>"+ AllVeiling[x].id+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].duratie+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].laatsteBod+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].minimumBod+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].openingsBod+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].startDatumTijd+"</td></tr>";
                           //eindString += "<tr><td>"+ AllVeiling[x].veilingstuk+"</td></tr>";
                           // eindString += "<tr><td>"+ AllVeiling[x].Name+"</td></tr>";
                           //eindString += "<tr><td>"+ AllVeiling[x].Aanbieder+"</td></tr>";
                           // eindString += "<tr><td>"+ AllVeiling[x].Categorie+"</td></tr>";
                           // eindString += "<tr><td>"+ AllVeiling[x].Gewicht+"</td></tr>";
                            //eindString += "<tr><td>"+ AllVeiling[x].Lengte+"</td></tr>";
                            //eindString += "<tr><td>"+ AllVeiling[x].Width+"</td></tr>";
                            //eindString += "<tr><td>"+ AllVeiling[x].Laatsebod+"</td></tr>";
                            //eindString += "<tr><td>"+ AllVeiling[x].OpeningsBod+"</td></tr>";
                            
                        }
                        eindString +="</table>"
                        document.getElementById("csharpuitkomst").innerHTML = eindString

                    }
                    
                }
                xhr.open("Get","https://localhost:7252/api/Veiling", true);
                //xhr.open("Get","https://localhost:7252/api/Veilingstuk",true);
                xhr.send();
            }

                function ToonVeilingstuk(){
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange=function(){
                        if(this.readyState == 4){
                            console.log(this.responseText);
                            var AllVeilingstuk = JSON.parse(this.responseText);
                            var eindString ="<table>";
                            for(var x= 0; x < AllVeilingstuk.length; x++){
                                console.log(AllVeilingstuk)
                                eindString += "<tr><td>"+ AllVeilingstuk[x].id+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].name+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].aanbieder+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].beschrijving+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].categorie+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].gewicht+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].hoogte+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].width+"</td></tr>";
                                eindString += "<tr><td>"+ AllVeilingstuk[x].length+"</td></tr>";

                                
                            }
                            eindString +="</table>"
                            document.getElementById("csharpuitkomst1").innerHTML = eindString
    
                        }
                        
                    }
                    xhr.open("Get","https://localhost:7252/api/Veilingstuk",true);
                    xhr.send();
    

            }
                
            function verwerkencsharp(data){
                document.getElementById("csharpuitkomst").innerHTML = "";
                document.getElementById("csharpuitkomst1").innerHTML ="";
                for(let x =0; x < data.length; x++){
                    document.getElementById("csharpuitkomst").innerHTML += data[x].Duratie + "<br>";
                    document.getElementById("csharpuitkomst").innerHTML += data[x].OpeningsBod + "<br>";
                    document.getElementById("csharpuitkomst").innerHTML += data[x].MinimumBod + "<br>";
                    document.getElementById("csharpuitkomst").innerHTML += data[x].Laatsebod + "<br>";
                    document.getElementById("csharpuitkomst").innerHTML += data[x].StartdatumTijd + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Name + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Beschrijving + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Categorie + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Aanbieder + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Gewicht + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Lengte + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Width + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Hoogte + "<br>";
                    
                }
            }

           /* function verwerkencsharp1(data){
                document.getElementById("csharpuitkomst1").innerHTML = "";
                for(let x =0; x < data.length; x++){
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Name + "<br>";

                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Beschrijving + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Categorie + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Aanbieder + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Gewicht + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Lengte + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Width + "<br>";
                    document.getElementById("csharpuitkomst1").innerHTML += data[x].Hoogte + "<br>";
                }
            }*/

function Toevoegen(){
    console.log("Voeg toe")
    var veiling ={}
    var Veilingstuk = {}
    //veiling.StartdatumTijd.getElementById("InvoerDatum").value;
    veiling.Duratie= document.getElementById("InvoerDuratie").value;
    veiling.OpeningsBod= document.getElementById("InvoerOpeningsbod").value;
    veiling.MinimumBod= document.getElementById("InvoerMinimumbod").value;
    veiling.Laatsebod= document.getElementById("InvoerLaatstebod").value;
    veiling.Veilingstuk=Veilingstuk
    Veilingstuk.Name= document.getElementById("InvoerStukName").value;
        Veilingstuk.Beschrijving= document.getElementById("InvoerBeschrijving").value;
        Veilingstuk.Categorie= document.getElementById("InvoerCategorie").value;
        Veilingstuk.Aanbieder= document.getElementById("InvoerAanbieder").value;
        Veilingstuk.Gewicht= document.getElementById("InvoerGewicht").value;
        Veilingstuk.Lengte= document.getElementById("InvoerLengte").value;
        Veilingstuk.Width= document.getElementById("InvoerWidth").value;
        Veilingstuk.Hoogte= document.getElementById("InvoerHoogte").value;
       /* var veilingstukjson= JSON.stringify(Veilingstuk);
        console.log(veilingstukjson);
        fetch("https://localhost:7252/api/Veilingstuk", {
            method:"POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body: veilingstukjson
        }) */
        
    var veilingjson= JSON.stringify(veiling);
    console.log(veilingjson);
    fetch("https://localhost:7252/api/Veiling", {
        method:"POST",
        headers:{
            "Content-Type": 'application/json'
        },
        body: veilingjson
    }) 
}

function Accounttoevoeging()
{
    console/log ("Account is gemaakt")
    var account ={}
    account.Name = document.getElementById("InvoerAccount").value;
    account.Email = document.getElementById("InvoerEmail").value
    account.Password = document.getElementById("Passwordsignup").value
    account.Telefoon = document.getElementById("InvoerTelefoon").value
    account.Postcode = document.getElementById("InvoerPostcode").value
    account.Place = document.getElementById("InvoerPlace").value
    account.Adress = document.getElementById("InvoerAdress").value

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


    /*function Toevoegen1(){
        console.log("Voeg toe")
        var Veilingstuk={}
        Veilingstuk.Name= document.getElementById("InvoerName").value;
        Veilingstuk.Beschrijving= document.getElementById("InvoerBeschrijving").value;
        Veilingstuk.Categorie= document.getElementById("InvoerCategorie").value;
        Veilingstuk.Aanbieder= document.getElementById("InvoerAanbieder").value;
        Veilingstuk.Gewicht= document.getElementById("InvoerGewicht").value;
        Veilingstuk.Lengte= document.getElementById("InvoerLengte").value;
        Veilingstuk.Width= document.getElementById("InvoerWidth").value;
        Veilingstuk.Hoogte= document.getElementById("InvoerHoogte").value;
        var veilingstukjson= JSON.stringify(Veilingstuk);
        console.log(veilingstukjson);
        fetch("https://localhost:7252/api/Veilingstuk", {
            method:"POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body: veilingstukjson
        }) 
    }*/