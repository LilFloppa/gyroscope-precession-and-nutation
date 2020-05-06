$(function() {

	/* Button off */
	$(".button").on("click", function(e) {
		$(this).addClass("disabled");
	});


	/* Main buttons */
	$(".start-main").on("click", function(e) {
		$(".pause-main, .reset-main").removeClass("disabled");
		$(".slider").addClass("disabled");
	});

	$(".pause-main").on("click", function(e) {
		$(".start-main").removeClass("disabled");
		$(".slider").removeClass("disabled");
	});	

	$(".reset-main").on("click", function(e) {
		$("#distance").val(0.2);
		$("#mass").val(0.1);
		$("#radius").val(0.08);
		$("#rotation-speed").val(500);
		$("#initial-speed").val(0);
		$("#initial-angle").val(90);

		setText();

		$(".pause-main").addClass("disabled");
		$(".start-main").removeClass("disabled");
		$(".slider").removeClass("disabled");
	});


	/* Sliders */
	function setText() {
		$("#distance, #mass, #radius, #rotation-speed, #initial-speed, #initial-angle").on("input", function() {
			let el = $(this);
			el.closest(".parameters__wrapper").children(".parameters__text").children("span").html(el.val());
		}).trigger("input");
	}
	setText();


	/* Timer */
	let min = 0, sec = 0, ms = 0;
	let isStoped = false, isStarted = false;

	$(".start-timer").on("click", function(e) {
		if (!isStarted)
			Timer();

		isStoped = false;

		$(".pause-timer, .reset-timer").removeClass("disabled");
	});

	$(".pause-timer").on("click", function(e) {
		isStoped = true;

		$(".start-timer").removeClass("disabled");
	});

	$(".reset-timer").on("click", function(e) {
		isStoped = true;

		min = 0;
		sec = 0;
		ms = 0;

		minute = "";
		second = "";
		msecond = "";

		$('.timer__minutes').html("00");
		$('.timer__seconds').html("00");
		$('.timer__milliseconds').html("00");

		$(".pause-timer").addClass("disabled");
		$(".start-timer").removeClass("disabled");
	});

	function Timer() {
		setInterval(function Time() {
			if (!isStoped) {
				sec++;
				if (sec >= 60) {
					min++;
					sec -= 60;
				}

				let minute  = (min < 10) ? '0' + min : min,
				second  = (sec < 10) ? '0' + sec : sec;

				$('.timer__minutes').html(minute);
				$('.timer__seconds').html(second);
			}
		}, 1000);

		setInterval(function Milliseconds() {
			if (!isStoped) {
				ms++;
				if (ms >= 100) ms -= 100; 

				let msecond  = (ms < 10) ? '0' + ms : ms;

				$('.timer__milliseconds').html(msecond);
			}
		}, 10);

		isStarted = true;
	}


	/* Windows with charts */
	

});