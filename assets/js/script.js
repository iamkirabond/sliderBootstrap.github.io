$('.pleload-screen__btn').on('click',function(){

	var $preload_screen = $(this).parent().parent(),
		carousel = $("#carouselExampleIndicators").get();
    setTimeout(function () {
		$preload_screen.addClass('d-none');
		$(carousel).removeClass('d-none');
	}, 5000);

})

