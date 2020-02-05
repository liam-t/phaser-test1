import { Scene } from 'phaser';
import playerSpriteSheet from 'assets/sprites/ryu/ryu1.spr';
import playerAtlas from 'assets/sprites/ryu/ryu1.atlas';
import Player from 'phaser/classes/Player';
import foreground from 'assets/sprites/industralBackground/foreground.png.img';
import buildings from 'assets/sprites/industralBackground/buildings.png.img';
import farBuildings from 'assets/sprites/industralBackground/far-buildings.png.img';
import bg from 'assets/sprites/industralBackground/bg.png.img';


class Scene1 extends Scene {
  constructor() {
    super('Scene1');
    this.player = null;

    this.bgMap = [
      {
        name: 'bg',
        naturalWidth: 272,
        naturalHeight: 160,
      },
      {
        name: 'farBuildings',
        naturalWidth: 213,
        naturalHeight: 142,
      },
      {
        name: 'buildings',
        naturalWidth: 272,
        naturalHeight: 150,
      },
      {
        name: 'foreground',
        naturalWidth: 272,
        naturalHeight: 104,
      },
    ];
    this.bgLayers = {};
  }

  preload() {
    this.load.atlas(
      'player',
      playerSpriteSheet,
      playerAtlas,
    );
    this.load.image('foreground', foreground);
    this.load.image('buildings', buildings);
    this.load.image('farBuildings', farBuildings);
    this.load.image('bg', bg);
  }

  create() {
    const {
      canvas: {
        width: gameWidth,
        height: gameHeight,
      },
    } = this.sys.game;

    this.setTestVal = this.data.get('setTestVal');

    // const tallestBgLayer = this.bgMap.reduce((acc, item) => Math.max(acc, item.naturalHeight), 0);
    this.bgMap.forEach(({ name, naturalHeight }, i) => {
      // const yOffset = tallestBgLayer - naturalHeight;
      this.bgLayers[name] = this.add.tileSprite(0, gameHeight - ((naturalHeight / 2)), gameWidth * 5, naturalHeight, name);
      this.bgLayers[name].setScale(2);
      this.bgLayers[name].setOrigin(0, 0.75); // why..
      // this.bgLayers[name].tilePositionX = this.cameras.main.scrollX * 0.5 * i;
    });

    this.player = new Player(this);
    this.add.existing(this.player);

    // this.cameras.main.setViewport(200, 150, 400, 300);
    this.physics.world.bounds.setTo(0, 0, gameWidth * 5, gameHeight);
    this.cameras.main.setBounds(0, 0, gameWidth * 5, gameHeight);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1, gameWidth * -0.1);
  }

  update = () => {
    Object.entries(this.bgLayers).forEach(([key, val], i, { length }) => {
      this.bgLayers[key].tilePositionX = this.cameras.main.scrollX * 0.005 * (i * i * i);
      this.bgLayers[key].tilePositionY = this.cameras.main.scrollY * 0.005 * (i * i);
    });

    this.setTestVal(Math.round(this.cameras.main.scrollX));
  };

  setUpdate = (newFunc) => {
    this.update = newFunc;
  };
}

export default Scene1;
