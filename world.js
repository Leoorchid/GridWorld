mapDiv = document.getElementById("mapDiv")
reBtn = document.getElementById("reBtn")
warBtn = document.getElementById("warBtn")
numBtn = document.getElementById("numBtn")
noc = 4096
objOfCells = {}
radi = 64

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
        nDiv = document.getElementById("cell" + i)

        nDiv.style.backgroundColor = "#7c6748"
        n = Math.round((i / radi) * 100)
        ns = n.toString()

        if (n <= 100) {

        } else if (n <= 999 && n >= 100) {
            n = n - parseInt(ns.slice(0, 1)) * 100

        } else if (n <= 9999) {
            n = n - parseInt(ns.slice(0, 2)) * 100

        } else if (n <= 99999) {
            n = n - parseInt(ns.slice(0, 3)) * 100
        }

        if (n == 0 && i < (noc / 2)) {
            nDiv.style.backgroundColor = "#696800ff"

        } else if (n <= 0 && i > (noc / 2)) {
            nDiv.style.backgroundColor = "#770000ff"
        } else if (n <= 50 && i < (noc / 2)) {
            nDiv.style.backgroundColor = "#001f61ff"
        } else if (n >= 50 && i < (noc / 2)) {
            nDiv.style.backgroundColor = "#696800ff"
        } else if (n <= 50 && i >= (noc / 2)) {
            nDiv.style.backgroundColor = "#00581bff"
        } else if (n > 50 && i > (noc / 2)) {
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

    async function h() {
        for (t = 1; t <= 3000; t++) {
            await delay(300)
            await nowWait()
            console.log("done")
        }
    }
    h()





}




warBtn.onclick = () => {
    warF()
}

async function nowWait(wait) {
    for (i = 1; i <= noc; i++) {
        console.log(i)
        rng = Math.floor(Math.random() * 5) + 1
        if (objOfCells["cell" + (i - 1)] != null && objOfCells["cell" + i]["color"] != objOfCells["cell" + (i - 1)]["color"] && (i) % radi != 1 && rng == 1) {

            objOfCells["cell" + (i - 1)]["at"].style.backgroundColor = objOfCells["cell" + (i)]["at"].style.backgroundColor
            console.log(objOfCells["cell" + (i)]["at"].style.backgroundColor)
            objOfCells["cell" + (i - 1)]["color"] = objOfCells["cell" + (i)]["color"]
            console.log("l " + (i))


        }
        if (objOfCells["cell" + (i + 1)] != null && objOfCells["cell" + i]["color"] != objOfCells["cell" + (i + 1)]["color"] && (i) % radi != 0 && rng == 1) {

            objOfCells["cell" + (i + 1)]["at"].style.backgroundColor = objOfCells["cell" + (i)]["at"].style.backgroundColor
            console.log(objOfCells["cell" + (i)]["at"].style.backgroundColor)
            objOfCells["cell" + (i + 1)]["color"] = objOfCells["cell" + (i)]["color"]
            console.log("r " + (i))


        }
        if (objOfCells["cell" + (i + radi)] != null && objOfCells["cell" + i]["color"] != objOfCells["cell" + (i + radi)]["color"] && rng == 1) {

            objOfCells["cell" + (i + radi)]["at"].style.backgroundColor = objOfCells["cell" + (i)]["at"].style.backgroundColor
            console.log(objOfCells["cell" + (i)]["at"].style.backgroundColor)
            objOfCells["cell" + (i + radi)]["color"] = objOfCells["cell" + (i)]["color"]
            console.log("u " + (i))


        }
        if (objOfCells["cell" + (i - radi)] != null && objOfCells["cell" + i]["color"] != objOfCells["cell" + (i - radi)]["color"] && rng == 1) {

            objOfCells["cell" + (i - radi)]["at"].style.backgroundColor = objOfCells["cell" + (i)]["at"].style.backgroundColor
            console.log(objOfCells["cell" + (i)]["at"].style.backgroundColor)
            objOfCells["cell" + (i - radi)]["color"] = objOfCells["cell" + (i)]["color"]
            console.log("u " + (i))


        }
        console.log(i)

    }

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

numBtn.onclick = () => {
    for (i = 1; i <= noc; i++) {
        nDiv = document.getElementById("cell" + i)
        nDiv.innerText = i
        nDiv.style.backgroundColor = "#7c6748"
        n = Math.round((i / radi) * 100)
        ns = n.toString()

        if (n <= 100) {

        } else if (n <= 999 && n >= 100) {
            n = n - parseInt(ns.slice(0, 1)) * 100

        } else if (n <= 9999) {
            n = n - parseInt(ns.slice(0, 2)) * 100

        } else if (n <= 99999) {
            n = n - parseInt(ns.slice(0, 3)) * 100
        }

        if (n == 0 && i < (noc / 2)) {
            nDiv.style.backgroundColor = "#696800ff"

        } else if (n <= 0 && i > (noc / 2)) {
            nDiv.style.backgroundColor = "#770000ff"
        } else if (n <= 50 && i < (noc / 2)) {
            nDiv.style.backgroundColor = "#001f61ff"
        } else if (n >= 50 && i < (noc / 2)) {
            nDiv.style.backgroundColor = "#696800ff"
        } else if (n <= 50 && i >= (noc / 2)) {
            nDiv.style.backgroundColor = "#00581bff"
        } else if (n > 50 && i > (noc / 2)) {
            nDiv.style.backgroundColor = "#770000ff"
        }


    }
}