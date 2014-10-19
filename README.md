ssTooltips
==========

This is a simple jQuery plugin that make nice tooltips.
You do not need CSS. You need to include the jQuery library and enter a few lines of code. [DEMO](http://www.pikturo.pl/projects/jquery-simple-tooltip)

## Quick start

#### 1. Add jQuery library and ssTooltip library
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="< your path >/ssTooltips.min.js"></script>
```

#### 2. Start ssTooltips engine with using two parameters: ( 'your-class', {options})
```js
$(document).ready(function(){
	
	// strt your ssTooltips plugin
	$( document ).ssTooltips('.my-tooltip', {
		bgColor: '#333'
	});
	
});
```

#### 3. Prepare your element to handle tooltip
```html
<a class="my-tooltip" data-tooltip="At vero eos et accusamus et iusto odio dignissimos ducimus" href="#">iusto</a>
```

data-tooltip - is required and contains the content of the tooltip.

That's all! Good luck!
