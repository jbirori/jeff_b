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
          <LightBeam>
            <TextSection>
              <Title> Jeff B </Title>
              <ProjectLink> Dial Up </ProjectLink>
              <ProjectLink> Rogue Agency </ProjectLink>
              <ProjectLink> Lyrical Lemonade </ProjectLink>
            </TextSection>
          </LightBeam>
        </Lamp>
      </div>
    );
  }
}

const Lamp = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  animation: swing 6s infinite;
  transform-origin: top;
  animation-timing-function: ease-in-out;

  @keyframes swing {
    0% {transform: rotate(-30deg);}
    50% {transform: rotate(30deg);}
    100% {transform: rotate(-30deg);}
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
  position: relative;
  border-bottom: 150vh solid #F9E0D9;
  border-left: 30vw solid transparent;
  border-right: 30vw solid transparent;
  height: 0;
  margin: 0 auto;
  width: 75px;
`;

const TextSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  padding-top: calc(85px + 15vh);
  mix-blend-mode: difference;
  background-color: transparent;
  animation: anti-swing 6s infinite;
  transform-origin: top;
  animation-timing-function: ease-in-out;

  @keyframes anti-swing {
    0% {
      transform: rotate(30deg);

    }
    50% {transform: rotate(-30deg);}
    100% {transform: rotate(30deg);}
  }
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  margin-top: 3%;
  margin-bottom: 5%;
  color: #F9E0D9;
  font-size: 5rem;

  @media only screen and (max-width: 900px) {
    margin-top: 7%;
    margin-bottom: 10%;
  }
`;

const ProjectLink = styled.p`
  position: relative;
  text-align: center;
  margin: 5%;
  color: #F9E0D9;
  font-size: 3rem;
  font-weight: 700;
  cursor: pointer;
  z-index: 5;

  @media only screen and (max-width: 900px) {
    margin: 10%;
    font-size: 2rem;
  }
`;

export default App;
