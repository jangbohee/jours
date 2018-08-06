$(function(){
	$("#header").load("https://jangbohee.github.io/jours/nav.html");
		var swiper1 = new Swiper('.swiper-container1', {
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
	var swiper2 = new Swiper('.swiper-container2', {
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		autoplay: {
		   delay: 800,
		   disableOnInteraction: false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  });
})