var isMobile = false
if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = true
}

var adImageElement = document.getElementById("banner");
var adLinkElement = document.getElementById("bannerLink");

//ad display on smaller screens
var adImageElementM = document.getElementById("bannerM");
var adLinkElementM = document.getElementById("bannerLinkM");

//ADS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ad1 = {
	"src": "img/banners/webring.gif",
	"link": "https://deltarune.com/code/",
	"alt": "This site is part of a game glitches and secrets Web Ring!",
	"title": "Games, glitches, and secrets blog"
}

ad2 = {
	"src": "img/banners/superemail.gif",
	"link": "https://siderealplexus.com/",
	"alt": "SUPER EMAIL",
	"title": "More information"
}

ad3 = {
	"src": "img/banners/SALE.gif",
	"link": "forsale",
	"alt": "SALE!",
	"title": "SALE! SALE! SALE!"
}

ad4 = {
	"src": "img/banners/fish.gif",
	"link": "fish",
	"alt": "NATIONAL FISHING DAY!",
	"title": "my favourite fish,,, the crap"
}

ad5 = {
	"src": "img/banners/tbucks.gif",
	"link": "https://tetriotbucksgenerator.weebly.com/",
	"alt": "You know the puzzle game, the label is usually the time it’s available in your browser is in and multiplayer game. It is a fantastic, players of all skill levels, clone Tetr.io on the other side features a variety of loathsome things. If you want to sharpen your skills in the Sprint mode, or you’d like a short session of Marathon to act Tetr.io has you covered.Tetr.io what makes it so special level of each player has a developer. Minute details like a soft cast and will do well affairs Manual shift and can not wait to be car",
	"title": "You know the puzzle game, the label is usually the time it’s available in your browser is in and multiplayer game. It is a fantastic, players of all skill levels, clone Tetr.io on the other side features a variety of loathsome things. If you want to sharpen your skills in the Sprint mode, or you’d like a short session of Marathon to act Tetr.io has you covered.Tetr.io what makes it so special level of each player has a developer. Minute details like a soft cast and will do well affairs Manual shift and can not wait to be carefully adjusted – if only for what you are perfect for any casual player default options. Because the people are many, is the ultimate tetris Tetr.io all those who knew of the barrier but a poor man out of the abundance of his features and the rich man to the players. TETR.IO t-bucks Hack is a current version and has been vigorously tested on large amount of angles and now it's develop a many powerful online software to gain unpaid TETR.IO t-bucks that is merely a currency of TETR.IO. TETR.IO hack is updated regularly with databases and we've a easy and yet powerful system in position which supports us to have the free TETR.IO t-bucks in probably the most efficient and best likely way at that time in time. We assure you that it's 100 percent safe and secured way to have probably the most desired free TETR.IO t-bucks Hack. The each of new TETR.IO hack is currently updated on 2014. Which means the powerful backend is without a doubt compliant with the changes which occur at TETR.IO updates. TETR.IO hack is coded in the autoit and python languages. It takes no.net framework or different dependencies and will work on every browsers."
}

adJOLLY = {
	"src": "img/banners/jolly.gif",
	"link": "",
	"alt": "the jolliest ad ever",
	"title": "Ho! Ho! Ho!"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ad_secret1 = {
	"src": "img/banners/wtf.gif",
	"link": "https://myanimelist.net/profile/junnji",
	"alt": "My anime list",
	"title": "this guy is weird..."
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ads = [ad3, ad4, ad5];
ads_secret = [ad_secret1];

//ads = [adJOLLY]
//ads_secret = [adJOLLY]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var secretOrNah = Math.floor(Math.random() * 100);
var table;
console.log(secretOrNah);
if (secretOrNah <= 3) {
	table = ads_secret;
	console.log(":)");
}
else {
	table = ads;
}

var whichad = Math.floor(Math.random() * (table.length));
if (isMobile == true) { // switch to compressed image if on mobile
	table[whichad]["src"] = table[whichad]["src"].replace('.gif', '_compressed.gif');
}
console.log("ad: " + table[whichad]["src"]);

adImageElement.src = table[whichad]["src"];
adImageElement.alt = table[whichad]["alt"];
adLinkElement.href = table[whichad]["link"];
adLinkElement.title = table[whichad]["title"];

adImageElementM.src = table[whichad]["src"];
adImageElementM.alt = table[whichad]["alt"];
adLinkElementM.href = table[whichad]["link"];
adLinkElementM.title = table[whichad]["title"];

//BUTTONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

button1 = {
    "src": "img/buttons/spinningbanana.png",
	"link": "",
    "target": ""
}

button2 = {
    "src": "img/buttons/bananaclub.gif",
	"link": "https://helloimbanana.neocities.org/",
    "target": "_blank"
}

button3 = {
    "src": "img/buttons/construction.gif",
	"link": "",
    "target": ""
}

button4 = {
    "src": "img/buttons/blender.gif",
	"link": "https://www.blender.org/",
    "target": "_blank"
}

button5 = {
    "src": "img/buttons/githubPages.png",
	"link": "https://pages.github.com/",
    "target": "_blank"
}

button6 = {
    "src": "img/buttons/tcrf.png",
	"link": "https://tcrf.net/The_Cutting_Room_Floor",
    "target": "_blank"
}

button7 = {
    "src": "img/buttons/pdn.gif",
	"link": "https://www.getpaint.net/",
    "target": "_blank"
}

button8 = {
    "src": "img/buttons/modarchive.gif",
	"link": "https://modarchive.org/",
    "target": "_blank"
}

button9 = {
    "src": "img/buttons/texturetown.gif",
	"link": "http://textures.neocities.org",
    "target": "_blank"
}

button10 = {
    "src": "img/buttons/88x31.png",
	"link": "https://eightyeightthirty.one/",
    "target": "_blank"
}

button11 = {
    "src": "img/buttons/vh32.png",
	"link": "https://validator.w3.org/nu/?doc=https%3A%2F%2Fspinningbanana.com%2F",
    "target": "_blank"
}

button12 = {
    "src": "img/buttons/qmaury.gif",
	"link": "https://qmaury.com/",
    "target": "_blank"
}

button13 = {
    "src": "img/buttons/2value.png",
	"link": "",
    "target": ""
}

buttons = [
    button1, button2, button3, button4, button5, 
    button6, button7, button8, button9, button10,
    button11, button13
];

for (let i = 1; i <= 6; i++) {
    var link = document.getElementById("buttonLink-" + i);
    var img = document.getElementById("button-" + i);

    var whichButton = Math.floor(Math.random() * (buttons.length));
    link.href = buttons[whichButton]["link"];
    link.target = buttons[whichButton]["target"];
    img.src = buttons[whichButton]["src"];
    buttons.splice(whichButton, 1);
}
