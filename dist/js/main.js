$(document).ready(function(){

	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

var subopen = document.querySelector(".sub__menu__link"),
	submenu = document.querySelector(".sub__menu");

subopen.addEventListener("click", function() {
	if(submenu.classList.contains("hidden") === true) {
		submenu.classList.remove("hidden");
 		submenu.classList.add("visible");
	} else {
		submenu.classList.add("hidden");
	};
}, false);


	// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});


// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("8(999) 999-99-99");
});
});