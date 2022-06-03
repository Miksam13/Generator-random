function randomNumber(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}
  
function gen(){
	let minchislostr = document.getElementById("min_number").value
	let maxchislostr = document.getElementById("max_number").value
  
  let minchislo = Number(minchislostr)
  let maxchislo = Number(maxchislostr)
  
	if(minchislo > maxchislo){
	  maxchislo = minchislo + 1
  }
  
  let randomnumber = randomNumber(minchislo, maxchislo)
 
  document.getElementById("max_number").value = maxchislo
  
	document.getElementById("text").innerHTML = randomnumber
}
  
function clear(){
  document.getElementById("min_number").value = ""
  document.getElementById("max_number").value = ""
}