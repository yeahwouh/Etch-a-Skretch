const cont = document.querySelector("div")


for(let i=0; i<16; i++) {
    let rowDiv = document.createElement("div")
    // rowDiv.style.width = 100px;
    // rowDiv.style.height = 100px;
    for(let j=0; j<16; j++) {
        let columnDiv = document.createElement("div")
        columnDiv.style.width = "50px";
        columnDiv.style.height = "50px";
        columnDiv.style.backgroundColor = "darkcyan"
        columnDiv.style.borderStyle = "solid"
        columnDiv.style.borderColor = "black"
        columnDiv.setAttribute("id", `${j}:${i}`)
        rowDiv.appendChild(columnDiv)
    }
    cont.appendChild(rowDiv)
}

cont.style.display = "flex"
cont.style.flexDirection = "row"

