$(function(){
	// 보희씨가 만든 인크루트 파일
	$("#header").load("https://jangbohee.github.io/jours/nav.html");

		//
		$('.nav1 li a').click(function(){
			var idx=$(this).index()
			//alert(idx)
			$('.content').fadeOut()
			$('.content').eq(idx).fadeIn()

			// $("").addClass(on)
		});



















});
