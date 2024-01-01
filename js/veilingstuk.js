function toonVeilingStukken(){
    console.log("toonVeilingStukken");
    document.getElementById("veilingstukkenlijst").innerHTML = "hoi";
    fetch("https://localhost:7252/api/veilingstuk")
//				fetch("http://20.8.8.232/api/veilingstuk")
    .then(r => r.json() )
    .then( d => toonStukkenInDom(d) )
}

function toonStukkenInDom(data){
    let dataString = ``
    for(let x = 0 ;x < data.length;x++){
        if(x % 4 == 0){
            dataString += `<div class="row">`
        }
        //dataString += `<div class="datastukdiv">${data[x].stukName} - ${data[x].aanbieder} - ${data[x].categorie} - ${data[x].beschrijving}</div>`
        dataString += `
        <div  class="col-sm-3" >
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="images/${data[x].image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${data[x].stukName}</h5>
            <p class="card-text">${data[x].beschrijving}</p>
            <a href="#" class="btn btn-primary">${data[x].aanbieder}</a>
        </div>
        </div>
        </div>
        `
        if(x % 4 == 3 || x == data.length - 1){
            dataString += `</div>`
        }
        document.getElementById("veilingstukkenlijst").innerHTML = dataString;
    }

}