var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

for(let i=0; i<items.length; i++) {
	
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//click on a list item and it strikethroughs the text
function getEventTarget(event){
	event = event || window.event;
	return event.target || event.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


