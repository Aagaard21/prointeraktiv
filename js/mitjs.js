//Ur

function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("ur").innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
}


function checkTime(i){
    if (i < 10) {i="0"+i;}
    return i;
}
startTime();
//ur Slut


//dato
function dato(){
    var today = new Date();
    y = today.getFullYear();
    m = today.getMonth()+1;
    d = today.getDate();
    
    document.getElementById("dato").innerHTML = d + "-" + m + "-" + y;
    

}

dato();





