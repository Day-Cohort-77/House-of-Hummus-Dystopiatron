import { setSides } from "./TransientState.js"
export const sideDishes = async () => {
const response = await fetch("http://localhost:8088/sides");
const sides = await response.json();
const sidesHTML = `
    ${sides.map((side) => {
return `<input type="radio" name="side" value=${side.id} id="side--${side.id}">${side.title} $${side.price}`} ).join(" ")}
`
return sidesHTML
}
const sideSelection = (changeEvent) => {
    if (changeEvent.target.name === "side") {
               setSides(changeEvent.target.value);
    }
}

document.addEventListener("change", sideSelection)
