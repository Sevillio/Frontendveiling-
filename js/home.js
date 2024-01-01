function homeveiling(){
    fetch("https://localhost:7252/api/Veiling")
    .then (r => r.json())
    .then (d => verwerkencsharp(d))
}
function homeveilingstuk(){
    fetch("https://localhost:7252/api/Veilingstuk")
    .then (r => r.json())
    .then (d => verwerkencsharp(d))
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
                
            }
            eindString +="</table>"
            document.getElementById("csharpuitkomst").innerHTML = eindString;

        }
        
    }
    xhr.open("Get","https://localhost:7252/api/Veiling", true);
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

document.addEventListener('DOMContentLoaded', function () {
    ToonVeiling();
    ToonVeilingstuk();
});
