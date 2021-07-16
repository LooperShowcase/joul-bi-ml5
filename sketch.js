let player;
let pImg;
let oImg;
let bImg;
let obstcles = [];
let gameover;
let wordClassifier;

function preload() {
    pImg = loadImage("player.png")
    oImg = loadImage("obstcle.png")
    bImg = loadImage("bg.png")
    gameover = loadImage("gameover.png")
    let options = {
        probabilityThreshold: 0.85,
    };
    wordClassifier = ml5.soundClassifier("SpeechCommands18w", options)

}


function setup() {
    createCanvas(800, 400);
    player = new Player();
    wordClassifier.classify(heardWord)
}

function heardWord(error, results) {
    if (results[0].label == "up") {
        player.jump();
    }
}

function keyPressed() {
    if (keyCode == 38) {
        player.jump()
    }
}


function draw() {

    background(bImg);
    if (keyIsDown(LEFT_ARROW)) {
        player.walkbackward()
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.walkforward()
    }
    player.show()
    player.move()






    if (random(1) < 0.01) {
        obstcles.push(new Obstcle);
    }

    for (let obs of obstcles) {
        obs.show()
        obs.move()
        if (player.collided(obs) == true) {
            stroke("red")
            textSize(70)
            strokeWeight(10)
            text("Game-Over", 220, height / 2)
            noLoop()
        }
    }
}
