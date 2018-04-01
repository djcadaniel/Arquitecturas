$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.05;

		$('.banner2').css({
			'background-position': '0 -' + posicion + 'px'
		})
	});
});