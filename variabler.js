let passord = "Gunnersen45";
let userinput = prompt("Venligst skriv passordet");
if (passord == userinput) {
    alert("Det er riktig passord");
}

else if (userinput == "?lengde") {
    alert(passord.length);
}

else if (userinput == "?1") {
    alert(passord[0]);
}

else if (userinput == "?2") {
    alert(passord[1]);
}

else if (userinput == "?siste") {
    alert(passord[8]);
}

else if (userinput == "?store") {
    alert(passord.toUpperCase());
}

else if (userinput == "?små") {
    alert(passord.toLowerCase());
}

else {
    alert("Det er feil passord");
}
