const getMetaData = require('metadata-scraper')
// FUNCTIONS
function changeimage(newimage){
  document.getElementsByTagName("img")[0].src=newimage;
}
// Randomizer
function rnd_link() {
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let c = Math.floor(Math.random() * 10);
  let d = Math.floor(Math.random() * 10);
  let string = '';
  let rnd_char;
  for (let i = 0; i < 2; i++) {
      rnd_char = Math.floor((Math.random() * 25) + 97);
      string += String.fromCharCode(rnd_char)
  }
  rUrl = 'https://prnt.sc/' + string + a + b + c + d

  getMetaData(rUrl).then((data) => {
	console.log(data)
  })
}