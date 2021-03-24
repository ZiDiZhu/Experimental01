class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  preload(){
    this.load.image(`clown`,`assets/images/clown.png`);

    this.load.on(`complete`, () => {
    this.scene.start(`play`);
    });

    this.load.spritesheet("avatar", "assets/images/anim.png", {
      frameWidth: 488,
      frameHeight: 561,
      endFrame: 7,
    });

  }

  create() {
    let titleText = `TESTESTTTSSSSS Loading...`

    let titleStyle = {
      fontFamily: `sans-serif`,
      fontSize: `64px`,
      color: `#00ff00`
    }
    this.add.text(100,200, titleText, titleStyle);
  }

  update() {

  }

}
