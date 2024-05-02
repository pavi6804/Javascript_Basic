const nameValue = prompt("What is your name?")
const nameEl = document.getElementById("name")
nameEl.innerText = nameValue.toUpperCase()

const ageValue = prompt("What is your age?")
const ageEl = document.getElementById("age")
ageEl.innerText = ageValue

const liveValue = prompt("Where are you from?")
const liveEl = document.getElementById("live")
liveEl.innerText = liveValue.toUpperCase()

const hobbies = prompt("Enter your hobbies separate by ,")
const hobbiesSeparate = hobbies.split(', ')
console.log(hobbiesSeparate)
const hobbiesSpan = []
hobbiesSeparate.forEach((hobby)=>{
    hobbiesSpan.push(`<span class="badge text-bg-primary">${hobby}</span>`)
})
console.log(hobbiesSpan)
const hobbiesEl = document.getElementById("hobbies")
hobbiesEl.innerHTML = hobbiesSpan.join(" ")