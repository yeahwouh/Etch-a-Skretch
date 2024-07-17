const cont = document.querySelector("div")

const btn = document.createElement("button")
btn.textContent = "REFRESH"
btn.style.display = "block"

cont.appendChild(btn)

btn.style.margin = '0 auto 20px'

const div = document.createElement("div")

cont.appendChild(div)

for(let i=0; i<16; i++) {
    let columnDiv = document.createElement("div")
    for(let j=0; j<16; j++) {
        let rowDiv = document.createElement("div")
        rowDiv.style.width = "50px";
        rowDiv.style.height = "50px";
        rowDiv.style.backgroundColor = "darkcyan"
        rowDiv.style.borderStyle = "solid"
        rowDiv.style.borderColor = "black"
        rowDiv.setAttribute("id", `${j}:${i}`)
        rowDiv.setAttribute("class", "subdiv")
        columnDiv.appendChild(rowDiv)
    }
    div.appendChild(columnDiv)

}
div.style.display = "flex"

div.style.flexDirection = "row"
document.querySelectorAll('.subdiv').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = "#eec0c8"
    })

})

