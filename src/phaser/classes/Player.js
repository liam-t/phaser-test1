import { GameObjects, Input } from 'phaser';
import createAnims from 'phaser/createAnims';

class Player extends GameObjects.Sprite {
  static assignUpdateFunction(thisClass, scene) {
    const sceneUpdate = scene.update;
    scene.setUpdate(() => {
      sceneUpdate();
      thisClass.update();
    });
  }

  static configurePhysics(thisClass, scene) {
    scene.physics.world.enableBody(thisClass);
    thisClass.body.setBounce(0.2);
    thisClass.body.setCollideWorldBounds(true);
  }


  constructor(scene) {
    const {
      canvas: {
        width,
        height,
      },
    } = scene.sys.game;
    super(scene, width * 0.1, height * 0.9, 'player');

    this.scene = scene;

    createAnims(scene);

    this.keys = scene.input.keyboard.addKeys({
      left: Input.Keyboard.KeyCodes.A,
      right: Input.Keyboard.KeyCodes.D,
      up: Input.Keyboard.KeyCodes.W,
      down: Input.Keyboard.KeyCodes.S,
      kick: Input.Keyboard.KeyCodes.I,
    });

    this.jumpTimer = 0;

    Player.configurePhysics(this, scene);
    Player.assignUpdateFunction(this, scene);

    this.setScale(2);
    this.anims.play('idle');
  }

  jump() {
    this.anims.play('jump', true);
    this.body.velocity.y = -2400;
    this.jumpTimer = this.scene.game.loop.time + 750;
  }

  kick() {
    this.anims.play('kick', true);
  }

  walkBackward() {
    this.body.setVelocityX(-300);
    this.anims.play('backward', true);
    this.flipX = false;
  }

  walkForward() {
    this.body.setVelocityX(300);
    this.anims.play('forward', true);
    this.flipX = false;
  }

  idle() {
    this.body.setVelocityX(0);
    this.anims.play('idle', true);
  }

  update() {
    const {
      left,
      right,
      up,
      kick,
    } = this.keys;

    if (kick.isDown) this.kick();
    else if (left.isDown) this.walkBackward();
    else if (right.isDown) this.walkForward();
    else if (!this.body.onFloor()) this.anims.play('jumpIdle');
    else this.idle();

    if (
      up.isDown && this.body.onFloor() && this.scene.game.loop.time > this.jumpTimer
    ) this.jump();
  }
}

export default Player;
