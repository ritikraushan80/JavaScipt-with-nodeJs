console.log('Hello, I am outside from browser')
require("./third")

let temp = {
	name : 'Ritik',
	address: 'Hajipur'
}

function printFn(){
	console.log('Hello I am printfn()')
}

printFn()

function getTemp(){
	return 'hello I am temp'
}


module.exports = {
	tempVariable : temp,
	method : getTemp
}