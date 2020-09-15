const numberSearchBar = document.getElementById('numberSearchBar')
const nameSearchBar = document.getElementById('nameSearchBar')
const numberSearch = document.getElementById('numberSearch')
const nameSearch = document.getElementById('nameSearch')

numberSearch.addEventListener('submit', (e) => {
    if (isNaN(numberSearchBar.value) || numberSearchBar.value < 1 || numberSearchBar.value > 20) {
        e.preventDefault()
        document.getElementById("numberError").innerHTML = "Please enter numbers 1-20";
        console.log("hellfsd")
    }

})

numberSearchBar.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("numberSearchButton").click();
    }
})

nameSearch.addEventListener('submit', (e) => {
    var letters = /^[A-Za-z]+$/
    if (!nameSearchBar.value.match(letters)) {
        e.preventDefault()
        document.getElementById("nameError").innerHTML = "Please only enter characters";
    }

})

nameSearchBar.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("nameSearchButton").click();
    }
})


