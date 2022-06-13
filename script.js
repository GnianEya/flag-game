"use strict";

//japan mogolia indonesia philippines china vietnam thailand myanmar southkorea malaysia nepal sirilinka
const imgArray = [
  "japan",
  "mogolia",
  "indonesia",
  "philiphines",
  "china",
  "vietnam",
  "thailand",
  "myanmar",
  "southkorea",
  "malaysia",
  "nepal",
  "sirilinka",
];

var answerKey = Math.floor(Math.random() * 12) + 1;
var secretName = imgArray[answerKey - 1];
console.log(secretName);

var showImg = document.querySelector(".show-img");
showImg.src = `images/country-${answerKey}.png`;

var lifeCount = 5;
var score = 0;
var highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  if (!guess || typeof guess !== "string") {
    document.querySelector(".message").textContent =
      "Please Enter a valid country name";
    document.querySelector(".message").style.color = "yellow";
  } else if (guess == secretName) {
    document.querySelector(".message").textContent = "correct ans";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".message").style.color = "white";
    score++;
    document.querySelector(".score").textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    answerKey = Math.floor(Math.random() * 12) + 1;
    secretName = imgArray[answerKey - 1];
    showImg.src = `images/country-${answerKey}.png`;
  } else if (guess != secretName) {
    if (lifeCount > 0) {
      document.querySelector(".message").textContent = "wrong ans";
      document.querySelector(".message").style.color = "red";
      document.querySelector("body").style.backgroundColor = "#000";
      lifeCount--;
      document.querySelector(`.icon-${lifeCount + 1}`).classList.add("hidden");

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  }
  if (lifeCount == 0) {
    document.querySelector(".message").textContent = "lose the game";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 0;
  answerKey = Math.floor(Math.random() * 12) + 1;
  secretName = imgArray[answerKey - 1];
  showImg.src = `images/country-${answerKey}.png`;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".message").textContent = "start guessing...";
});
