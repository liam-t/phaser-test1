import { Scene, Input } from 'phaser';
import characterSpriteSheet from 'assets/sprites/ryu/ryu1.spr';
import characterAtlas from 'assets/sprites/ryu/ryu1.atlas';
import createAnims from 'phaser/createAnims.js'

class Scene1 extends Scene {
  constructor() {
    super('Scene1');
    this.character = null;
  }

  preload() {
    this.load.atlas(
      'character',
      characterSpriteSheet,
      characterAtlas,
    );
  }

  create() {
    const { canvas } = this.sys.game;
    const { height } = canvas;
    this.character = this.physics.add.sprite(100, height - 50, 'character');
    this.character.setBounce(0.2); // our player will bounce from items
    this.character.setCollideWorldBounds(true); // don't go out of the map

    createAnims(this);

    this.character.anims.play('idle');

    // this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys({
      left: Input.Keyboard.KeyCodes.A,
      right: Input.Keyboard.KeyCodes.D,
      up: Input.Keyboard.KeyCodes.W,
      down: Input.Keyboard.KeyCodes.S,
      kick: Input.Keyboard.KeyCodes.I,
    });
    console.log('this.keys: %o', this.keys);
  }

  update(time, delta) {
    const {
      left,
      right,
      up,
      down,
      kick,
    } = this.keys;
    if (left.isDown) {
      this.character.body.setVelocityX(-200);
      this.character.anims.play('backward', true);
      this.character.flipX = false;
    } else if (right.isDown) {
      this.character.body.setVelocityX(200);
      this.character.anims.play('forward', true);
      this.character.flipX = false;
    } else if (up.isDown) {
      this.character.body.setVelocityY(-200);
      this.character.anims.play('jump');
    } else if (kick.isDown) {
      this.character.anims.play('kick', true);
    } else {
      this.character.body.setVelocityX(0);
      this.character.anims.play('idle', true);
    }
  }
}

export default Scene1;
