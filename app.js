const numberSearchBar = document.getElementById("numberSearchBar");
const nameSearchBar = document.getElementById("nameSearchBar");
const numberSearch = document.getElementById("numberSearch");
const nameSearch = document.getElementById("nameSearch");

numberSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  let numberInput = numberSearchBar.value;
  if (isNaN(numberInput) || numberInput < 1 || numberInput > 20) {
    document.getElementById("numberError").innerHTML =
      "Please enter numbers 1-20";
  } else {
    let maxNum = 0;
    let pokemonNumbers = document.getElementsByClassName("pokemonNumber");
    let pokemonElements = document.getElementsByClassName("pokemon");

    for (i = 0; i < pokemonNumbers.length; i++) {
      if (!pokemonNumbers[i].innerHTML.includes(numberInput) || maxNum >= 5) {
        pokemonElements[i].style.display = "none";
      } else {
        maxNum += 1;
        pokemonElements[i].style.display = "grid";
      }
    }
  }
});

numberSearchBar.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("numberSearchButton").click();
  }
});

nameSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  var letters = /^[A-Za-z]+$/;
  let messages = [];

  if (!nameSearchBar.value.match(letters)) {
    messages.push("Please only enter characters");
  }

  if (nameSearchBar.value.length >= 20) {
    messages.push("Name must be shorter than 20 letters");
  }

  if (messages.length > 0) {
    document.getElementById("nameError").innerHTML = messages.join(", ");
  } else {
    let nameInput = nameSearchBar.value.toLowerCase();
    let maxNum = 0;
    let pokemonNames = document.getElementsByClassName("pokemonName");
    let pokemonElements = document.getElementsByClassName("pokemon");

    for (i = 0; i < pokemonNames.length; i++) {
      if (
        !pokemonNames[i].innerHTML.toLowerCase().includes(nameInput) ||
        maxNum >= 5
      ) {
        pokemonElements[i].style.display = "none";
      } else {
        maxNum += 1;
        pokemonElements[i].style.display = "grid";
      }
    }
  }
});

nameSearchBar.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("nameSearchButton").click();
  }
});
