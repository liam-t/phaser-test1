/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import styled from 'styled-components';
import GameWrap from 'components/GameWrap';
// import create from './create';
// import PT from 'proptypes';

const propTypes = {};
const defaultProps = {};


const Main = () => {
  const [phaserCamXPos, setPhaserCamXPos] = React.useState(0);

  return (
    <>
      <PhaserData>phaserCamXPos: {phaserCamXPos}</PhaserData>
      <MainOuter>
        <GameWrap
          reactSetter={setPhaserCamXPos}
        />
      </MainOuter>
    </>
  );
};
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;

const MainOuter = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  margin-bottom: 20vh;
`;

const PhaserData = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 1em 2em;
`;
