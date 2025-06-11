window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	const navbar = document.querySelector('.navbar');
	

	// Close the navbar menu when a menu item is clicked
	menu_btn.addEventListener('click', () => {
	  menu_btn.classList.remove('show');
	  mobile_menu.classList.remove('show');
	});

	// Close the navbar menu when the toggle button is clicked
	menu_btn.addEventListener('click', () => {
	  if (!mobile_menu.classList.contains('show')) {
	    mobile_menu.classList.add('show');
	  } else {
	    mobile_menu.classList.remove('show');
	  }
	});

	// Close the navbar menu when the user clicks outside of it
	document.addEventListener('click', (event) => {
	  const target = event.target;
	  if (!target.closest('.navbar') && mobile_menu.classList.contains('show')) {
	    mobile_menu.classList.remove('show');
	  }
	});


}