import { mainEntrees } from "./Entrees.js"
import { sideDishes } from "./SideDishes.js"
import { veggies } from "./Vegetables.js"
import { PurchaseButton } from "./orderButton.js"
import {Sales} from "./Sales.js"

export const FoodTruck =  async () => {
    const entreeHTML = await mainEntrees()
    const sidesHTML = await sideDishes()
    const veggieHTML = await veggies()
    const PurchaseButtonHTML = await PurchaseButton()
    const salesHTML =  await Sales()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">House of Hummus</h1>
        </header>
<article class="main">
            <h2>Entrees</h2>
            ${entreeHTML}
            <h2>Sides</h2>
            ${sidesHTML}
            <h2>Veggies</h2>
            ${veggieHTML}
        <article>
            ${PurchaseButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
          ${salesHTML}
        </article>

    `
}
