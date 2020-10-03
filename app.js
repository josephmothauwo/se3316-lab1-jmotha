// lab2
// getting form elements and number or letter input
const numberSearchBar = document.getElementById("numberSearchBar");
const nameSearchBar = document.getElementById("nameSearchBar");
const numberSearch = document.getElementById("numberSearch");
const nameSearch = document.getElementById("nameSearch");
// hardcoding the pokemon information into arrays
names = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
];
type = [
  "Grass / Poison",
  "Grass / Poison",
  "Grass / Poison",
  "Fire",
  "Fire",
  "Fire / Flying",
  "Water",
  "Water",
  "Water",
  "Bug",
  "Bug",
  "Bug / Flying",
  "Bug / Poison",
  "Bug / Poison",
  "Bug / Poison",
  "Normal / Flying",
  "Normal / Flying",
  "Normal / Flying",
  "Normal",
  "Normal",
];
move = [
  "Tackle",
  "Razor Leaf",
  "Razor Leaf",
  "Ember",
  "Ember",
  "Fire Spin",
  "Tackle",
  "Bite",
  "Bite",
  "Tackle",
  "Tackle",
  "Struggle Bug",
  "Bug Bite",
  "Bug Bite",
  "Infestation",
  "Tackle",
  "Wing Attack",
  "Air Slash",
  "Tackle",
  "Bite",
];

let resultsContainer = document.createElement("div");
resultsContainer.setAttribute("class", "resultsConainer");
const headerContainer = document.querySelector(".container");
headerContainer.appendChild(resultsContainer);

let newList = document.createElement("ul");
newList.setAttribute("class", "searchedList");
resultsContainer.hidden = true;

resultsContainer.appendChild(newList);
let searchResults = [];
numberSearch.addEventListener("keyup", (e) => {
  e.preventDefault();
  let numberInput = numberSearchBar.value;
  // number validation
  if (
    (isNaN(numberInput) || numberInput < 1 || numberInput > 20) &&
    numberInput.length > 0
  ) {
    alert("Please enter numbers 1-20");
  }
  if (numberInput.length == 0) {
    resultsContainer.hidden = true;
  }
  // else if (numberInput.length == 0) {}
  else {
    // appending pokemon that match search results into an array
    for (i = 0; i < searchResults.length; i++) {
      newList.removeChild(searchResults[i]);
    }
    searchResults = [];
    var pictures = document.querySelectorAll(".picture");
    if (numberInput.length > 0) {
      for (i = 0; i < names.length; i++) {
        numberOutput = "";
        if ((i + 1).toString().includes(numberInput)) {
          resultsContainer.hidden = false;
          numberOutput +=
            "Name: " +
            names[i] +
            ", Number: " +
            (i + 1).toString() +
            ", Type: " +
            type[i] +
            ", Move: " +
            move[i];

          let node = document.createTextNode(numberOutput);
          let img = document.createElement("IMG");
          img.setAttribute("src", pictures[i].src);
          img.setAttribute("class", "imgResults");
          let newLi = document.createElement("li");
          newLi.setAttribute("class", "searchResult");
          newLi.appendChild(img);
          newLi.appendChild(node);
          searchResults.push(newLi);
          newList.appendChild(newLi);
        }
      }
    }
  }
});

// linking enter to search button
numberSearchBar.addEventListener("keyup", function (event) {
  if (event.key === 13) {
    event.preventDefault();
    document.getElementById("numberSearchButton").click();
  }
});

nameSearch.addEventListener("keyup", (e) => {
  e.preventDefault();
  var letters = /^[A-Za-z]+$/;
  let messages = [];
  let nameInput = nameSearchBar.value.toLowerCase();
  // letter and length validation
  if (!nameInput.match(letters) && nameInput.length > 0) {
    messages.push("Please only enter characters");
  }

  if (nameInput.length > 20) {
    messages.push("Name must be shorter than 21 characters");
  }

  if (messages.length > 0) {
    alert(messages.join(", "));
  }

  if (nameInput.length == 0) {
    resultsContainer.hidden = true;
  } else {
    // appending pokemon that match search results into an array
    for (i = 0; i < searchResults.length; i++) {
      newList.removeChild(searchResults[i]);
    }
    searchResults = [];
    var pictures = document.querySelectorAll(".picture");
    if (nameInput.length > 0) {
      for (i = 0; i < names.length; i++) {
        nameOutput = "";
        if (names[i].toLowerCase().includes(nameInput)) {
          resultsContainer.hidden = false;
          nameOutput +=
            "Name: " +
            names[i] +
            ", Number: " +
            (i + 1).toString() +
            ", Type: " +
            type[i] +
            ", Move: " +
            move[i];
          let node = document.createTextNode(nameOutput);
          let img = document.createElement("IMG");
          img.setAttribute("src", pictures[i].src);
          img.setAttribute("class", "imgResults");
          let newLi = document.createElement("li");
          newLi.setAttribute("class", "searchResult");
          newLi.appendChild(img);
          newLi.appendChild(node);
          searchResults.push(newLi);
          newList.appendChild(newLi);
        }
        // break after 5 pokemon match results
      }
    }
  }
});

// linking enter to search button
nameSearchBar.addEventListener("keyup", function (event) {
  if (event.key === 13) {
    event.preventDefault();
    document.getElementById("nameSearchButton").click();
  }
});
