// Øvelse 6

console.log("Øvelse 6");


let length;
let width;
let area;

function arealBeregning(length, width) {
    
    if (isNaN(length) || isNaN(width)){
        let fault = "Kan ikke beregne";
        return fault;
    } else {
        area = length * width;
        return area;
    }
}

// Return: fault
console.log(arealBeregning(4,"t"));

// Return: 16
console.log(arealBeregning(4,4));

