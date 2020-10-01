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

numberSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  let numberInput = numberSearchBar.value;
  let maxNum = 0;
  let numberOutput = [];
  // number validation
  if (isNaN(numberInput) || numberInput < 1 || numberInput > 20) {
    alert("Please enter numbers 1-20");
  } else {
    // appending pokemon that match search results into an array
    for (i = 0; i < names.length; i++) {
      if ((i + 1).toString().includes(numberInput)) {
        numberOutput.push(
          "Name: " +
            names[i] +
            ", Number: " +
            (i + 1).toString() +
            ", Type: " +
            type[i] +
            ", Move: " +
            move[i] +
            "\n"
        );
        maxNum += 1;
      }
      // break after 5 pokemon match results
      if (maxNum >= 5) {
        break;
      }
    }
    // search results
    alert(numberOutput.join(""));
  }
});

// linking enter to search button
numberSearchBar.addEventListener("keyup", function (event) {
  if (event.key === 13) {
    event.preventDefault();
    document.getElementById("numberSearchButton").click();
  }
});

nameSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  var letters = /^[A-Za-z]+$/;
  let messages = [];
  let nameInput = nameSearchBar.value.toLowerCase();
  let maxNum = 0;
  let nameOutput = [];
  // letter and length validation
  if (!nameSearchBar.value.match(letters)) {
    messages.push("Please only enter characters");
  }

  if (nameSearchBar.value.length > 20) {
    messages.push("Name must be shorter than 21 characters");
  }

  if (messages.length > 0) {
    alert(messages.join(", "));
  } else {
    // appending pokemon that match search results into an array
    for (i = 0; i < names.length; i++) {
      if (names[i].toLowerCase().includes(nameInput)) {
        nameOutput.push(
          "Name: " +
            names[i] +
            ",Number: " +
            (i + 1).toString() +
            ", Type: " +
            type[i] +
            ", Move: " +
            move[i] +
            "\n"
        );
        maxNum += 1;
      }
      // break after 5 pokemon match results
      if (maxNum >= 5) {
        break;
      }
    }
    alert(nameOutput.join(""));
  }
});

// linking enter to search button
nameSearchBar.addEventListener("keyup", function (event) {
  if (event.key === 13) {
    event.preventDefault();
    document.getElementById("nameSearchButton").click();
  }
});
