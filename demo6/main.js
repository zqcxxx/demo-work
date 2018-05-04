$(function () {
	$('.one').on('click', function() {
		$('.bgone').addClass('a-1 active')
				   .siblings().removeClass('active a-5 a-2 a-3 a-4');
	})
	$('.two').on('click', function() {
		$('.bgtwo').addClass('a-2 active')
		           .siblings().removeClass('active a-1 a-3 a-4 a-5');
	})
	$('.three').on('click', function() {
		$('.bgthree').addClass('a-3 active')
		             .siblings().removeClass('active a-1 a-2 a-4 a-5');
	})
	$('.four').on('click', function() {
		$('.bgfour').addClass('a-4 active')
		            .siblings().removeClass('active a-1 a-2 a-3 a-5');
	})
	$('.five').on('click', function() {
		$('.bgfive').addClass('a-5 active')
		            .siblings().removeClass('active a-1 a-2 a-3 a-4');
	})
})