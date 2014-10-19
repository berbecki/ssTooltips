// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// ssTooltips
!function(o){"strict mode";o.fn.ssTooltips=function(t,i){var e=o.extend({bgColor:"#333",txtColor:"#f2f2f2",maxWidth:200,borderRadius:3,fontSize:12},i),d=o(t);if(!(d&&d.length>0))return!1;var a=o('<div id="tooltip-wrapper"></div>'),n=o('<div id="tooltip-box"></div>'),p=o('<div id="tooltip-arrow"></div>');a.css({display:"none",position:"absolute",opacity:"0.95"}),n.css({background:e.bgColor,padding:"5px 15px",color:e.txtColor,"border-radius":e.borderRadius+"px","box-shadow":"0 2px 6px -1px rgba(0,0,0,0.3)","max-width":e.maxWidth+"px","font-size":e.fontSize+"px"}),p.css({width:"10px",height:"10px",background:e.bgColor,position:"absolute",left:"16px",bottom:"-4px",transform:"rotate(45deg)"}),n.appendTo(a),p.appendTo(a),o("body").append(a),d.each(function(){var t=o(this),i=t.attr("data-tooltip");t.removeAttr("title"),t.on({mousemove:function(t){a.css({left:t.pageX-20,bottom:o(window).height()-t.pageY+20})},mouseenter:function(){a.hide().fadeIn("fast"),n.empty().html(i)},mouseleave:function(){a.stop().fadeOut("fast")}})})}}(jQuery);