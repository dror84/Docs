//<![CDATA[
/* Get the base url value */
//var baseURL = document.getElementsByTagName('base')[0].getAttribute('href');
//var ajaxURL = baseURL + 'wp-admin/admin-ajax.php';

jQuery(document).ready(function ($) { 'use strict';

	/* Prettyify */
	prettyPrint();

	/* Scrollspy */
	var navHeight = $('.navbar').outerHeight(true);
	$('body').scrollspy({
		target: '.bs-sidebar',
		offset: navHeight +50
	});

    $('.bs-sidebar a').click(function(event){
        event.preventDefault();
        var link = $(this).attr('href');
        var posi = $(link).offset().top - navHeight;
        $('body, html').animate({ scrollTop: posi }, 700);
    });

	/* Prevent disabled links from causing a page reload */
	$('li.disabled a').click(function() {
		event.preventDefault();
	});


	/* Adjust the scroll height of anchors to compensate for the fixed navbar */
	window.disableShift = false;
	var shiftWindow = function() {
		if (window.disableShift) {
			window.disableShift = false;
		} else {
			/* If we're at the bottom of the page, don't erronously scroll up */
			var scrolledToBottomOfPage = (
				(window.innerHeight + window.scrollY) >= document.body.offsetHeight
			);
			if (!scrolledToBottomOfPage) {
				scrollBy(0, -60);
			}
		}
	};
	if (location.hash) { shiftWindow(); }
	window.addEventListener('hashchange', shiftWindow);


	/* Deal with clicks on nav links that do not change the current anchor link. */
	$('ul.nav a').click(function() {
		var href = this.href;
		var suffix = location.hash;
		var matchesCurrentHash = (href.indexOf(suffix, href.length - suffix.length) !== -1);
		if (location.hash && matchesCurrentHash) {
			/* Force a single 'hashchange' event to occur after the click event */
			window.disableShift = true;
			location.hash='';
		}
	});
	
	// transform H5 tags into Bootstrap's alerts
	$('blockquote:contains("[INFO]")').addClass('alert alert-info').html(function(){
		return $(this).find('p').html().substring(7);
	});
	$('blockquote:contains("[WARNING]")').addClass('alert alert-warning').html(function(){
		return $(this).find('p').html().substring(10);
	});
    $('blockquote:contains("[MENU]")').addClass('alert alert-menu').html(function(){
		return $(this).find('p').html().substring(7);
	});
	
	// set width of the parent div
	function sidebarResize() {
		$('.bs-sidebar').each(function(){
			$(this).width($(this).parent().width());
		});
	}
	sidebarResize();
	$(window).on('resize', function() {
		sidebarResize();
	});
	
	// edit page on GitHub link
	var canonical = $('link[rel=canonical]').attr('href');
	if (canonical === 'http://www.runeaudio.com/documentation/') {
		// documentation home page
		canonical = 'https://github.com/RuneAudio/Docs/blob/master/docs/index.md';
	} else {
		// other pages
		canonical = canonical.replace('http://www.runeaudio.com/documentation/', 'https://github.com/RuneAudio/Docs/blob/master/docs/');
		canonical = canonical.slice(0,-1);
		canonical += '.md';
	}
	$('#contribute-edit').attr('href', canonical);
	
}); //]]>