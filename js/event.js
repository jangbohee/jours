$(function(){
	// 보희씨가 만든 인크루트 파일
	$("#header").load("https://jangbohee.github.io/jours/nav.html");
	$(".group1").colorbox({rel:'group1'});
	
		$('.nav1 li').click(function(){
			var idx=$(this).index()
			// var href=$(this).find('a').attr('href')
			// alert(href)
			//alert(idx)
			$('.content').fadeOut()
			$('.content').eq(idx).fadeIn()
			// $("").addClass(on)


			$(".nav1 li a").removeClass('on');
			$(this).addClass('on');
		});

// ----------------------------------------------------------
		// "a" 값을 가져올 수 있다.
		// var href=$(this).find('a').attr('href')
		// alert(href)


















});
