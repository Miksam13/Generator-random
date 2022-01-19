function randomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function gen(){
	let minchislostr = document.getElementById("min_chislo").value
	let maxchislostr = document.getElementById("max_chislo").value

	let minchislo = Number(minchislostr)
	let maxchislo = Number(maxchislostr)

	if(minchislo > maxchislo){
		maxchislo = minchislo + 1
	}

	let randomnumber = randomNumber(minchislo, maxchislo)

	document.getElementById("max_chislo").value = maxchislo

	document.getElementById("random_text").innerHTML = randomnumber

	return minchislo, maxchislo
}

function clear(){
	minchislo.value = ""
	maxchislo.value = ""
}