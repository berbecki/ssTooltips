/**
* This is a simple jQuery plugin that make nice tooltips.
*
* @class ssTooltips
* @author Jacek Berbecki
*/
;(function($) {
	'use strict';
	$.ssTooltips = {version: '1.0.0'};
	$.fn.ssTooltips = function(element, options) {
		
		// set tooltip options
		var settings = $.extend({
			bgColor: '#333',
			txtColor: '#f2f2f2',
			maxWidth: 200,
			borderRadius: 3,
			fontSize: 12
		}, options);
		
		// get elements
		var elements = $(element);
		
		// start tooltip engine when elements exists
		if(elements && elements.length > 0) {
			
			// cteare tootlip element
			var tooltipWrapper = $('<div id="tooltip-wrapper"></div>'),
				tooltipBox = $('<div id="tooltip-box"></div>'),
				tooltipArrow = $('<div id="tooltip-arrow"></div>');
			
			// set tooltop element styles
			tooltipWrapper.css({
				'display': 'none',
				'position': 'absolute',
				'opacity': '0.95'
			});
			tooltipBox.css({
				'background': settings.bgColor,
				'padding': '5px 15px',
				'color': settings.txtColor,
				'border-radius': settings.borderRadius + 'px',
				'box-shadow': '0 2px 6px -1px rgba(0,0,0,0.3)',
				'max-width': settings.maxWidth + 'px',
				'font-size': settings.fontSize + 'px'
			});
			tooltipArrow.css({
				'width': '10px',
				'height': '10px',
				'background': settings.bgColor,
				'position': 'absolute',
				'left': '16px',
				'bottom': '-4px',
				'transform': 'rotate(45deg)'
			});

			// append tooltop to document
			tooltipBox.appendTo(tooltipWrapper);
			tooltipArrow.appendTo(tooltipWrapper);
			$('body').append(tooltipWrapper);
			
			// fire tooltip mouse actions
			elements.each(function(index, element) {
				var $this = $(this),
					dataTxt = $this.attr('data-tooltip');
				$this.removeAttr('title');
				
				$this.on({
					mousemove: function(event) {
						tooltipWrapper
							.css({
								'left': event.pageX - 20,
								'bottom': ($( window ).height() - event.pageY + 20)  
							})
					},
					mouseenter: function(event) {
						tooltipWrapper
							.hide()
							.fadeIn('fast');
						tooltipBox
							.empty()
							.html(dataTxt);
					},
					mouseleave: function(event) {
						tooltipWrapper
							.stop()
							.fadeOut('fast');
					}
				})
			});
			
		} else {
			return false;
		}
	}
}(jQuery));