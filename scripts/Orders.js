import { getOrders, getMetals, getStyles, getSizes } from "./database.js"
const orders = getOrders()
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

//function that goes through and finds if the elements id is equal to the orders id of that element
//then calculates the total price of elements
//returns html element of order.id and costString variable
const buildOrderListItem = (order) => {
    const foundMetal = metals.find((metal) => {
        return metal.id === order.metalId
    }
    )

    const foundSize = sizes.find((size) => {
        return size.id === order.sizeId
    }
    )

    const foundStyle = styles.find((style) => {
        return style.id === order.styleId
    }
    )

    const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

