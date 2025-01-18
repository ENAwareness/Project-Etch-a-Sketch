const container = document.getElementById("container");
const btnChangeGrid = document.getElementById("btn-change-grid");

btnChangeGrid.addEventListener("click", function () {
  let size = prompt("Input the number of squares per side");
  if (Number(size) <= 100) {
    createGrid(Number(size));
  } else {
    alert("Please enter a number less than or equal to 100");
  }
});

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.style.width = `${960/size}px`;
    square.style.height = `${960/size}px`;

    square.addEventListener("mouseenter", function (e) {
      e.target.classList.add("hover");
    });

    container.appendChild(square);
  }
}

createGrid(16);