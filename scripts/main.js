import { KneelDiamonds } from "./KneelDiamonds.js"

//creates a "portal" to index html so that everything in container is displayed in the dom
const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})