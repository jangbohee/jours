
	$(function(){
	
	
		// /자동슬라이더 메뉴(중간)) -->
	
	var dir=-1;
			var speed=1;
			var loc=1;
			
			setTimeout(banner_ani,100)
			
			function banner_ani(){
				
				loc+=speed*dir;
				
				if(loc<=-2300&&dir<0){
					loc=0
				}else if(loc>=0&& dir>0){
					loc=-2300
			
				}
			
				
				$('.banner-wrap').css({'left':loc})
				setTimeout(banner_ani,10)
			}
		
			$('.banner').mouseenter(function(){
				
				speed=0
				
			})
			
			$('.banner').mouseleave(function(){
				
				speed=1
				
			})
			
			$('.prev').mouseenter(function(){
				dir=1;
				speed=2;
				
			})
			
			$('.prev').mouseleave(function(){
				dir=1;
				speed=1;
				
			})
		
			$('.next').mouseenter(function(){
				dir=-1;
				speed=2;
				
			})
			
			$('.next').mouseleave(function(){
				dir=-1;
				speed=1;
				
			})
	
	
	
	
		// <!--swiper-->
			
			
			var swiper = new Swiper('.swiper-container', {
			effect: 'slide',
		// 	<!--autoplay: {
        // <!-- delay: 2500, -->
        // <!-- disableOnInteraction: false,}, -->
      
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					 clickable: true,
				},
			})
	
	// <!--스와이퍼-->
	
	// <!--sns스왕이퍼---->
	var swiper3 = new Swiper('.swiper3', {
      slidesPerView: 4,
      spaceBetween: 0,
	  autoplay: {
			delay: 2500,
			disableOnInteraction: false,
			}, 
			
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
	// <!--sns스왕이퍼---->
	
	});
