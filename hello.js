const cont = document.querySelector("div")

const btn = document.createElement("button")
btn.textContent = "REFRESH"
btn.style.display = "block"

btn.style.margin = '0 auto 20px'

cont.appendChild(btn)
const createGrid = function(val){

    div = document.createElement("div")
    cont.appendChild(div)
    div.style.width = "960px"
    div.style.height = "960px"

    for(let i=0; i<val; i++) {

        let columnDiv = document.createElement("div")
        for(let j= 0; j<val; j++) {
            let rowDiv = document.createElement("div")
            rowDiv.style.width = `${960/val}px`
            rowDiv.style.height = `${960/val}px`
            rowDiv.style.backgroundColor = "darkcyan"
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
}
createGrid(16)

btn.addEventListener("click", () =>{
    let val = prompt("How much boxes per side do you want?")
    console.log(val)
    if(val>100){
        val = 100
    }
    div.remove()
    createGrid(val)
})
