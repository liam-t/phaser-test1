/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import styled from 'styled-components';
import { Game, CANVAS } from 'phaser';
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
    width: window.innerWidth,
    height: 500,
    backgroundColor: '#000000',
    scene: [Scene1],
    pixelArt: true,
    renderer: {
      gameContext: {
        imageSmoothingEnabled: false, // :(
      },
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 9000,
        },
      },
    },
  };

  new Game(config);

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
