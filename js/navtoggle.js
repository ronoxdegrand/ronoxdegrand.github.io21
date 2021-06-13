function toggle() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " open";
    } else {
        x.className = "topnav";
    }
}