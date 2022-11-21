var isMobile = false
if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true
}

var adImageElement = document.getElementById("banner");
var adLinkElement = document.getElementById("bannerLink");

//ad display on smaller screens
var adImageElementM = document.getElementById("bannerM");
var adLinkElementM = document.getElementById("bannerLinkM");

//ADS
if (isMobile==false) {
	ad1 = {
		"src": "img/banners/webring.gif",
		"link": "https://deltarune.com/code/",
		"alt": "This site is part of a game glitches and secrets Web Ring!"
	};
	
	ad2 = {
		"src": "img/banners/superemail.gif",
		"link": "https://siderealplexus.com/",
		"alt": "SUPER EMAIL"
	};
	
	ad3 = {
		"src": "img/banners/SALE.gif",
		"link": "forsale",
		"alt": "SALE!"
	};
	
	ad4 = {
		"src": "img/banners/fish.gif",
		"link": "fish",
		"alt": "NATIONAL FISHING DAY!"
	};
	
	ad5 = {
		"src": "img/banners/tbucks.gif",
		"link": "https://tetriotbucksgenerator.weebly.com/",
		"alt": "You know the puzzle game, the label is usually the time it’s available in your browser is in and multiplayer game. It is a fantastic, players of all skill levels, clone Tetr.io on the other side features a variety of loathsome things. If you want to sharpen your skills in the Sprint mode, or you’d like a short session of Marathon to act Tetr.io has you covered.Tetr.io what makes it so special level of each player has a developer. Minute details like a soft cast and will do well affairs Manual shift and can not wait to be car"
	};
} else {
	ad1 = {
		"src": "img/banners/webring_compressed.gif",
		"link": "https://deltarune.com/code/",
		"alt": "This site is part of a game glitches and secrets Web Ring!"
	};
	
	ad2 = {
		"src": "img/banners/superemail.gif",
		"link": "https://siderealplexus.com/",
		"alt": "SUPER EMAIL"
	};
	
	ad3 = {
		"src": "img/banners/SALE_compressed.gif",
		"link": "forsale",
		"alt": "SALE!"
	};
	
	ad4 = {
		"src": "img/banners/fish_compressed.gif",
		"link": "fish",
		"alt": "NATIONAL FISHING DAY!"
	};
	
	ad5 = {
		"src": "img/banners/tbucks_compressed.gif",
		"link": "https://tetriotbucksgenerator.weebly.com/",
		"alt": "You know the puzzle game, the label is usually the time it’s available in your browser is in and multiplayer game. It is a fantastic, players of all skill levels, clone Tetr.io on the other side features a variety of loathsome things. If you want to sharpen your skills in the Sprint mode, or you’d like a short session of Marathon to act Tetr.io has you covered.Tetr.io what makes it so special level of each player has a developer. Minute details like a soft cast and will do well affairs Manual shift and can not wait to be car"
	};
}

ads = [ad1, ad2, ad3, ad4, ad5];

var whichad = Math.floor(Math.random()*(ads.length));
adImageElement.src = ads[whichad]["src"];
adImageElement.alt = ads[whichad]["alt"];
adLinkElement.href = ads[whichad]["link"];

adImageElementM.src = ads[whichad]["src"];
adImageElementM.alt = ads[whichad]["alt"];
adLinkElementM.href = ads[whichad]["link"];