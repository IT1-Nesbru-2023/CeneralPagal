function oppdaterVisittkort() {
    // Hent verdier fra input-feltene
    var bedriftsnavn = document.getElementById("Bedriftsnavn").value;
    var navn = document.getElementById("Navn").value;
    var stilling = document.getElementById("Stilling").value;
    var fodselsdato = document.getElementById("Fødselsdato").value;
    var adresse = document.getElementById("Adresset").value;
    var farge = document.getElementById("Color").value;

    // Oppdater visittkortets innhold og farge
    var visittkort = document.getElementById("visittkort");
    visittkort.style.backgroundColor = farge;

    document.getElementById("bedriftsnavn").innerText = bedriftsnavn;
    document.getElementById("navn").innerText = navn;
    document.getElementById("stilling").innerText = stilling;
    document.getElementById("fodselsdato").innerText = fodselsdato;
    document.getElementById("adresse").innerText = adresse;
}