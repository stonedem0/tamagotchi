var game = new Phaser.Game(1100, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

// function f () {
//     localValue = localStorage.getItem('myKey');
//     console.log(localValue + 'ss');
// }


function preload() {

    // game.load.image('ground', 'assets/block.png');
    // game.load.image('mushroom', 'assets/mush1.png');
    // game.load.image('enemy', 'assets/enemy1.png');
    game.load.image('back', 'assets/back.png');
    game.load.image('button', 'assets/button.png');
    game.load.spritesheet('panda', 'assets/red-panda.png', 50, 50);
    game.load.spritesheet('dude', 'assets/dude.png', 32, 46);
    game.load.spritesheet('pdude','assets/red-panda-move.png', 50, 46);

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
var anim;
var mummy;
var back;
var button;
var end;
var start;
var startTime;
var endTime;
var button1;
// var store = require('store');
// var localValue;

function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);

    // game.stage.backgroundColor = '#626BCB';


    back = game.add.tileSprite(0, 0, 400, 600, 'back');
    back.scale.set(2);
    back.smoothed = false;



    // player.animations.play('swim', 30, true);
    // back = game.add.image(0, -400, 'lazur');
    // back.scale.set(2);
    // back.smoothed = false;
    player = game.add.sprite(32, game.world.height - 150, 'panda');

    mummy = game.add.sprite(200, 360, 'pdude', 5);
    mummy.scale.set(4);
    mummy.smoothed = true;
    anim = mummy.animations.add('walk');
    // mummy.animation.loop = true;
    anim.play(2, true);


    button = game.add.button(100, 100, 'button', feed, this, 2, 1, 0);
    button1 = game.add.button(300, 300, 'button', getStore, this, 2, 1, 0);


    hungerText = game.add.text(50, 16, 'hunger: 0', {fontSize: '10px', fill: '#000'});
    hygieneText = game.add.text(200, 16, 'hygiene: 0', {fontSize: '10px', fill: '#000'});
    smartText = game.add.text(360, 16, 'smart: 0', {fontSize: '10px', fill: '#000'});
    activeText = game.add.text(480, 16, 'active: 0', {fontSize: '10px', fill: '#000'});
    happyText = game.add.text(620, 16, 'happy: 0', {fontSize: '10px', fill: '#000'});
    energyText = game.add.text(750, 16, 'energy: 0', {fontSize: '10px', fill: '#000'});
    ageText = game.add.text(900, 16, 'age: 0', {fontSize: '10px', fill: '#000'});
}

function feed () {
    hunger ++;
    hungerText.text = 'hunger:' + hunger;
    // console.log('br' + hunger);
    if(hunger > 10){
        hungerText.text = 'done!';
        store.set('hunger',  hunger);
        return
        // console.log(hunger);
    }
    // console.log(hunger);

    // time();
}

function getStore() {
    console.log(store.get('hunger'));

}


// getStore();

function time() {
    start = new Date();
    startTime = start.getTime();
    // saveLocal();
    // return startTime;
    // console.log(startTime);


    // var res;
    // function cancTime() {
    //   res = startTime - endTime;
    // }
    // // for (var i = 0; i < 10; i++) {
    // //     Math.sqrt(i);
    // // }
    //
    // end = new Date();
    // var endTime = end.getTime();
    // cancTime();
    // // var res = endTime - startTime;
    //
    // console.log(startTime, endTime);
}

// function saveLocal() {
//     var stringTime = String(startTime);
//     localStorage.setItem('myKey', stringTime);
//
// }


function hungerCheck () {
    end = new Date();
    endTime = end.getTime();
    var res = endTime - startTime;
    if (res > 10000){
        hungerText.text = 'want eat!';
        return;
    }
    console.log(res);

}

setInterval(hungerCheck, 1000);


function update () {

    if (anim.isPlaying)
    {
        back.tilePosition.x += 1;
    }

}



f();

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