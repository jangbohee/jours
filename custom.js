
	$(function(){
	// alert()
	
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
	autoplay: {
      delay: 2500, 
     disableOnInteraction: false,}, 
      
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
	//alert()
	$('#sec8 .next').click(function(){
		$('#sec8 .slider_wrap').animate({'margin-left':'-40%'},1000,function(){
			$('#sec8 .slider').first().appendTo('#sec8 .slider_wrap')
			$('#sec8 .slider_wrap').css({'margin-left':'-20%'})
		})
		
	})
	
	$('#sec8 .prev').click(function(){
		$('#sec8 .slider_wrap').animate({'margin-left':'0%'},1000,function(){
			$('#sec8 .slider').last().prependTo('#sec8 .slider_wrap')
			$('#sec8 .slider_wrap').css({'margin-left':'-20%'})
		})
		
	})
	
	
	



	// <!--sns스왕이퍼---->





	



	var posBox1=$('#sec1').offset().top
		// alert(posBox1)
		var posBox2=$('#sec2').offset().top
		// alert(posBox2)
		var posBox3=$('#sec3').offset().top
		// alert(posBox3)
		var posBox4=$('#sec4').offset().top
		// alert(posBox4)
		var posBox5=$('#sec5').offset().top
		// alert(posBox5)
		
		//각 세로영역의 포지션을 읽어들인다 > 세로 메뉴에 값을 넣어서 애드클래스  
		//.eq(0~5)로 각각 li의 순서를 지정한다.
		
		$(window).scroll(function(){
		
			var scrTop=$(window).scrollTop();
			$('.section img,.section p,.section h2').removeClass('on')//활성화 되어있는 모든 애니를 초기화시킨다(애니메이트하기위해)
			if(scrTop>=posBox1 && scrTop<posBox2){
			
				
				
			}
			
			if(scrTop>=posBox2 && scrTop<posBox3){
			
				$('#sec2 .text').addClass('on')
				
				$('#sec2 .rbg img,#sec2 .lbg img').addClass('on'),200
				
				
				
				
			}
			
			if(scrTop>=posBox3 && scrTop<posBox4){
			
				$('#sec3 .text').addClass('on')
				
				$('#sec3 .rbg img,#sec3 .lbg img').addClass('on'),200
			
			}
			

			if(scrTop>=posBox4 && scrTop<posBox5){
			
				$('#sec4 .text').addClass('on')
				
				$('#sec4 .rbg img,#sec4 .lbg img').addClass('on'),200
			}
			

			if(scrTop>=posBox5){
			
				$('#sec5 .text').addClass('on')
				
				$('#sec5 .rbg img,#sec5 .lbg img').addClass('on'),200
			
			}
			
			
		})
	
		
		
		$('.button').mouseenter(function(){
		
			$('.level2').addClass("on")
		})
		$('.button').mouseleave(function(){
		
			$('.level2').removeClass("on")
		})
	
	});
