$(function(){
	$("#header").load("https://jangbohee.github.io/jours/nav.html");
		var swiper = new Swiper('.swiper-container', {
		 loop: true,
		 autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		 },
		 effect: 'fade',
		 pagination: {
			el: '.swiper-pagination',
		  },
    });
})