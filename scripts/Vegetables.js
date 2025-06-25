import { setVegetable } from "./TransientState.js";

export const veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables");
    const vegetables = await response.json();
 const veggiesHTML = `
    ${vegetables.map((vegetable) => {
return `<input type="radio" name="veggie" value=${vegetable.id} id="veggie--${vegetable.id}">${vegetable.type} $${vegetable.price}`} ).join(" ")}
`
return veggiesHTML
}


const vegetableSelection = (changeEvent) => {
    if (changeEvent.target.name === "veggie") {
         setVegetable(changeEvent.target.value);
    }
}

document.addEventListener("change", vegetableSelection)