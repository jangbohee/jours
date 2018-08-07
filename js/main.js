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
			el: '.swiper-pagination1',
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
 });
	  $('section').mousewheel(function(event,delta){
		if(delta>0){
			var prev=$(this).prev().offset().top
			$('html,body').stop().animate({scrollTop:prev},500)
		}
		else if(delta<0){
			var idx=$(this).index()
			if(idx<=2){
				var next=$(this).next().offset().top
				$('html,body').stop().animate({scrollTop:next},500)
			}
		}
		
	})
	
	$('.best_nav li').click(function(){
		$('.best_nav li').removeClass('on')
		$(this).addClass('on')
	})
})