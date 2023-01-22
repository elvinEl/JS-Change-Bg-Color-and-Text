let quotes = [];
var colors = ["#007DF4", "#F4002C", "#64FF00", "#FFFB00", "#483798", "#0C8980", "#FFFD68"];

function getQuotes() {
    fetch('https://type.fit/api/quotes').then(Response => {
        return Response.json();
    }).then(data => {
        quotes = data;

        Change();
    })
}

function Change() {
    let element = quotes.length;
    let rndNum = Math.floor(Math.random() * element);

    document.getElementById('text').innerText = quotes[rndNum].text;
    document.getElementById('author').innerText = quotes[rndNum].author;


    let changeCLR = Math.floor(Math.random() * 7);
    document.body.style.backgroundColor = colors[changeCLR];

}

function getTwitter() {
    let elvin = document.getElementById('text').innerText;
    window.location.href='https://twitter.com/?lang=ru'+encodeURIComponent(elvin);
}






getQuotes();