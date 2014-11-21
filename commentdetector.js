function commentDetector() {
    function callback() {
        (function($) {
            var jQuery = $;
            spinString = new Array();
            spinString[0] = "◐◓◑◒◒";
            spinString[1] = "┏┓┛┗┗";
            spinString[2] = "|/-\\";
            var spin = spinString[Math.floor(Math.random() * 3)],
                i = 0;
            setInterval(function() {
                i = i == spin.length - 1 ? 0 : ++i;
                $('#spinner').text(spin[i]);
            }, 300);

            function getComments() {
                $("body").append('<pre id="spinner"></pre>');
                $("body").append('<div id="iframebg" style="height: 100%; width: 100%; background-color: rgba(0,0,0,0.5); position: fixed; top: 0; left: 0; z-index: 16777268"></div>');
                $("body").append('<span id="cf" style="position: fixed; top: 0; right: 0; padding: 5px; background: #000; color: #fff; z-index: 16777270; font-family: monospace;">CLOSE</span>');
                $("body").append('<iframe id="iframe" style="z-index: 16777269" src="http://jacopocolo.com/comment-detector/detector.php?url=' + location.href + '"></iframe>');
                $('#iframe, #spinner').css({
                    "position": "fixed",
                    "margin": "auto",
                    "top": "0",
                    "left": "0",
                    "height": "100%",
                    "width": "100%",
                    "border": "none",
                    "color": "#fff"
                });
                $('#spinner').css({
                "z-index": "16777269",
                "position": "fixed",
                "top": "25%",
                "text-align": "center",
                "font-size": "150px"
                });
                $('#iframe').load(function() {
                    $('body').css('overflow', 'hidden');
                    $("#spinner, #iframebg").remove();
                });
            }
            getComments();

            function close() {
                $("#cf, #iframe, #spinner, #iframebg").remove();
                $('body').css('overflow', 'visible');
            };
            $("#cf").click(function() {
                close();
            });
        })(jQuery.noConflict(true))
    }
    var s = document.createElement("script");
    s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
    if (s.addEventListener) {
        s.addEventListener("load", callback, false)
    } else if (s.readyState) {
        s.onreadystatechange = callback
    }
    document.body.appendChild(s);
};
