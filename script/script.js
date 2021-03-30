(function () {
  const title = document.getElementById("title");
  const resetButton = document.getElementById("restart");
  const leftUpperCorner = document.getElementById("first_cuadre");
  const upperMedium = document.getElementById("second_cuadre");
  const RightUpperCorner = document.getElementById("three_cuadre");
  const rightMedium = document.getElementById("fourth_cuadre");
  const medium = document.getElementById("fifth_cuadre");
  const leftMedium = document.getElementById("sixth_cuadre");
  const lowerRightCorner = document.getElementById("seventh_cuadre");
  const lowMedium = document.getElementById("eighth_cuadre");
  const lowerLeftCorner = document.getElementById("nineth_cuadre");
  let valorX = true;

  const winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [4, 1, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let arrayX = [];
  let arrayO = [];

  function click(element) {
    element.addEventListener("click", (event) => {
      const index = parseInt(element.dataset.index);
      if (arrayX.includes(index)) {
        console.log("is exist");
        return; // we stop the script as nothing should be added to it
      } else if (arrayO.includes(index)) {
        return; // we stop the script as nothing should be added to it
      }

      if (valorX) {
        title.innerHTML = `Turno del jugador O`;
        console.log(event.target);
        event.target.innerHTML = `<img class="image_edit" src="./image/cross.png" alt="">`;
        valorX = false;
        arrayX.push(index);
        validator(arrayX);
      } else {
        title.innerHTML = `Turno del jugador X`;
        event.target.innerHTML = `<img class="image_edit" src="./image/circle.png" alt="">`;
        valorX = true;
        arrayO.push(index);
        console.log(arrayO);
        validator(arrayO);
      }
    });
  }

  click(leftUpperCorner);
  click(upperMedium);
  click(RightUpperCorner);
  click(rightMedium);
  click(medium);
  click(leftMedium);
  click(lowerRightCorner);
  click(lowMedium);
  click(lowerLeftCorner);

  function validator(selectedIndexes) {
    winningCombinations.forEach((winningCombination) => {
      if (
        selectedIndexes.includes(winningCombination[0]) &&
        selectedIndexes.includes(winningCombination[1]) &&
        selectedIndexes.includes(winningCombination[2])
      ) {
        outsideModal.style.display = "flex";
      }
    });
  }

  resetButton.addEventListener("click", (event) => {
    reset();
  });

  function reset() {
    valorX = true;
    arrayO = [];
    arrayX = [];
    const cuadres = document.getElementsByClassName("cuadre");
    const cuadresArray = Array.from(cuadres);
    cuadresArray.forEach((cuadre) => {
      cuadre.innerHTML = ``;
    });
  }
})();
