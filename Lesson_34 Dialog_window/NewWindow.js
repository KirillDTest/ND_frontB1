var b=document.querySelector('button');
b.addEventListener('click', f_window);

function f_window() {
	var filter = document.getElementById("filter");
	filter.style.display = "block";
	filter.addEventListener('click', f_close);
}

function f_close() {
	filter.style.display = "none";
	filter.removeEventListener('click', f_close);
}