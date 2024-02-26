var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var systemMessageDisplay = document.querySelector("#default-code");
var userMessageDisplay = document.querySelector("#user-code");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var header = document.querySelector("#header");

var colors = generateRandomColors(numSquares);
pickedColor = pickColor();

// Reset Game...
resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  systemMessageDisplay.innerHTML = pickedColor;
  header.style.backgroundColor = "steelblue";
  userMessageDisplay.innerHTML = "";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

systemMessageDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // Appliquer la couleur de fond à tous les carrés
  squares[i].style.backgroundColor = colors[i];

  // Activer l'événement de clic sur chaque carré
  squares[i].addEventListener("click", function () {
    // Afficher à l'utilisateur la couleur actuelle
    userMessageDisplay.innerHTML = this.style.backgroundColor;

    // Si l'utilisateur a sélectionné la bonne couleur
    var clickedColor = this.style.backgroundColor;

    // Vérifier si la couleur sélectionnée correspond à la couleur choisie
    if (pickedColor === clickedColor) {
      header.style.backgroundColor = pickedColor;
      changeColors(pickedColor);
    }
    // Si l'utilisateur a sélectionné la mauvaise couleur
    else {
      this.style.backgroundColor = "#232323";
      userMessageDisplay.innerHTML = "Mauvais choix!";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  console.log("pickColor");
  return colors[random];
}

function randomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColors());
  }
  return arr;
}
