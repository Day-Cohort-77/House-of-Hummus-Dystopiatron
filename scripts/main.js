import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}
document.addEventListener("newOrderCreated", renderAllHTML)//listening for "newOrderCreated" to Re-render the HTML when a new order is created.
renderAllHTML()

