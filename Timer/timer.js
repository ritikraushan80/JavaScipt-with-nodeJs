let intervalId = setInterval(printFn, 1000)
let count = 0;

function printFn(){
	console.log('heyyyy I am running after 2 second')
	count++;
	console.log(count)
	if(count === 6){
		clearInterval(intervalId)
	}
}

// timeout
// for(let i =0; i< 10; i++){
// 	const timeoutId = setTimeout(function()
// 	{
// 		console.log(i)
// 	}, 1000)

// 	if(i=== 7){
// 		clearTimeout(timeoutId)
// 	}
// }

// setTimeout( function timer(){
//     console.log("hii i nmnnm");
// },4000)