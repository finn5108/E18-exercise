// Øvelse 2

console.log("Øvelse 2 / arealTest-2");

// width og height angives i meter (m)

let width = 20;
let height = 10;
let area = 0;

// Area beregnes
area = width * height;

console.log("Arealet er " + area + " kvadratmeter.");


if (area < 100) {
    console.log("Arealet er for lille!");
}
else if (area >= 100 && area < 200) {
    console.log("Arealet er passende.")
}
else {
    console.log("Arealet er for stort!")
}