document.querySelector(".btn").onclick = function () {
  myFunction();
};

function myFunction() {
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "./images/dice" + player1 + ".png"
    );

  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "./images/dice" + player2 + ".png"
    );

  if (player1 === player2) {
    document.getElementById("heading").innerHTML = "Draw";
  } else if (player1 > player2) {
    document.getElementById("heading").innerHTML =
      "Player 1 win 🏆";
  } else {
    document.getElementById("heading").innerHTML =
      "Player 2 win 🏆";
  }
}
