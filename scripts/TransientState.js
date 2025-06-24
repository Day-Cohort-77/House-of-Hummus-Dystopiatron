// TransientState.js
// This module manages the transient state of the food truck application
// It stores the selected entree, vegetable, and side dish IDs
// It provides functions to set, get, and clear this state
// It does not handle any DOM manipulation or rendering
const transientState = {
    entreeId: null,
    vegetableId: null,
    sideId: null
}

export function setEntree(id) {
    transientState.entreeId = id
}

export function setVegetable(id) {
    transientState.vegetableId = id
}

export function setSide(id) {
    transientState.sideId = id
}

export function getTransientState() {
    return transientState
}

export function clearTransientState() {
    transientState.entreeId = null
    transientState.vegetableId = null
    transientState.sideId = null
}