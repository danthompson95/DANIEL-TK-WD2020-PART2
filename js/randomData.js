let numberArray = [];

for (let i = 1; i < 10000; ++i) {
  numberArray.push(i);
}

window.setInterval(function () {
  if (numberArray.length > 3) {
    let firstNumber = randomXToY();
    let secondNumber = randomXToY();
    let thirdNumber = randomXToY();

    getData(firstNumber, "math");
    getData(secondNumber, "trivia");
    getData(thirdNumber, "date");
  } else {
    alert("Numbers all gone!");
  }
}, 5000);

function getData(number, field) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (field == "math") {
        document.getElementById("mathFact").innerHTML = this.responseText;
      }
      if (field == "date") {
        document.getElementById("dateFact").innerHTML = this.responseText;
      }
      if (field == "trivia") {
        document.getElementById("triviaFact").innerHTML = this.responseText;
      }
    }
  };
  xhttp.open("GET", "http://numbersapi.com/" + number + "/" + field, true);
  xhttp.send();
}

function randomXToY() {
  let randomItem = numberArray[Math.floor(Math.random() * numberArray.length)];
  removeElement(numberArray, randomItem);

  return randomItem;
}

function removeElement(array, item) {
  let index = array.indexOf(item);

  if (index > -1) {
    array.splice(index, 1);
  }
}
