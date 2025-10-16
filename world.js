mapDiv = document.getElementById("mapDiv")


for (i = 1; i <= 100; i++) {
    const newDiv = document.createElement("div")
    newDiv.innerText = i
    newDiv.className = "cell"
    mapDiv.appendChild(newDiv)

}