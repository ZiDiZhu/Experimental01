"use strict";

/**
AudioTest
*/

let anim1;
let sound1;

let state = `paused`; //playing or paused

function preload() {
  anim1 = loadImage('assets/images/melon2.gif');
  sound1 = createAudio('assets/sounds/808drum2.wav');
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  sound1.onended(replay);
}


/**
Description of draw()
*/
function draw() {
  background(20);
  image(anim1,150,150);


}

function mousePressed(){

  if(state === `paused`){
    sound1.play();
    anim1.reset();
    state = `playing`;
  }else if (state === `playing`){
    state = `paused`;
    sound1.stop();
  }
}

function updatePlaying(){
  if (state === `playing`){

  }
}

function replay() {
  sound1.play();
  anim1.reset();
}
