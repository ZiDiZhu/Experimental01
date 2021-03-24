/**
Phaser Test
*/

"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height:600,
  physics: {
    default: `arcade`
  },
  scene: [Boot,Play]
};

let game = new Phaser.Game(config);

let titleText = `TESTESTTTSSSSS`

let titleStyle = {
  fontFamily: `sans-serif`,
  fontSize: 64,
  color: `#00ff00`
}
