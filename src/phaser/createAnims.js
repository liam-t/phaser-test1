const createAnims = (scene) => {
  scene.anims.create({
    key: 'idle',
    frames: scene.anims.generateFrameNames('player', {
      prefix: 'idle-',
      start: 1,
      end: 4,
    }),
    frameRate: 8,
    repeat: -1,
  });
  scene.anims.create({
    key: 'jump',
    frames: scene.anims.generateFrameNames('player', {
      prefix: 'jump-',
      start: 1,
      end: 7,
    }),
    frameRate: 8,
    // repeat: -1,
  });
  scene.anims.create({
    key: 'jumpIdle',
    frames: scene.anims.generateFrameNames('player', {
      prefix: 'jump-',
      start: 7,
      end: 7,
    }),
    frameRate: 8,
    // repeat: -1,
  });
  scene.anims.create({
    key: 'kick',
    frames: scene.anims.generateFrameNames('player', {
      prefix: 'kick-',
      start: 1,
      end: 2,
    }),
    frameRate: 8,
    // repeat: -1,
  });
  scene.anims.create({
    key: 'forward',
    frames: scene.anims.generateFrameNames('player', {
      prefix: 'forward-',
      start: 1,
      end: 6,
    }),
    frameRate: 8,
    repeat: -1,
  });
  scene.anims.create({
    key: 'backward',
    frames: scene.anims.generateFrameNames('player', {
      prefix: 'backward-',
      start: 1,
      end: 6,
    }),
    frameRate: 8,
    repeat: -1,
  });
  scene.anims.create({
    key: 'turn',
    frames: scene.anims.generateFrameNames('player', {
      prefix: 'turn-',
      start: 1,
      end: 6,
    }),
    frameRate: 8,
  });
};

export default createAnims;
