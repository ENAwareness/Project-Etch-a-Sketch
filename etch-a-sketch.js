const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList = "grid-square";
  container.appendChild(square);
}

