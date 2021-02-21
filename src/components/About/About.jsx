import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a javascript developer that focuses on front-end framework : react and react-native.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I have an attraction for designs systems, web accessibility and server-less technologies ( Netlify, Surge).'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'To grow my skills I focus on building a JAM stack application (Gatsby) for a non profits association (Javascript API’s Markup).'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour ||
                    'I’m also interested in the meta skill of « learning how to learn » by cultivating curiosity and adaptability.This allows me to improve my  lifelong  learning and continuous self-improvement skills.'}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
