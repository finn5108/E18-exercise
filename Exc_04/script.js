// Øvelse 4

console.log("Øvelse 4");


let firstName = "";
let surName = "";

firstName = prompt("Indtast dit fornavn");
surName = prompt("Indtast dit efternavn");


if (firstName != null && firstName != "" && surName != null && surName != "") {
    alert("Goddag " + firstName + " " + surName);
}
else if (firstName != null && firstName != "") {
    alert("Goddag " + firstName);
}
else if (surName != null && surName != "") {
    alert("Goddag " + surName);
} else {
    alert("Goddag min ven")
}
