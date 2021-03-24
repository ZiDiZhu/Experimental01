class Play extends Phaser.Scene {

  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    console.log(`playscene created!!`);
    this.clown = this.add.image(100,100, `clown`);

    this.avatar = this.physics.add.sprite(200,200,`avatar`);

    //put this into a separate function!
    this.anims.create({
      key: `avatar-moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start:0,
        end: 7
      }),
      frameRate: 30,
      repeat: -1
    });

    this.avatar.setVelocityX(0);
    this.avatar.play(`avatar-moving`);
    this.avatar.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(100);
    } else if (this.cursors.up.isDown ) {
      this.avatar.setVelocityY(-100);
    } else if (this.cursors.down.isDown ) {
      this.avatar.setVelocityY(100);
    } else {
      this.avatar.setVelocityX(0);
  }

  if (this.avatar.body.velocity.x !== 0 ||this.avatar.body.velocity.y!== 0 ) {
    this.avatar.play(`avatar-moving`);
  }

}

}
