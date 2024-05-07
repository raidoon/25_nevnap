
function kereses(){
    var bekeromezo = document.getElementById("bekeromezo").value
    fetch(`https://api.nevnapok.eu/nev/${bekeromezo}`)
    .then(x => x.json())
    .then(y => megjelenites(y,bekeromezo))
}

function kereses2(){
    var bekero2 = document.getElementById("masodikBekero").value
    fetch(`https://api.nevnapok.eu/nap/${bekero2}`)
    .then(x => x.json())
    .then(y => megjelenites2(y,bekero2))
}

function megjelenites(y,bekeromezo){
    console.log(y)
    var oszlopEgy = document.getElementById("elsoOszlop")
    //div.setAttribute("id","keret")
    //-------------ul----------
    var ul = document.createElement("ul")
    //-------------li----------
    for(const elem of y[bekeromezo]) {
        var li = document.createElement("li")
        li.innerHTML=elem
        ul.appendChild(li)
    }
    oszlopEgy.appendChild(ul)
}

function megjelenites2(y,bekero2){
    console.log(y)
    var oszlopKetto = document.getElementById("masodikOszlop")
    var ul = document.createElement("ul")
    //---------------------------------------
    for(const elem of y[bekero2]) {
        var li = document.createElement("li")
        li.innerHTML=elem
        ul.appendChild(li)
    }
    oszlopKetto.appendChild(ul)
}
