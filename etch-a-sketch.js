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

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.style.width = `${960 / size}px`;
    square.style.height = `${960 / size}px`;

    square.addEventListener("mouseenter", function (e) {
      let interactions = e.target.dataset.interactions || 0;
      interactions = Number(interactions);

      const brightness = 100 - interactions * 10;

      e.target.style.backgroundColor = getRandomColor();
      e.target.style.filter = `brightness(${brightness}%)`;

      if (interactions < 10) {
        e.target.dataset.interactions = interactions + 1;
      }
    });

    container.appendChild(square);
  }
}

createGrid(16);
