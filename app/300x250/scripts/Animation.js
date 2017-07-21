var app = app || {};


app.Animation = (function () {

    var divider;
    var legal_btn_txt;
    var legal;
    var buttonExit;
    var buttonLegal;
    var curtain;
    var cta;

    var tl1 = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
        buttonExit = document.getElementById('button-exit');
        buttonLegal = document.getElementById('button-legal');
        divider = document.getElementById('divider');
        legal_btn_txt = document.getElementById('legal_btn_txt');
        legal = document.getElementById('legal');
        curtain = document.getElementById('curtain');
        cta = document.getElementById('cta');

        buttonExit.addEventListener('mouseover', function() {
            TweenMax.to(cta, .25, {backgroundColor:"#1072af"});
        });

        buttonExit.addEventListener('mouseout', function() {
            TweenMax.to(cta, .25, {backgroundColor:"#00b1eb"});
        });

        buttonLegal.addEventListener('mouseover', function () {
            TweenMax.to(legal, .25, {opacity: 1});
        });

        buttonLegal.addEventListener('mouseout', function () {
            TweenMax.to(legal, .25, {opacity: 0});
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
        tl1.to(curtain, .5, {opacity: 0})
            .to(cta, 1, {opacity: 1}, "-=1");
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
