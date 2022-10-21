const cols = document.querySelectorAll(".col")

function setColor() {
    cols.forEach(col => {
        const hexColor = getRandomColor()
        col.style.backgroundColor = hexColor
        col.querySelector("h2").textContent = hexColor
    })
}

function getRandomColor(){
    const numbers = "0123456789ABCDEF"
    let hexColor = ""
    for(let i = 0; i < 6; i++){
        hexColor += numbers[Math.floor(Math.random() * numbers.length)]
    }
    return "#" + hexColor
}

setColor()