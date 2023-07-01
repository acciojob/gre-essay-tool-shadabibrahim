//your code here
let inp = document.getElementById("evaluatedText");
let ans = document.getElementById("letterCount");

inp.addEventListener("keyup",()=> {
		ans.innerText = inp.value.length;
});
