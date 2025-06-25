import {setEntree} from "./TransientState.js";

export const mainEntrees = async () => {
 const response = await fetch("http://localhost:8088/entrees");
 const entrees = await response.json();

 const entreeHTML = `
    ${entrees.map((entree) => {
return `<input type="radio" name="entree" value=${entree.id} id="entree--${entree.id}">${entree.name} $${entree.price}`} ).join(" ")}
`
return entreeHTML
}
const entreeSelection = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
          setEntree(changeEvent.target.value);
    }
}

document.addEventListener("change", entreeSelection)