//your code here

function fun() {
var str = document.getElementById("evaluatedText").value;
var count = 0;
var splited = str.split(' ');
for (var i = 0; i < splited.length; i++) {
        if (splited[i] != "") {
            count += 1;
        }
		}
	document.getElementById("wordCount").innerHTML = count;
}