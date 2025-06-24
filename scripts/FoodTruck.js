import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"

export async function FoodTruck() {
    const entreesHTML = await Entrees()
    const veggiesHTML = await Veggies()
    const sidesHTML = await Sides()
    const salesHTML = await Sales()

    let html = `
     <div class="header-flex">   <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Dysto's House of Hummus</h1>
            <h1 class="subtitle">NUKE Yer Insides!!</h1>
            <h2 class="subtitle">Choose Your Combo</h2>
            <h3 class="subtitle">Entree, Vegetable, and Side</h3>
        </header></div>
        <section class="choices">
            ${entreesHTML}
            ${veggiesHTML}
            ${sidesHTML}
        </section>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `
    return html
}