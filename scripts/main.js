'use strict';
var age = document.getElementById('age');
var result = document.getElementById('result');
var button = document.getElementById('button');

button.addEventListener("click", function(e) {
	e.preventDefault();
	console.log(parseInt(age.value));
	if(!parseInt(age.value)) {
		result.innerHTML = "please enter a valid age";
	} else if (parseInt(age.value) < 0) {
		result.innerHTML = "please enter a valid age";
	} else {
		parseInt(age.value) >= 16 ? result.innerHTML = "You are old enough to drive" : result.innerHTML = "You are too young to drive";
	}
})
