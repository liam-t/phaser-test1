const createAnims = (thisParam) => {
  thisParam.anims.create({
    key: 'idle',
    frames: thisParam.anims.generateFrameNames('character', {
      prefix: 'idle-',
      start: 1,
      end: 4,
    }),
    frameRate: 8,
    repeat: -1,
    // yoyo: true,
  });
  thisParam.anims.create({
    key: 'jump',
    frames: thisParam.anims.generateFrameNames('character', {
      prefix: 'jump-',
      start: 1,
      end: 7,
    }),
    frameRate: 8,
    // repeat: -1,
  });
  thisParam.anims.create({
    key: 'jumpIdle',
    frames: thisParam.anims.generateFrameNames('character', {
      prefix: 'jump-',
      start: 7,
      end: 7,
    }),
    frameRate: 8,
    // repeat: -1,
  });
  thisParam.anims.create({
    key: 'kick',
    frames: thisParam.anims.generateFrameNames('character', {
      prefix: 'kick-',
      start: 1,
      end: 2,
    }),
    frameRate: 8,
    // repeat: -1,
  });
  thisParam.anims.create({
    key: 'forward',
    frames: thisParam.anims.generateFrameNames('character', {
      prefix: 'forward-',
      start: 1,
      end: 6,
    }),
    frameRate: 8,
    repeat: -1,
  });
  thisParam.anims.create({
    key: 'backward',
    frames: thisParam.anims.generateFrameNames('character', {
      prefix: 'backward-',
      start: 1,
      end: 6,
    }),
    frameRate: 8,
    repeat: -1,
  });
  thisParam.anims.create({
    key: 'turn',
    frames: thisParam.anims.generateFrameNames('character', {
      prefix: 'turn-',
      start: 1,
      end: 6,
    }),
    frameRate: 8,
  });
};

export default createAnims;
