//your code here
let evaluatedText = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input",function(){
	let text = evaluatedText.value;
	letterCount.innerText = text.length;
})
