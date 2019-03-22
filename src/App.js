import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lamp>
          <LampChord />
          <LampShade />
          <LightBeam />
        </Lamp>
      </div>
    );
  }
}

const Lamp = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  animation: swing 4s infinite;
  transform-origin: top;
  animation-timing-function: ease-in-out;

  @keyframes swing {
    0% {transform: rotate(-35deg);}
    50% {transform: rotate(35deg);}
    100% {transform: rotate(-35deg);}
  }
`;

const LampShade = styled.div`
  display: block;
  width: 100px;
  height: 85px;
  border-radius: 50% 50% 0 0;
  margin: 0 auto;
  border: 2px solid white;
`;

const LampChord = styled.div`
  position: relative;
  width: 2px;
  background-color: white;
  height: 30vh;
  margin: 0 auto;
  margin-bottom: -15vh;
  transform: translateY(-50%);
`;

const LightBeam = styled.div`
  border-bottom: 150vh solid red;
  border-left: 30vw solid transparent;
  border-right: 30vw solid transparent;
  height: 0;
  margin: 0 auto;
  width: 75px;
`;

export default App;
