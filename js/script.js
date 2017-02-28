/******************
Scroll Speed
*******************/

jQuery.scrollSpeed(3, 100);

/******************
Sticky Navbar: Nav Scrolling: move and fix the nav bar at the top or bottom when the user scrolls;
Arrow down animation: Glyphicon arrow animation
*******************/

window.addEventListener('scroll', Scroll);

function Scroll() {
	glyphiScroll();
	var myName = document.getElementsByClassName('myName')[0];
	var navbar = document.getElementById('navbar');
	var icons = document.getElementsByClassName('socialIcon');
	for (var i = 0; i < icons.length; i++) {
		if (window.scrollY >= document.body.clientHeight * 0.4) { 
			navbar.style.position = 'fixed';
			navbar.style.top = 0;
			icons[i].style.border = 'solid 1px #DADBEA';
			icons[i].style.transition = 'border 1s linear';
			myName.style.color = '#DADBEA';
			myName.style.transition = 'color 1s linear';
		} else if (window.scrollY < document.body.clientHeight * 0.4) { 
			navbar.style.position = 'absolute';
			navbar.style.top = 40 + '%';
			icons[i].style.border = 'solid 1px white';
			icons[i].style.transition = 'border 1s linear';
			myName.style.color = 'white';
			myName.style.transition = 'color 1s linear';
		}
	}
	if (window.scrollY >= document.body.clientHeight * 3.05) { 
			navbar.style.background = '#212121';
			navbar.style.transition = 'background 1s linear';
	} else if (window.scrollY < document.body.clientHeight * 3.05) {
			navbar.style.background = 'rgba(0,0,0,.25)';
	}
}

function glyphiScroll() { 
	var glyphicon = document.getElementById('arrowIcon');
	if (window.scrollY >= 50) {
		glyphicon.style.opacity = '0';
		glyphicon.style.webkitTransition = 'all 2s';
		glyphicon.style.mozTransition = 'all 2s';
	} else {
		glyphicon.style.opacity = '1';
		glyphicon.style.webkitTransition = 'all 2s';
		glyphicon.style.mozTransition = 'all 2s';
	}
}

/******************
Responsive Nav Bar Icon
*******************/

var onClick = document.getElementsByClassName('nav-list')[0];
onClick.addEventListener('click', navDropdown);

function navDropdown() {
	if (onClick.className === 'nav-list') {
		onClick.className += ' responsive';
	} else {
		onClick.className = 'nav-list';
		onClick.classList.remove('responsive');
	}
}

/******************
Responsive Video to Static Parallax Image depending on the window width.
*******************/

window.addEventListener('load', toogleVideo);
window.addEventListener('resize', toogleVideo);

function toogleVideo() {
	var width = document.body.clientWidth;
	var parallax = document.getElementById('parallax1');
	var video = document.getElementById('video');

	if (width <= 1200) {
		video.style.display = 'none';
		parallax.className = 'addParallax1';
	} else {
		video.style.display = 'inherit';
		parallax.className = '';
	}
}

/******************
Sliding Quotes
*******************/

var quote = document.getElementsByClassName('quote');
var leftArrow = document.getElementsByClassName('fa-chevron-left')[0];
var rightArrow = document.getElementsByClassName('fa-chevron-right')[0];
leftArrow.addEventListener('click', backQuote);
rightArrow.addEventListener('click', forwardQuote);

function forwardQuote() {
	for (var i = 0; i < quote.length; i++) {
		if (quote[i].className === 'quote' && i !== quote.length - 1) {
			quote[i].className += ' slideOff';
			quote[i + 1].className = 'quote';
			break;
		} else if (quote[i].className === 'quote' && i === quote.length - 1) {
			quote[i].className += ' slideOff';
			quote[0].className = 'quote';
			break;
		}
	}
}

function backQuote() {
	for (var i = 3; i >= 0; i--) {
		if (quote[i].className === 'quote' && i !== 0) {
			quote[i].className += ' slideOff';
			quote[i - 1].className = 'quote';
			break;
		} else if (quote[i].className === 'quote' && i === 0) {
			quote[i].className += ' slideOff';
			quote[3].className = 'quote';
			break;
		}
	}
}
