var game = new Phaser.Game(1100, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

function preload() {

    // game.load.image('ground', 'assets/block.png');
    // game.load.image('mushroom', 'assets/mush1.png');
    // game.load.image('enemy', 'assets/enemy1.png');
    game.load.spritesheet('panda', 'assets/red-panda.png', 50, 50);

}

var hunger = 0; //full = 10
var hygiene = 0;
var smart = 0;
var active = 0;
var happy = 0;
var energy  = 0;
var age = 0;
var player;
var hungerText;
var hygieneText;
var smartText;
var activeText;
var happyText;
var energyText;
var ageText;


function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#626BCB';

    player = game.add.sprite(32, game.world.height - 150, 'panda');
    hungerText = game.add.text(50, 16, 'hunger: 0', {fontSize: '10px', fill: '#000'});
    hygieneText = game.add.text(200, 16, 'hygiene: 0', {fontSize: '10px', fill: '#000'});
    smartText = game.add.text(360, 16, 'smart: 0', {fontSize: '10px', fill: '#000'});
    activeText = game.add.text(480, 16, 'active: 0', {fontSize: '10px', fill: '#000'});
    happyText = game.add.text(620, 16, 'happy: 0', {fontSize: '10px', fill: '#000'});
    energyText = game.add.text(750, 16, 'energy: 0', {fontSize: '10px', fill: '#000'});
    ageText = game.add.text(900, 16, 'age: 0', {fontSize: '10px', fill: '#000'});
}

function update () {

}


function feed () {

}

function shower () {

}

function read() {

}
function sport () {

}

function sleep () {

}

function play () {

}