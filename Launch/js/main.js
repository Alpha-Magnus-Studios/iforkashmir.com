
(function($){
'use strict';

/*============HEADER WELCOME SECTIONext fade Effect ===========*/
function TextfadeEffect(){
	 var quotes = $(".fade-text");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
}


/*============= nice scroll ===========*/
 var NiceScroll = function(){
	$("body, .nice-scoll").niceScroll({
		cursorwidth:"4px",
		scrollspeed:60,
		cursorcolor: "rgba(255, 255, 255, 0.5)",
		cursorborder: "0px solid #fff",
		cursorborderradius:"0px",
		autohidemode: true,
		cursordragontouch: true,
		smoothscroll: true,
		touchbehavior: true,
		preventmultitouchscrolling: false
		
	});
} 	

/*============= Section animated Tab ===========*/
function animatedTab(){
	$(".tab-nav li a").on("click",function(e){
		e.preventDefault();
		var $id,$this;
		$this = $(this);
		$(".tab-nav li a").removeClass("active");
		$this.addClass("active");
		 $id = $this.attr("href");
		$($id).addClass("tab-active").fadeIn().siblings('.tab-pane-container>section').removeClass("tab-active").fadeOut();
	});
}


/*============= progressbar ===========*/
	function AniProgressBar(){
		$(".navmenu ul li a[href='#about']").one("click",function(){
			 $(".skills .progress").each(function () {
				$(this).appear(function() {
				  $(this).animate({opacity:1,left:"0px"},500);
				  var b = $(this).find(".progress-bar").attr("data-width");
				  $(this).find(".progress-bar").animate({
					width: b + "%"
				  }, 500, "linear");
				}); 
			});
			$(".counter").counterUp({
				time:500
			});
		});
		
	}
	
/*============= Wlcome section count down ===========*/
	
	function countDown(){
		$("#count-down-wrapper").countdown({
			date: "13 May 2018 12:00:00", // Change this to your desired date to countdown to
			format: "on"
		});
	} 
 /*=============*******************===========*/

/*============= Css main color change ===========*/
 function colorChange(){
	 $(".color-list ul li").on("click",function(){
		 var Color = $(this).attr("class");
		 $("#colors_option").attr("href","css/colors/"+Color+"-color.css");
		 console.log(Color);
	 });
 }

 
/*============= GeometryangleBg JS INSTALL ===========*/
	function GeometryangleBg(){
		  $('.welcome-banner').Geometryangle({mesh:{}, lights: [{}], line: {}, vertex: {}});
	} 
	 
/*============= All function variable call ===========*/	 
$(function(){
	if (typeof TextfadeEffect == 'function'){ 
			TextfadeEffect(); 
		}
	if (typeof NiceScroll == 'function'){ 
			NiceScroll(); 
		}
	if (typeof animatedTab == 'function'){ 
			animatedTab(); 
		}
	if (typeof AniProgressBar == 'function'){ 
			AniProgressBar(); 
		}
	if (typeof countDown == 'function'){ 
			countDown(); 
		}
	if (typeof colorChange == 'function'){ 
			colorChange(); 
		}
	if (typeof GeometryangleBg == 'function'){ 
			GeometryangleBg(); 
		}	
});

/*============= preloder ===========*/	
$(window).load(function(){
	$("#loader-wrapper").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("body").removeClass("preloder_priview");
});

})(jQuery);  