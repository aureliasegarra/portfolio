import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function moveTitle() {
    // eslint-disable-next-line one-var
    let mouseX, mouseY;
    // eslint-disable-next-line one-var
    let traX, traY;
    // eslint-disable-next-line no-shadow
    const title = document.querySelector('h1');
    // eslint-disable-next-line prettier/prettier
    document.addEventListener('mousemove', function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      // eslint-disable-next-line prettier/prettier
      traX = ((4 * mouseX) / 570) + 40;
      // eslint-disable-next-line prettier/prettier
      traY = ((4 * mouseY) / 570) + 50;
      // eslint-disable-next-line prefer-template
      title.style.backgroundPosition = traX + '%' + traY + '%';
    });
  }

  useEffect(() => {
    moveTitle();
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'HI , I AM AURELIA'}
            <br />
            {subtitle || 'FRONT-DEVELOPER'}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--resume">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
