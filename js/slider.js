document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
        type       : 'loop',
		fixedWidth  : 232,
		height      : 120,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
        pagination : false,
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
        classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows my-class-arrows',
		arrow : 'splide__arrow my-class-arrow',
		prev  : 'splide__arrow--prev my-class-prev',
		next  : 'splide__arrow--next my-class-next',
	    },
	} ).mount();
	
	var primarySlider = new Splide( '#image-slider', {
		type       : 'loop',
		heightRatio: 0.5,
		pagination : true,
		arrows     : false,
		cover      : true,
        keyboard   : true
	} ); 
	
	primarySlider.sync( secondarySlider ).mount();
} );