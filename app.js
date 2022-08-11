document.getElementById("form").onsubmit = function (e) {
	e.preventDefault();
	$.ajax({
		url: "./ajax-request.php",
		method: "POST",
		data: {create: 1, guest_name : document.getElementById("name").value},
		success: function (data) {
				getGuests();
			},
	});
}
getGuests();
function getGuests(){
	$.ajax({
		url: "./ajax-request.php",
		method: "POST",
		data: {get: 1},
		success: function (data) {
				$(".ajax-resault").html(data);
			},
	});
}
function editBtn(id) {
  $(".guest-"+id).toggleClass("open")
}

function deleteBtn(id){
	$.ajax({
		url: "./ajax-request.php",
		method: "POST",
		data: {delete: 1, id: id},
		success: function (data) {
			getGuests();
		},
	});
}

function subEditBtn(id){
	$.ajax({
		url: "./ajax-request.php",
		method: "POST",
		data: {edit: 1, guest_name : document.getElementById("name"+id).value, id : id},
		success: function (data) {
			getGuests();
		},
	});
}
// this block of code will control the overrlay
const overlay = document.getElementById("overlay");

function openOverlay() {
  overlay.classList.add("active");
}
function closeOverlay() {
  overlay.classList.remove("active");
}
// this block of code will check the selection picked
function addtask(id) {
  document.getElementById("task-section-" + id).checked = true;
}
// this block of code is for the input buttons
// get all the inputs
const inputs = document.querySelectorAll(".input");
// functions
const handleFocus = (e) => {
  // get the parent
  const parent = e.target.parentElement;
  // get the icon
  const icon = e.target.nextElementSibling;

  //add the focused class
  parent.classList.add("focused");
  // pTags.classList.add("focused");

  // then remove success and error
  parent.classList.remove("correct");
  parent.classList.remove("wrong");

  // then remove the icon
  icon.className = "icon fas";
};

const handleBlur = (e) => {
  // get the parent
  const parent = e.target.parentElement;
  // get the icon
  const icon = e.target.nextElementSibling;

  if (e.target.checkValidity()) {
    parent.classList.add("correct");
    icon.classList.add("fa-check");
  } else {
    parent.classList.add("wrong");
    icon.classList.add("fa-exclamation");
  }
};
// add event listeners on the inputs
inputs.forEach((input) => {
  input.addEventListener("focus", handleFocus);
  input.addEventListener("blur", handleBlur);
  // input.addEventListener('input', handleInput);
});
// the end
