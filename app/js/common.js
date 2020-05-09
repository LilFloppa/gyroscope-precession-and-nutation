let popup_count = 0;

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
				if (ms >= 100) 
					ms -= 100; 

				let msecond  = (ms < 10) ? '0' + ms : ms;

				$('.timer__milliseconds').html(msecond);
			}
		}, 10);

		isStarted = true;
	}


	/* Popup */
	$('.popup').mousedown(function() {
		$(this).css("z-index", "10" + popup_count);
		$(".popup").not(this).css("z-index", "10" + popup_count - 1);
	});

	function OnClickPopupLink(link, popup, handleID, dragID, index) {
		$(link).addClass('disabled').closest("li").addClass('disabled');

		if (!($(popup).hasClass('active')))
			popup_count++;

		$(popup).addClass('active');
		Drag(handleID, dragID, index);
	}


	/* Show popup */
	$('.theta-from-phi-link').click(function() {
		OnClickPopupLink(this, ".popup-theta-from-phi", "handleThetaFromPhi", "dragThetaFromPhi", 0);
	});

	$('.theta-from-t-link').click(function() {
		OnClickPopupLink(this, ".popup-theta-from-t", "handleThetaFromT", "dragThetaFromT", 1);
	});

	$('.kinetic-link').click(function() {
		OnClickPopupLink(this, ".popup-kinetic", "handleKinetic", "dragKinetic", 2);		
	});

	$('.potential-link').click(function() {
		OnClickPopupLink(this, ".popup-potential", "handlePotential", "dragPotential", 3);		
	});

	$('.total-link').click(function() {
		OnClickPopupLink(this, ".popup-total", "handleTotal", "dragTotal", 4);		
	});

	$('.manual-link').click(function() {
		OnClickPopupLink(this, ".popup-manual", "handleManual", "dragManual", 5);		
	});

	$('.theory-link').click(function() {
		OnClickPopupLink(this, ".popup-theory", "handleTheory", "dragTheory", 6);		
	});

	$('.developers-link').click(function() {
		OnClickPopupLink(this, ".popup-developers", "handleDevelopers", "dragDevelopers", 7);		
	});


	/* Hide popup */
	$('.close').click(function() {
		$(this).closest('.popup').removeClass('active').css("z-index", "100");
		popup_count--;
	});

	$('.popup-theta-from-phi .close').click(function() {
		$('.theta-from-phi-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

	$('.popup-theta-from-t .close').click(function() {
		$('.theta-from-t-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

	$('.popup-kinetic .close').click(function() {
		$('.kinetic-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

	$('.popup-potential .close').click(function() {
		$('.potential-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

	$('.popup-total .close').click(function() {
		$('.total-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

	$('.popup-manual .close').click(function() {
		$('.manual-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

	$('.popup-theory .close').click(function() {
		$('.theory-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

	$('.popup-developers .close').click(function() {
		$('.developers-link').removeClass('disabled').closest("li").removeClass('disabled');
	});

});


/* Dock panel */
function Drag(handleID, dragID, index) {
	let mousePosition,
			offset = [0, 0],
			handle = document.getElementById(handleID),
			drag = document.getElementById(dragID),
			isDown = false;

	if (index <= 2)
		drag.style.top = "calc(50% + " + 40 * index + "px)";
	else if (index > 4)
		drag.style.top = "calc(50% + " + 40 * (index - 4) + "px)";
	else
		drag.style.top = "calc(50% + " + (-40 * (index - 4)) + "px)";

	drag.style.left = "calc(50% + " + 40 * index + "px)";

	handle.addEventListener('mousedown', function(e) {
		isDown = true;
		offset = [drag.offsetLeft - e.clientX, drag.offsetTop - e.clientY];
	}, true);

	document.addEventListener('mouseup', function() { isDown = false; }, true);

	document.addEventListener('mousemove', function(event) {
		if (isDown) {
			mousePosition = { x : event.clientX, y : event.clientY };
			drag.style.left = (mousePosition.x + offset[0]) + 'px';
			drag.style.top  = (mousePosition.y + offset[1]) + 'px';
		}
	}, true);

	drag.style.zIndex = 100 + popup_count;

	// Добавить закрепление окна внизу страницы
}


/* Plots */
let brdThetaFromPhi = JXG.JSXGraph.initBoard('ThetaFromPhi', {
	axis: true, 
	boundingbox: [-1, 1, 1, -1], 
	registerEvents: false, 
	grid: true,
	keepAspectRatio: true,
	showCopyright: false,
});
brdThetaFromPhi.suspendUpdate();
let ThetaFromPhiPlot = brdThetaFromPhi.create('functiongraph', [function(x) { return 0.5 * Math.cos(5 * x); }], { strokeWidth: 3, strokeColor: '#1e28ff' });
brdThetaFromPhi.unsuspendUpdate();

$(window).resize(function() { 
	brdThetaFromPhi.resizeContainer($('#ThetaFromPhi').width(), $('#ThetaFromPhi').height(), true, true); 
	brdThetaFromPhi.setBoundingBox([-1, 1, 1, -1], false); 
}); 