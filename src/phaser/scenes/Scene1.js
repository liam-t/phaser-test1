import { Scene, Input } from 'phaser';
import characterSpriteSheet from 'assets/sprites/ryu/ryu1.spr';
import characterAtlas from 'assets/sprites/ryu/ryu1.atlas';
import createAnims from 'phaser/createAnims';

class Scene1 extends Scene {
  constructor() {
    super('Scene1');
    this.character = null;
    this.jumpTimer = 0;
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
    this.character.setScale(2);
    this.character.setBounce(0.2); // our player will bounce from items
    this.character.setCollideWorldBounds(true); // don't go out of the map

    createAnims(this);

    this.character.anims.play('idle');

    this.keys = this.input.keyboard.addKeys({
      left: Input.Keyboard.KeyCodes.A,
      right: Input.Keyboard.KeyCodes.D,
      up: Input.Keyboard.KeyCodes.W,
      down: Input.Keyboard.KeyCodes.S,
      kick: Input.Keyboard.KeyCodes.I,
    });
  }

  update(time, delta) {
    const {
      left,
      right,
      up,
      // down,
      kick,
    } = this.keys;
    if (kick.isDown) {
      this.character.anims.play('kick', true);
    } else if (left.isDown) {
      this.character.body.setVelocityX(-300);
      this.character.anims.play('backward', true);
      this.character.flipX = false;
    } else if (right.isDown) {
      this.character.body.setVelocityX(300);
      this.character.anims.play('forward', true);
      this.character.flipX = false;
    } else if (!this.character.body.onFloor()) {
      this.character.anims.play('jumpIdle');
    } else {
      this.character.body.setVelocityX(0);
      this.character.anims.play('idle', true);
    }

    if (up.isDown && this.character.body.onFloor() && this.game.loop.time > this.jumpTimer) {
      this.character.anims.play('jump', true);
      this.character.body.velocity.y = -2400;
      this.jumpTimer = this.game.loop.time + 750;
    }
  }
}

export default Scene1;
