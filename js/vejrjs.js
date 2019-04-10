function hentData(url, callback_Funktion) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback_Funktion(this);
        }
    };
}
//Funktion som tager jsonData og en liste af id'er og liste numrer, som man skal bruge i json data. 
function visData(jsonData) {  
    for (var i = 0; i < idliste.length; i++){
    
    var jsonElementer = JSON.parse(jsonData.responseText);
    var divIndhold = "";
    divIndhold += '<p>' +
        jsonElementer.list[vejrliste[i]].main.temp + '°C' + '<br>'+jsonElementer.list[vejrliste[i]].dt_txt + '</p>';
        
    if (jsonElementer.list[vejrliste[i]].weather[0].main === "Clear"){
        divIndhold = divIndhold + '<img src="/images/1x/sol.png" alt="'+jsonElementer.list[vejrliste[i]].weather[0].description + '">';
    }   else{
        divIndhold = divIndhold + '<img src="/images/1x/sky2.png" alt="'+jsonElementer.list[vejrliste[i]].weather[0].description + '">';
    }
    

    document.getElementById(idliste[i]).innerHTML = divIndhold;  
    
    }
}
//Vejrliste er de nr i listen som vi skal bruge for at få det samme tidspunkt hverdag. 
var vejrliste = [7, 15, 23, 31, 39];
var idliste = ["dag1", "dag2", "dag3", "dag4", "dag5"];

hentData("http://api.openweathermap.org/data/2.5/forecast?q=aarhus,dk&APPID=9fab19a023a8349aaf48f73bcfc0c51f&units=metric", visData);