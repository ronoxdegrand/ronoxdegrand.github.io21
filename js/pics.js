var pic1 = "../img/pic1.jpg";
var pic2 = "../img/pic2.jpg";
var pic3 = "../img/pic3.jpg";
var pic4 = "../img/pic4.jpg";
var pic5 = "../img/pic5.jpg";

function picchange() {
    var elem = document.getElementById("change");
    var pos = elem.src.search("img");
    var str = elem.src.slice(pos);
    str = "../"+str;
    if (str === pic1) {
        elem.src = pic2;
        document.getElementById("nuo").innerHTML = "A Picture of my School graduating Jacket";
    }
    if (str === pic2) {
        elem.src = pic3;
        document.getElementById("nuo").innerHTML = "A Little doodle, definitely not in my ISS notebook";
    }
    if (str === pic3) {
        elem.src = pic4;
        document.getElementById("nuo").innerHTML = "My Bodukan black belt diploma from Malaysia";
    }
    if (str === pic4) {
        elem.src = pic5;
        document.getElementById("nuo").innerHTML = "A Game of Thrones reference I found in an Indigo flight";
    }
    if (str === pic5) {
        elem.src = pic1;
        document.getElementById("nuo").innerHTML = "Clouds above Delhi, shot from my phone";
    }
}