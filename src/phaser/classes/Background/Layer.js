import { GameObjects } from 'phaser';

class Layer extends GameObjects.TileSprite {
  constructor(scene, textureKey) {
    const {
      canvas: {
        width,
        height,
      },
    } = scene.sys.game;
    super(scene, 0, 0, width, height, textureKey);
  }
}

export default Layer;
