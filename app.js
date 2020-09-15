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

nameSearch.addEventListener('submit', (e) => {
    var letters = /^[A-Za-z]+$/
    if (!nameSearchBar.value.match(letters)) {
        e.preventDefault()
        document.getElementById("nameError").innerHTML = "Please only enter characters";
    }

})
