import React from 'react';
import styled from 'styled-components';
import PT from 'proptypes';
import { Game, Scale, CANVAS } from 'phaser';
import Scene1 from 'phaser/scenes/Scene1';

const propTypes = {
  reactSetter: PT.func.isRequired,
};
const defaultProps = {};

const GameWrap = ({ reactSetter }) => {
  const config = {
    parent: 'phaserParent',
    type: CANVAS,
    width: 950,
    height: 500,
    scale: {
      mode: Scale.FIT,
      parent: 'phaserParent',
      expandParent: true,
      autoCenter: Scale.CENTER_BOTH,
    },
    backgroundColor: '#000000',
    scene: [Scene1],
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 9000,
        },
      },
    },
    callbacks: {
      postBoot(game) {
        const [firstScene] = game.scene.scenes;
        firstScene.data.set('setTestVal', reactSetter);
      },
    },
  };

  new Game(config); // eslint-disable-line no-new

  return (
    <GameWrapOuter id="phaserParent" />
  );
};
GameWrap.propTypes = propTypes;
GameWrap.defaultProps = defaultProps;

export default React.memo(
  GameWrap,
);

const GameWrapOuter = styled.div``;
