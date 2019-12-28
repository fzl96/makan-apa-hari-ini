function getRandom(min, max){
    return Math.floor((Math.random() * max ) + min);
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
    document.getElementById("makan").innerHTML = makan[getRandom(0, makanSize)];
}