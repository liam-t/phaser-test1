function create() {
  //  Frame debug view
  frameView = this.add.graphics({ fillStyle: { color: 0xff00ff }, x: 32, y: 32 });

  //  Show the whole animation sheet
  this.add.image(32, 32, 'mario', '__BASE').setOrigin(0);

  const config = {
    key: 'walk',
    frames: this.anims.generateFrameNumbers('mario'),
    frameRate: 6,
    yoyo: true,
    repeat: -1,
  };

  anim = this.anims.create(config);
  sprite = this.add.sprite(400, 300, 'mario').setScale(4);
  sprite.anims.load('walk');
  progress = this.add.text(100, 500, 'Progress: 0%', { color: '#00ff00' });

  this.input.keyboard.on('keydown_SPACE', () => {
    sprite.anims.play('walk');
  });

  this.input.keyboard.on('keydown_P', () => {
    if (sprite.anims.isPaused) sprite.anims.resume();
    else sprite.anims.pause();
  });

  this.input.keyboard.on('keydown_R', () => {
    sprite.anims.restart();
  });
}

export default create;
