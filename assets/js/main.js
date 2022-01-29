(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);


// category list:
window.onload = function(){
	let displayCategory3 = allEmails.map(function(item){
		return `<div class="col-4 col-6-medium col-12-small" >
					<article class="box style2" id=${item.id}>
						<a href=${item.link} class="image featured"><img src=${item.img} alt=${item.alt} /></a>
						<h3><a href=${item.link}>${item.projectName}</a></h3>
						<p>${item.text}</p>
					</article>
				</div>`
	});
	displayCategory3 = displayCategory3.join("");
	rows.innerHTML = displayCategory3;
}
const allEmails=[
	{
		id:1,
		img: "./images/avast-thumbnail.webp",
		alt: "project-1",
		projectName: "Promotional Email",
		text: "promotional email for avast.",
		link: "././projects/promo/avast.html",
	},
	{
		id:2,
		img: "./images/animoto-thumbnail.webp",
		alt: "project-3",
		projectName: "Promotional Email",
		text: "promotional email for animoto.",
		link: "././projects/promo/animoto.html",
	},
	{
		id:3,
		img: "./images/shutter-thumbnail.webp",
		alt: "project-2",
		projectName: "Promotional Email",
		text: "promotional email for shutterstock.",
		link: "././projects/promo/shutterstock.html",
	},
	{
		id:4,
		img: "./images/visme-thumbnail.webp",
		alt: "project-1",
		projectName: "Newsletter Email",
		text: "Newsletter email for visme.",
		link: "././projects/promo/visme.html",
	},
	{
		id:5,
		img: "./images/nshutter-thumbnail.webp",
		alt: "project-2",
		projectName: "Newsletter Email",
		text: "Newsletter email for shutterstock.",
		link: "././projects/promo/newsletter-shutter.html",
	},
	{
		id:6,
		img: "./images/gumroad-thumbnail.webp",
		alt: "project-3",
		projectName: "Newsletter Email",
		text: "Newsletter email for gumroad.",
		link: "././projects/promo/gumroad.html",
	},
	{
		id:7,
		img: "./images/landing-page-one.webp",
		alt: "project-1",
		projectName: "Landing Page",
		text: "",
		link: "././projects/promo/landingpage-one.html",
	},
	{
		id:8,
		img: "./images/landing-page-two.webp",
		alt: "project-2",
		projectName: "Landing Page",
		text: "",
		link: "././projects/promo/landingpage-two.html",
	},
	{
		id:9,
		img: "./images/landingpage-three.webp",
		alt: "project-3",
		projectName: "Landing Page",
		text: "",
		link: "././projects/promo/landingpage-three.html",
	}
];
const promoEmails = [
			{
				id:1,
				img: "./images/avast-thumbnail.webp",
				alt: "project-1",
				projectName: "Promotional Email",
				text: "promotional email for avast.",
				link: "././projects/promo/avast.html",
			},
			{
				id:2,
				img: "./images/animoto-thumbnail.webp",
				alt: "project-3",
				projectName: "Promotional Email",
				text: "promotional email for animoto.",
				link: "././projects/promo/animoto.html",
			},
			{
				id:3,
				img: "./images/shutter-thumbnail.webp",
				alt: "project-2",
				projectName: "Promotional Email",
				text: "promotional email for shutterstock.",
				link: "././projects/promo/shutterstock.html",
			},
];
const newsletters = [
	{
		id:1,
		img: "./images/visme-thumbnail.webp",
		alt: "project-1",
		projectName: "Newsletter Email",
		text: "Newsletter email for visme.",
		link: "././projects/promo/visme.html",
	},
	{
		id:2,
		img: "./images/nshutter-thumbnail.webp",
		alt: "project-2",
		projectName: "Newsletter Email",
		text: "Newsletter email for shutterstock.",
		link: "././projects/promo/newsletter-shutter.html",
	},
	{
		id:3,
		img: "./images/gumroad-thumbnail.webp",
		alt: "project-3",
		projectName: "Newsletter Email",
		text: "Newsletter email for gumroad.",
		link: "././projects/promo/gumroad.html",
	},
];
const landingPages = [
	{
		id:1,
		img: "./images/landing-page-one.webp",
		alt: "project-1",
		projectName: "Landing Page",
		text: "",
		link: "././projects/promo/landingpage-one.html",
	},
	{
		id:2,
		img: "./images/landing-page-two.webp",
		alt: "project-2",
		projectName: "Landing Page",
		text: "",
		link: "././projects/promo/landingpage-two.html",
	},
	{
		id:3,
		img: "./images/landingpage-three.webp",
		alt: "project-3",
		projectName: "Landing Page",
		text: "",
		link: "././projects/promo/landingpage-three.html",
	},
];
const categoryOne = document.querySelector(".one"),
	  categoryTwo = document.querySelector(".two"),
	  categoryFour = document.querySelector(".four"),
	  categoryAll = document.querySelector(".all");
const rows = document.querySelector(".second");

categoryOne.onclick = function(){
	let displayCategory = promoEmails.map(function(item){
		return `<div class="col-4 col-6-medium col-12-small" >
					<article class="box style2" id=${item.id}>
						<a href=${item.link} class="image featured"><img src=${item.img} alt=${item.alt} /></a>
						<h3><a href=${item.link}>${item.projectName}</a></h3>
						<p>${item.text}</p>
					</article>
				</div>`
	});
	displayCategory = displayCategory.join("");
	rows.innerHTML = displayCategory;
};
categoryTwo.onclick = function(){
	let displayCategory2 = newsletters.map(function(item){
		return `<div class="col-4 col-6-medium col-12-small" >
					<article class="box style2" id=${item.id}>
						<a href=${item.link} class="image featured"><img src=${item.img} alt=${item.alt} /></a>
						<h3><a href=${item.link}>${item.projectName}</a></h3>
						<p>${item.text}</p>
					</article>
				</div>`
	});
	displayCategory2 = displayCategory2.join("");
	rows.innerHTML = displayCategory2;
};
categoryFour.onclick = function(){
	let displayCategory4 = landingPages.map(function(item){
		return `<div class="col-4 col-6-medium col-12-small" >
					<article class="box style2" id=${item.id}>
						<a href=${item.link} class="image featured"><img src=${item.img} alt=${item.alt} /></a>
						<h3><a href=${item.link}>${item.projectName}</a></h3>
						<p>${item.text}</p>
					</article>
				</div>`
	});
	displayCategory4 = displayCategory4.join("");
	rows.innerHTML = displayCategory4;
};
categoryAll.onclick = function(){
	let displayCategory3 = allEmails.map(function(item){
		return `<div class="col-4 col-6-medium col-12-small" >
					<article class="box style2" id=${item.id}>
						<a href=${item.link} class="image featured"><img src=${item.img} alt=${item.alt} /></a>
						<h3><a href=${item.link}>${item.projectName}</a></h3>
						<p>${item.text}</p>
					</article>
				</div>`
	});
	displayCategory3 = displayCategory3.join("");
	rows.innerHTML = displayCategory3;
};