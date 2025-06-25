const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntree = (chosenEntree) => {
    transientState.entreeId = parseInt(chosenEntree);
}

export const setVegetable = (chosenVegetable) => {
    transientState.vegetableId = parseInt(chosenVegetable);
}

export const setSides = (chosenSide) => {
    transientState.sideId = parseInt(chosenSide);  
}

export const purchaseFunction = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    // Dispatch a custom event when the submission is complete
    const newSubmissionEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newSubmissionEvent)// Notifies "newOrderCreated" listener of the application that a new order has been created.
}
