function veilingstukget(){
                fetch("https://localhost:7252/api/Veiling")
                .then (r => r.json())
                .then (d => verwerkencsharp(d))
    }
function eventesten1(){
                fetch("https://localhost:7252/api/Veilingstuk")
                .then (r => r.json())
                .then (d => verwerkencsharp(d))
            }



function ToonVeiling(){
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange=function(){
                    if(this.readyState == 4){
                        console.log(this.responseText);
                        var AllVeiling = JSON.parse(this.responseText);
                        var eindString ="<table>";
                        for(var x= 0; x < Math.min(5, AllVeiling.length); x++){
                            console.log(AllVeiling);
                            eindString += "<tr><td>"+ AllVeiling[x].duratie+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].laatsteBod+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].minimumBod+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].openingsBod+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].startDatumTijd+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].endDatumtijd+"</td></tr>";
                            eindString += "<tr><td>"+ AllVeiling[x].status+"</td></tr>";
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
                        //document.getElementById("csharpuitkomst").innerHTML = eindString;

                    }
                    
                }
                xhr.open("Get","https://localhost:7252/api/Veiling", true);
                //xhr.open("Get","https://localhost:7252/api/Veilingstuk",true);
                xhr.send();
            }

            document.addEventListener('DOMContentLoaded', function () {
                ToonVeiling();
            });

                function ToonVeilingstuk(){
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange=function(){
                        if(this.readyState == 4){
                            console.log(this.responseText);
                            var AllVeilingstuk = JSON.parse(this.responseText);
                            var eindString ="<table>";
                            for(var x= 0; x < AllVeilingstuk.length; x++){
                                console.log(AllVeilingstuk)
                                eindString += "<tr><td>"+ AllVeilingstuk[x].id+"</td></tr>"
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
                    document.getElementById("csharpuitkomst").innerHTML += data[x].ClosedatumTijd + "<br>";
                    document.getElementById("csharpuitkomst").innerHTML += data[x].status + "<br>";
                    document.getElementById("csharpuitkomst").innerHTML += data[x].id + "<br>";
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

            
            
            
            function updateVeilingBackend(newStatus) {
                const veilingId = gettingid(); // Call the gettingid function to get veilingId
            
                if (veilingId !== null) {
                    const apiUrl = `https://localhost:7252/api/updateVeilingStatus/${veilingId}`;
            
                    fetch(apiUrl, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: newStatus }),
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to update veiling status. Status: ${response.status}`);
                        }
                        console.log('Veiling status updated successfully.');
                    })
                    .catch(error => {
                        console.error('Error updating veiling status:', error);
                    });
                }
            }
            
            var veiling = {
                StartDatumTijd: new Date(""),
                EndDatumtijd: new Date(""),
                Veilingstatus: "none",
            };
            
            function updateVeilingstatus(startDatumTijd, endDatumtijd) {
                var x = new Date().getTime();
                var startDate = new Date(startDatumTijd).getTime();
                var closeDate = new Date(endDatumtijd).getTime();
            
                if (x < startDate) {
                    return "scheduled";
                } else if (x >= startDate && x <= closeDate) {
                    return "open";
                } else if (x > closeDate) {
                    return "closed";
                }
            }
            
            function checkAndUpdateStatus() {
                // Add your start and end date parameters here
                var startDatumTijd = veiling.StartDatumTijd;
                var endDatumtijd = veiling.EndDatumtijd;
            
                var status = updateVeilingstatus(startDatumTijd, endDatumtijd);
                console.log("Current Status:", status);
            
                // You can adjust the interval (in milliseconds) based on your needs
                var updateInterval = setInterval(function () {
                    status = updateVeilingstatus(startDatumTijd, endDatumtijd);
                    document.getElementById("statusDisplay").innerText = "Current Status: " + status;
                    console.log("Current Status:", status);
                }, 1000); // Update every 1000 milliseconds (1 second)
            
                // Optional: Uncomment the line below if you want to stop the interval after a certain duration
                // setTimeout(() => clearInterval(updateInterval), 10000); // Stop after 10 seconds (adjust as needed)
            }
            
            // Call the necessary functions
            getveilingid();
            checkAndUpdateStatus();
            


function Toevoegen(){
    console.log("Voeg toe")
    var veiling ={}
    var Veilingstuk = {}
    veiling.StartDatumTijd = new Date(document.getElementById("InvoerStartDatum").value);
    veiling.EndDatumtijd = new Date(document.getElementById("InvoerEindDatum").value);
    veiling.OpeningsBod= document.getElementById("InvoerOpeningsbod").value;
    veiling.Veilingstuk=Veilingstuk
        Veilingstuk.StukName= document.getElementById("InvoerStukName").value;
        Veilingstuk.Beschrijving= document.getElementById("InvoerBeschrijving").value;
        Veilingstuk.Categorie= document.getElementById("InvoerCategorie").value;
        Veilingstuk.Aanbieder= document.getElementById("InvoerAanbieder").value;
        Veilingstuk.Gewicht= document.getElementById("InvoerGewicht").value;
        Veilingstuk.Lengte= document.getElementById("InvoerLengte").value;
        Veilingstuk.Width= document.getElementById("InvoerWidth").value;
        Veilingstuk.Hoogte= document.getElementById("InvoerHoogte").value;
        Veilingstuk.Image= document.getElementById("InvoerImage").value;

    veiling.status= updateVeilingstatus(veiling.StartDatumTijd, veiling.EndDatumtijd);
    
           
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






function Countdown()
{
    
// Set the date we're counting down to
var countDownDate =  new Date(document.getElementById("InvoerEindDatum").value);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var chosen = new Date(document.getElementById("InvoerStartDatum").value);

  // Find the distance between now and the count down date
  var distance = countDownDate - chosen;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
};
}, 1000);

}





    