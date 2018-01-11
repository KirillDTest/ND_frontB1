var showDlgWin=document.querySelector('button');
showDlgWin.addEventListener('click', f_window);

var closeBtn = document.querySelector(".close");
var popup = document.querySelector(".popup");
var filter = document.querySelector(".filter");

function f_window() {
	filter.style.display = "block";
	popup.style.display = "block";

	filter.addEventListener('click', f_close);
	closeBtn.addEventListener('click', f_close);
}

function f_close() {
	filter.style.display = "none";
	popup.style.display = "none";
	filter.removeEventListener('click', f_close);     //снимаем эти два слушателя с их функциями
	closeBtn.removeEventListener('click', f_close);   //чтобы не засорять память
}