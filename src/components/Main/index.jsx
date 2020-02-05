/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import styled from 'styled-components';
import GameWrap from 'components/GameWrap';
// import create from './create';
// import PT from 'proptypes';

const propTypes = {};
const defaultProps = {};


const Main = () => {
  const [testVal, setTestVal] = React.useState(0);

  return (
    <>
      <p>testVal: {testVal}</p>
      <MainOuter>
        <GameWrap
          reactSetter={setTestVal}
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
  height: 100vh;
  background-color: black;
`;
