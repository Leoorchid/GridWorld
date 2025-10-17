mapDiv = document.getElementById("mapDiv")
reBtn = document.getElementById("reBtn")
warBtn = document.getElementById("warBtn")
numBtn = document.getElementById("numBtn")
noc = 1024
objOfCells = {}

function redo() {

    if (mapDiv.childElementCount < noc) {
        for (i = 1; i <= noc; i++) {
            const newDiv = document.createElement("div")
            rng = Math.floor(Math.random() * 2)
            rng == 0 ? newDiv.style.backgroundColor = "black" : newDiv.style.backgroundColor = "#7c6748"
            newDiv.id = `cell${i}`
            newDiv.className = "cell"
            mapDiv.appendChild(newDiv)

        }
    } else {
        for (i = 1; i <= noc; i++) {
            let holdingDiv = document.getElementById(`cell${i}`)
            rng = Math.floor(Math.random() * 2)
            rng == 0 ? holdingDiv.style.backgroundColor = "black" : holdingDiv.style.backgroundColor = "#7c6748"


        }


    }
}

redo()
reBtn.onclick = () => {
    redo()
}

function warF() {
    for (i = 1; i <= noc; i++) {
        const newDiv = document.createElement("div")
        if (i = i) {

        }
    }
}

function numF() {
    for (i = 1; i <= noc; i++) {
        nDiv = document.getElementById("cell" + i)
        nDiv.innerText = i
        nDiv.style.backgroundColor = "#7c6748"
        n = Math.round((i / 32) * 100)
        ns = n.toString()

        if (n <= 100) {

        } else if (n <= 999 && n >= 100) {
            n = n - parseInt(ns.slice(0, 1)) * 100

        } else if (n <= 9999) {
            n = n - parseInt(ns.slice(0, 2)) * 100

        }

        if (n == 0 && i < 513) {
            nDiv.style.backgroundColor = "#696800ff"

        } else if (n <= 0 && i > 513) {
            nDiv.style.backgroundColor = "#770000ff"
        } else if (n <= 50 && i < 513) {
            nDiv.style.backgroundColor = "#001f61ff"
        } else if (n >= 50 && i < 513) {
            nDiv.style.backgroundColor = "#696800ff"
        } else if (n <= 50 && i >= 513) {
            nDiv.style.backgroundColor = "#00581bff"
        } else if (n >= 50 && i > 513) {
            nDiv.style.backgroundColor = "#770000ff"
        }


    }

    for (i = 1; i <= noc; i++) {
        nDiv = document.getElementById(`cell${i}`)
        objOfCells[nDiv.id] = {
            "at": nDiv,
            "color": nDiv.style.backgroundColor,
            "target": ""
        }
    }
    console.log(objOfCells)

    for (i = 1; i <= 20; i++) {


        for (i = 1; i <= noc; i++) {
            if (objOfCells["cell" + (i - 1)] != null && objOfCells["cell" + i]["color"] != objOfCells["cell" + (i - 1)]["color"] && (i) % 32 != 1) {

                objOfCells["cell" + (i - 1)]["at"].style.backgroundColor = objOfCells["cell" + (i)]["at"].style.backgroundColor
                objOfCells["cell" + (i - 1)]["color"] = objOfCells["cell" + (i)]["color"]
                console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuu " + i)



            } else {
                console.log("no " + i)
            }

        }


    }


}

numBtn.onclick = () => {
    numF()
}