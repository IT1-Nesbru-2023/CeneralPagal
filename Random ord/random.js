let vokal = "AEIOUYÆØÅ";
let konsonant = "BCDFGHJKLMNPQRSTVWXZ";

let antall_bokstaver = 5;

let vok;
let konst;


function randomord() {
    let N = 1
    document.getElementById("samme").innerHTML = "";
    while (N < antall_bokstaver) {
        konst = konsonant[Math.floor(Math.random() * 20)];
        vok = vokal[Math.floor(Math.random() * 9)];
        document.getElementById("samme").innerHTML += konst;
        document.getElementById("samme").innerHTML += vok;

        N++;
    }
}
