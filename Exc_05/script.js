// Øvelse 5

console.log("Øvelse 5");


let length = 0;
let width = 0;
let area = 0;
let reload;

length = prompt("Indtast længde i meter");
width = prompt("Indtast bredde i meter");

area = length * width;

if (isNaN(length) || length == null || isNaN(width) || width == null) {
    alert("Kan ikke beregne arealet");
} else {
    alert("Længden er: " + length + " meter. \n" + "Bredden er: " + width + " meter. \n" + "Arealet er: " + area + " kvadratmeter.");
}

reload = confirm("Vil du starte forfra?");

if (reload) {
    location.reload();
} else {
    alert("Farvel og tak.");
}