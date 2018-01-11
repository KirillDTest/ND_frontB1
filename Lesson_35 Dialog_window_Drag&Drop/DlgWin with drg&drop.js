var showDlgWin=document.querySelector('button');
showDlgWin.addEventListener('click', f_window);

var closeBtn = document.querySelector(".close");
var popup = document.querySelector(".popup");
var filter = document.querySelector(".filter");

function f_window() {
	filter.style.display = "block";					 //ставим фон диал.окна
	popup.style.display = "block";                   //делаем видимым диал.окно

	filter.addEventListener('click', f_close);
	closeBtn.addEventListener('click', f_close);
	popup.addEventListener('mousedown', f_down);     //вешаем слушатель-клик на диалог. окно для drag&drop плагина
}

function f_close() {
	filter.style.display = "none";
	popup.style.display = "none";
	filter.removeEventListener('click', f_close);     //снимаем эти два слушателя 
	closeBtn.removeEventListener('click', f_close);   //с их функциями
	popup.removeEventListener('mousedown', f_down);   //чтобы не засорять память (это слушатель для drag&drop плагина)
}



// Эти три функции управляют плагином drag&drop:
function f_down() {
	document.addEventListener('mousemove', f_move);
	popup.addEventListener('mouseup', f_up);
}
function f_move(e) {
	popup.style.top = e.pageY + "px";      //меняем положение диал.окна в зависимости
	popup.style.left = e.pageX  + "px";    //от позиции курсора мыши
}
function f_up() {
	document.removeEventListener('mousemove', f_move);     
	popup.removeEventListener('mouseup', f_up);
}