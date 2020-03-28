function dwarfRollCall(dwarves) {
var call = []
  dwarves.forEach(function(entry, i){
    call.push(i+1 + ". " + entry+" ")
  })
  return call.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var element = []
planeteerCalls.forEach(function(word){
  word = word.toUpperCase() + "!"
  element.push(word)
})
return element
}

function longPlaneteerCalls(words) {
for (let i =0; i < words.length; i++){
    if(words.length > 4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  var cheese = ""
  let cheddar="cheddar", gouda= "gouda", camembert="camembert"
  for(var i = 0; i<foods.length; i++){
    cheese = foods[i]
    if(cheese===cheddar){
      return(`${cheese}`)
    }
    if(cheese===gouda){
      return(`${cheese}`)
    }
    if(cheese===camembert){
      return(`${cheese}`)
    }
  }return("no cheese!")
