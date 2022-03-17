function getRandom(min, max){
    return Math.floor((Math.random() * max ) + min);
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

function getRandomString(){
    let makan = 
    [
        "Nasgor depan bengkel", 
        "Maba", 
        "Geprek Sepuasnya", 
        "Ayam 15k",
        "Soup depan",
        "Rocket",
        "Masak saja",
        "Mekdi",
        "Piza hat",
        "berger king",
        "Kaefsi",
        "siefsi",
        "Nasi Uduk",
        "Tempat Baru"
    ];
    
    let makanSize = Object.keys(makan).length;
    let makan2 = makan[getRandom(0, makanSize)];
    let time = 0;
    const timer = setInterval(() => {
      let randomWords = makeid(10);
      document.getElementById('makan').textContent = randomWords;
      time += 50;
      if (time === 2000) {
        document.getElementById('makan').textContent = makan2;
        clearInterval(timer);
      }
    }, 10);
}