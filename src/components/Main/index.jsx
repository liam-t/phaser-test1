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
  const config = {
    type: CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#7d7d7d',
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

  return (
    <MainOuter>
      <p>This is Main</p>
    </MainOuter>
  );
};
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;

const MainOuter = styled.div``;
