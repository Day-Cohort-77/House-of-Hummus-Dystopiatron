import { FoodTruck } from "./FoodTruck.js"
import { setEntree, setVegetable, setSide, getTransientState, clearTransientState } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

async function renderAllHTML() {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

document.addEventListener("change", function(event) {
    if (event.target.name === "entree") {
        setEntree(parseInt(event.target.value))
    }
    if (event.target.name === "vegetable") {
        setVegetable(parseInt(event.target.value))
    }
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value))
    }
})

document.addEventListener("click", async function(event) {
    if (event.target.id === "purchase") {
        const state = getTransientState()
        if (state.entreeId && state.vegetableId && state.sideId) {
            await fetch("http://localhost:8088/purchases", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    entreeId: state.entreeId,
                    vegetableId: state.vegetableId,
                    sideId: state.sideId
                })//this
            })
            clearTransientState()
            renderAllHTML()
        }
    }
})