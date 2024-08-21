const boxCount = 9000;
const sounds = ['Gnorc1.wav','Gnorc2.wav','Gnorc3.wav','Gnorc4.wav','Gnorc5.wav','Gnorc6.wav',];

for(i=0; i<boxCount;i++) {
    let tile = document.createElement('div');
    tile.className = "tile";
    tile.id = i;
    tile.style.backgroundColor = randomColor();
    document.body.appendChild(tile);

    tile.addEventListener("mouseover", (event) => mouseReaction(tile,1));
    tile.addEventListener("mouseleave", (event) => mouseReaction(tile,0));
}

function randomColor() {
    color = Math.floor(Math.random()*16777215).toString(16);
    while (color.length < 6) {
        color = 0 + color;
    }
    color = "#" + color;
    return color;
}

function mouseReaction(element,presence) {
    console.log(element);
    element.style.backgroundColor = randomColor();
    element.style.backgroundImage = 'none';

    diceRoll = Math.floor(Math.random()*10);

    if (presence == 1 && diceRoll == 0) {
        element.style.backgroundImage = "url('Charles, No!/charles.jpg')";
        let player = new Audio(sounds[Math.floor(Math.random()*sounds.length)])
        player.play();
    }
}