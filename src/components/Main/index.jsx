/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import styled from 'styled-components';
import { Game, Scale, CANVAS } from 'phaser';
import Scene1 from 'phaser/scenes/Scene1';
// import create from './create';
// import PT from 'proptypes';

const propTypes = {};
const defaultProps = {};


const Main = () => {
  // React.useEffect(() => {});
  const config = {
    parent: 'phaserParent',
    type: CANVAS,
    width: 880,
    height: 500,
    scale: {
      mode: Scale.WIDTH_CONTROLS_HEIGHT,
      parent: 'phaserParent',
      expandParent: true,
      width: '100%',
      // height: 600,
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
  };

  const phaserGame = new Game(config);

  return <MainOuter id="phaserParent" />;
};
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;

const MainOuter = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: black;
`;
