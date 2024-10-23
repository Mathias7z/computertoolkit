function helloWorld(){
    var b = document.getElementById("hello").innerHTML === "Dit is een test!";

    if (b){
        document.getElementById("hello").innerHTML = "Hello world!";
    }
    else{
        document.getElementById("hello").innerHTML = "Dit is een test!";
    }
}

function darkLight(){
    var element = document.body;
    var tijd = (new Date()).getHours();

    if (tijd < 20){
        element.classList.toggle("light-mode");
    }
    else{
        element.classList.toggle("dark-mode");
    }
}
function kleurInvert(){
    document.getElementById("HW").style.filter = "invert(1)";
}
function kleurNormaal(){
    document.getElementById("HW").style.filter = "invert(0)";
}
function saveInputPrintOutput(){
    var n = document.getElementById("naam").value;
    var p = document.getElementById("pword").value;
    document.getElementById("output").innerHTML = "Naam: " + n + "Wachtwoord: " + p;
}
function forLoop(){
    var som = 0;
    var getal = document.getElementById("n").value;
    for ( i= 0; i <= getal; i++){
        som += i;
    }
    document.getElementById("outputSom").innerHTML = som;
}
function datum(){
    var datum = new Date();
    var vandaag = datum.getDate() + "/" + (datum.getMonth()+1) + "/" + datum.getFullYear();
    document.getElementById("vandaag").innerHTML = vandaag;
}