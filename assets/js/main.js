/*
	Gravity by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: ($body.hasClass('landing') ? 'center' : 'right'),
			hideDelay: 400
		});

	// Off-Canvas Navigation.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Carousel.
		$('.carousel').each(function() {

			var	$this = $(this);

			if (!browser.mobile) {

				$this.css('overflow-x', 'hidden');

				// Wrapper.
					$this.wrap('<div class="carousel-wrapper" />');
					var $wrapper = $this.parent();

				// Nav.
					var	$navRight = $('<div class="nav right"></div>').insertAfter($this),
						$navLeft = $('<div class="nav left"></div>').insertAfter($this),
						intervalId;

					$navLeft
						.on('mouseenter', function() {
							intervalId = window.setInterval(function() {
								$this.scrollLeft( $this.scrollLeft() - 5 );
							}, 10);
						})
						.on('mouseleave', function() {
							window.clearInterval(intervalId);
						});

					$navRight
						.on('mouseenter', function() {
							intervalId = window.setInterval(function() {
								$this.scrollLeft( $this.scrollLeft() + 5 );
							}, 10);
						})
						.on('mouseleave', function() {
							window.clearInterval(intervalId);
						});

				// Events.
					$window
						.on('resize load', function() {

							if ($this.width() < $this.prop('scrollWidth'))
								$wrapper.removeClass('no-scroll');
							else
								$wrapper.addClass('no-scroll');

						});

			}

			// Poptrox.
				$this.poptrox({
					baseZIndex: 100001,
					useBodyOverflow: false,
					usePopupEasyClose: false,
					overlayColor: '#000000',
					overlayOpacity: 0.75,
					usePopupDefaultStyling: false,
					popupLoaderText: '',
					usePopupNav: true,
					usePopupCaption: true
				});

				breakpoints.on('<=small', function() {

					$this[0]._poptrox.usePopupCaption = false;
					$this[0]._poptrox.usePopupCloser = false;
					$this[0]._poptrox.windowMargin = 10;

				});

				breakpoints.on('>small', function() {

					$this[0]._poptrox.usePopupCaption = true;
					$this[0]._poptrox.usePopupCloser = true;
					$this[0]._poptrox.windowMargin = 50;

				});

		});

})(jQuery);