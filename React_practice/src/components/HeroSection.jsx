import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

import {  useGlobalContext } from "../Context";

const HeroSection = () => {

  const {name, image}= useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            Hi everyone, my name is {name}. I'm a [your job title] at [your
            company]. I'm excited to be here today to [explain why you're
            there]. You can also add a personal touch to your introduction by
            sharing a fun fact about yourself or by asking the audience a
            question.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me</NavLink>
        </Button>
        </div>
        
        <div className="section-hero-image">
            <picture>
                <img src={image} alt="heroimage" className="hero-img" />
            </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
 padding: 9rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 16rem;
}

.hero-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.helper};
}

.hero-heading {
  text-transform: uppercase;
  font-size: 6.4rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 80%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}
`
export default HeroSection;
