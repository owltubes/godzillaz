/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const stories = document.getElementById("stories")
const miles = document.getElementById("miles")

const convertBtn = document.getElementById("convertBtn")
const conValue = document.getElementById("conValue")

convertBtn.addEventListener("click", function() {
  const value = Number(conValue.value)
  stories.textContent = `${value} Godzillas / a ${((value * 400) / 10).toFixed(0)} story building` 
  miles.textContent = `${value} Godzillas / ${((value * 400) / 5280).toFixed(2)} miles `
  conValue.value = ""
})