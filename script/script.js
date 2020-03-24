(function () {
    const title = document.getElementById('title')
    const outside = document.getElementById('outsideModal')
    const leftUpperCorner = document.getElementById('first_cuadre')
    const upperMedium = document.getElementById('second_cuadre')
    const RightUpperCorner = document.getElementById('three_cuadre')
    const rightMedium = document.getElementById('fourth_cuadre')
    const medium = document.getElementById('fifth_cuadre')
    const leftMedium = document.getElementById('sixth_cuadre')
    const lowerRightCorner = document.getElementById('seventh_cuadre')
    const lowMedium = document.getElementById('eighth_cuadre')
    const lowerLeftCorner = document.getElementById('nineth_cuadre')
    let valorX = true

    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    const arrayX = [];
    const arrayO = [];
  

    function click(element) {
        element.addEventListener('click', function () {
            const indexString = element.dataset.index
            const index = parseInt(indexString)
            if (arrayX.includes(index)) {
                return; // we stop the script as nothing should be added to it
            } else if(arrayO.includes(index)) {
                return; // we stop the script as nothing should be added to it
            }
            
            if (valorX) {
                title.innerHTML = `Turno del jugador O`
                event.target.innerHTML = `<img class="image_edit" src="./image/cross.png" alt="">`
                valorX = false
                arrayX.push(index)
                validator(arrayX)
            } else {
                title.innerHTML = `Turno del jugador X`
                event.target.innerHTML = `<img class="image_edit" src="./image/circle.png" alt="">`
                valorX = true
                arrayO.push(index)
                validator(arrayO)
            }
        })
    }


    click(leftUpperCorner)
    click(upperMedium)
    click(RightUpperCorner)
    click(rightMedium)
    click(medium)
    click(leftMedium)
    click(lowerRightCorner)
    click(lowMedium)
    click(lowerLeftCorner)



    function validator(selectedIndexes) {
        for (let i = 0; i < winningCombinations.length; i++) {
            const winningCombination = winningCombinations[i];

            if (selectedIndexes.includes(winningCombination[0]) && selectedIndexes.includes(winningCombination[1]) && selectedIndexes.includes(winningCombination[2])) {
                outsideModal.style.display = "flex"
            } 
        }
    }


})()