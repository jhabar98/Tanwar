const button = document.getElementById("my-button");
const div = document.getElementById("my-div");

button.addEventListener("click", function() {
	div.innerText = "You clicked the button!";
});
