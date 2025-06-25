import { purchaseFunction } from "./TransientState.js";

const handlePurchaseButton = async (changeEvent) => {
    if (changeEvent.target.id === "purchase") {
        await purchaseFunction(changeEvent.target.value)
    }
}
export const PurchaseButton = () => {

    document.addEventListener("click", handlePurchaseButton)
    return `
   
 <article>
            <button id="purchase">Purchase Combo</button>
        </article>

    `
}