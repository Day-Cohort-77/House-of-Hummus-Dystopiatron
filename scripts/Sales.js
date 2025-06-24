// This function gets all purchases and menu items, then shows receipts with totals using map()
export async function Sales() {
    const purchasesResponse = await fetch("http://localhost:8088/purchases")
    const purchases = await purchasesResponse.json()

    const entreesResponse = await fetch("http://localhost:8088/entrees")
    const entrees = await entreesResponse.json()

    const veggiesResponse = await fetch("http://localhost:8088/vegetables")
    const veggies = await veggiesResponse.json()

    const sidesResponse = await fetch("http://localhost:8088/sides")
    const sides = await sidesResponse.json()

    let monthlyTotal = 0
    const receipts = purchases.map(purchase => {
        const entree = entrees.find(e => e.id === purchase.entreeId)
        const veggie = veggies.find(v => v.id === purchase.vegetableId)
        const side = sides.find(s => s.id === purchase.sideId)
// This finds the corresponding menu items for each purchase
// and calculates the total for that purchase
        let total = 0
        if (entree) total += entree.price
        if (veggie) total += veggie.price
        if (side) total += side.price
// This adds the prices of the entree, vegetable, and side to get the total for this purchase
        monthlyTotal += total
// This adds the total of this purchase to the monthly total
        return `Receipt #${purchase.id} = $${total.toFixed(2)}<br>`
    })
// This formats the total for each purchase to two decimal places for better readability
// and returns the HTML for each receipt
    receipts.push(`<strong>Monthly Total = $${monthlyTotal.toFixed(2)}</strong>`)

    return receipts.join("")
}// This function fetches all purchases and menu items, then shows receipts with totals using map()



// This function fetches all purchases and menu items, then returns HTML for receipts with totals
//how it works:
// 1. Fetches purchases, entrees, veggies, and sides from the API.
// 2. Uses map to create an array of receipt HTML.
// 3. Calculates the total for each receipt and the monthly total.
// 4. Returns the HTML string with all receipts and the monthly total.
// It uses find to match purchases with their corresponding menu items.
// It also uses toFixed(2) to format the total amounts to two decimal places for better readability.
// 