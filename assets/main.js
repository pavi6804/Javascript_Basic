//window.alert("hello")
//alert("Without window")
//var u = "anburocky"
//let a=27
//a=30
//const aliv=true
//console.log(u, a, aliv)
//prompt("What is your name?")
// var bad practice
// let use change value
// const use don't change value

//datatypes:
//primitives: 
//string
//const fullName = "Anduselvan"

//number 
//const age = 27

//boolean 
//const isAlive = true

//symbol 

//null 
//const aim = null

//undefined 
//const loveInterest = undefined

//Reference 
//object 
//const watch = new Object() //object constructor
//const watch = {
//    brand: 'iWatch',
//    price: 9999,
//    isOffer: false
//    //sample: function() => { }
//} // object literal

//array 
//const hobbies = new Array() // array constructor
//const hobbies = [" Singing", "Learning"] //array literal

//function 
//function greetMe(nmae){
//    console.log('My name is ',nmae);
//}
//date


//console.log(watch, hobbies)
//greetMe('Anbu')
//greetMe('Selvan')

//if-else
//const agec=parseInt(prompt("What is your age?"))

//if(agec>=18 && agec<=60){
//    console.log("Adult. Go in");
//}
//else if(agec > 60){
//    console.log(" You are old");
//}
//else{
//    console.log("Not Adult");
//}

//switch
//switch(true){
//    case agec > 30:
//        console.log('You are greater than 30!')
//        break
//   case (agec > 30 && agec <60):
//      console.log('You are between 30 and 60')
//        break
//    default:
//        console.log("Default")
//}

// DOM Collection
//const myName = prompt("What is your name?")
//document.title = myName

//console.log(document)

//const person = {
//    firstName: "Rajini",
//    lastName: "Kanth"
//}

//person.age=27

//dot notation
//console.log(person.firstName)
//bracket notation
//console.log(person['lastName'])

//const result = document.body
//console.log(result)
//console.dir(result)

//const res = document.body.children[0].textContent
//console.log(res)

//const El = document.getElementById("tit")
//console.log(El)
//console.log(El.innerText)
//console.log(El.textContent)
//El.innerText = 'Javascript Page'

const person = {
    fn: 'Anbu',
    ln: 'Selvan',
    fullName ()  {
        return this.fn+' '+this.ln
    }
}

console.log(person.fullName());