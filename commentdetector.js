function commentDetector(){function callback(){(function($){var jQuery=$;

spinString = new Array();
spinString[0] = "◐◓◑◒◒";
spinString[1] = "┏┓┛┗┗";
spinString[3] = "|/-\\";

var spin = spinString[Math.floor(Math.random() * 3)],
    i = 0;

setInterval(function () {
    i = i == spin.length - 1 ? 0 : ++i;
    $('#spinner').text(spin[i]);
}, 300);

function getComments() {
	$("body").append('<pre id="spinner"></pre>');
    $("body").append('<iframe id="iframe" src="http://jacopocolo.com/comment-detector/detector.php?url='+location.href+'"></iframe>');
    $("body").append('<div id="iframebg" style="height: 100%; width: 100%; background-color: rgba(0,0,0,0.5); position: fixed; top: 0; left: 0; z-index: 16777269"></div>');
    $('#iframe, #spinner').css({
    	"position": "fixed",
    	"margin": "auto",
    	"top": "0",
    	"left": "0",
    	"height": "100%",
    	"width": "100%",
    	"z-index": "16777270",
    	"border": "none",
    	"font-size": "50px",
    	"color": "white",
    	"text-align": "center",
    });
    $('#iframe').load(function(){
        $("#spinner").remove();
    }); 
}

getComments();

function close() {$("#iframebg, #iframe").hide();}
$("#iframebg").click(function(){close()});

})(jQuery.noConflict(true))}var s=document.createElement("script");s.src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";if(s.addEventListener){s.addEventListener("load",callback,false)}else if(s.readyState){s.onreadystatechange=callback}document.body.appendChild(s);})()
