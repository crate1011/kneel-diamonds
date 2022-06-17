import { getSizes, setSize} from "./database.js"

const sizes = getSizes()

//event listener that "hears" when something with the name of "size" gets clicked on and is changed
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

//create a function that stores and returns a string of html elements
//should display sizeId and size.carets
//function should use map instead of a for loop to iterate through sizes
export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

