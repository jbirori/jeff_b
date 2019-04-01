import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      about: "who is jeff ",
      work: "jeff's work ",
      radius: 40
    }

    this.openCloseModal = this.openCloseModal.bind(this);
  }

  openCloseModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <div className="App">
        <Lamp>
          <LampChord />
          <LampShade />
          <LightBeam>
            <TextSection>
              <Title> Jeff B </Title>
              <ProjectLink href="http://dialupstuff.com/"> Dial Up </ProjectLink>
              <ProjectLink href="https://www.rogueagency.us/"> Rogue Agency </ProjectLink>
              <ProjectLink href="https://www.lyricallemonade.com/"> Lyrical Lemonade </ProjectLink>
            </TextSection>
          </LightBeam>
        </Lamp>
        <ModalButton radius={this.state.radius} zIndex={11} onClick={this.openCloseModal}>
          <CircularText radius={this.state.radius}>
            {this.state.about.split("").map((letter, index) => (
              <LetterCurve height={this.state.radius} origin={index*(360/this.state.work.length)}> {letter} </LetterCurve>
            ))}
          </CircularText>
        </ModalButton>

        {this.state.modalOpen &&
          <Modal>
            <ModalButton radius={this.state.radius} zIndex={11} onClick={this.openCloseModal}>
              <CircularText radius={this.state.radius}>
                {this.state.work.split("").map((letter, index) => (
                  <LetterCurve height={this.state.radius} origin={index*(360/this.state.work.length)}> {letter} </LetterCurve>
                ))}
              </CircularText>
            </ModalButton>
            <Description>
              Code +  Design <br/><br/><br/>
              Hey, my name is Jeff. I'm a software engineer and freelance web developer based in Chicago with a deep interest in design.
              I want to change the way we see the world in both digital and physical spaces to curate memorable experiences. <br/><br/>
              Lets work. <br/><br/><br/><br/>
              <Contact>
                <a href="https://www.instagram.com/jeff.bi/"><Icon src="assets/insta.png" /></a>
                <a href="mailto:jeffbirori@gmail.com?subject=Lets work"><p>Email</p></a>
                <a href="https://github.com/jbirori"><Icon src="assets/github.png" /></a>
              </Contact>
            </Description>
          </Modal>
        }
      </div>
    );
  }
}

const Lamp = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  animation: swing 5s infinite;
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
  animation: anti-swing 5s infinite;
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

  @media only screen and (max-width: 600px) {
    margin-top: 7%;
    margin-bottom: 10%;
    font-weight: 500;
  }
`;

const ProjectLink = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  text-align: center;
  margin: 5%;
  color: #F9E0D9;
  font-size: 3rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 5;

  @media only screen and (max-width: 600px) {
    margin: 7%;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const ModalButton = styled.div`
  position: fixed;
  width: ${props => props.radius || 50}px;
  height: ${props => props.radius || 50}px;
  border-radius: 100%;
  background: #F9E0D9;
  right: 0px;
  top: 0px;
  margin: 30px;
  cursor: pointer;
  z-index: ${props => props.zIndex || 10};

  animation: rotate 3s infinite;
  animation-timing-function: linear;

  @keyframes rotate {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
  }
`;

const CircularText = styled.div`
  position: relative;
  left: ${props => props.radius/2 || 25}px;
  top: -${props => props.radius/2 || 25}px;
`;

const LetterCurve = styled.p`
  margin: 0;
  position: absolute;
  height: ${props => props.height || 45}px;
  transform: rotate(${props => props.origin || 0}deg) ;
  transform-origin:0 100%;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`;

const Modal = styled.div`
  position: fixed;
  text-align: center;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  min-height: 600px;
  background: #2A2A2A;
  z-index: 11;
`;

const Description = styled.p`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  color: #F9E0D9;
  font-weight: 500;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 5%;
`;

const Contact = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: #F9E0D9;
    margin: 0 8px;
  }

  p {
    margin: 0;
  }
`;

const Icon = styled.img`
  height: 1.2em;
  filter: invert(1);
  margin: 0px 4px;
`;

export default App;
