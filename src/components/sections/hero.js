import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Mwazvita Mutowo.</h2>;
  const three = <h4 className="big-heading">Software Engineering | Business Consulting</h4>;
  const four = (
    <>
      <p>
        {' '}
        As a software engineer, I am driven by a desire to build technologies that improve lives and
        make a meaningful impact. With a foundation in financial services, I specialize in
        developing scalable backend systems and intuitive frontend interfaces that power real-world
        solutions. I believe in the importance of clean, maintainable code and creating
        human-centered experiences that are both accessible and performant.{' '}
      </p>{' '}
      <p>
        {' '}
        My journey into software engineering was fueled by a deep desire to spend my time building
        tools that help people. Currently, I’m focused on crafting reliable, impactful digital
        products for clients across South Africa and beyond as a developer at&nbsp;{' '}
        <a href="https://www.singular.co.za/" target="_blank" rel="noreferrer">
          {' '}
          Singular Systems{' '}
        </a>
        .{' '}
      </p>{' '}
      <p>
        {' '}
        With experience across web and mobile platforms, and a growing interest in iOS development,
        I aim to expand my expertise into areas like intelligent systems and product
        architecture—continuing to build technologies that serve communities at scale.{' '}
      </p>
    </>
  );
  const five = (
    <div className="email-link-wrapper">
      <a className="email-link" href="mailto:mwazvitam@gmail.com">
        Get In Touch
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
