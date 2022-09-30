import { useState } from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import styled from "styled-components";
import homeImage2 from "../images/godena_logo2.jpg";
import ServiceCard from "../components/ServiceCard";
import services from "../Services";
import CarouselHome from "../components/CarouselHome";

const Home = () => {
  const [useServices] = useState(services()) 
  return (
    <StyledHome>
      <CarouselHome />
      <div className="small-banner">
        <img src="https://observer.ug/images/URAs-Doris-Akol-and-other-school-officials-posing-with-the-Graduands.jpg" alt="person smiling" />
        <div className="img-desc">
          <h3>Stand out from the competition</h3>
          <p>
            Graduates of the program are well-prepared to quantify risk and
            predict shifts in the tax environments. Every professor who teaches
            in the program is credentialed in tax practice (CPA or LLM) with
            years of full-time practice in the tax field.
          </p>
        </div>
      </div>
      <div className="services">
        <h2>EAST Services</h2>
        <ServiceCards>
        {useServices.map((service, index) => (
            <ServiceCard key={index} service={service}/>
          ))}
        </ServiceCards>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding: 2rem 4rem;
  h2, h3{
        font-size: 3rem;
        font-weight: bold;
        color: #F8D408;
        margin:0;
    }


  .small-banner{
    margin-top: 5rem;
    height: 50vh;
    img{
        object-fit: cover;
        width: 45%;
    }
    .img-desc{
        width: 50%;
        padding-right: 3rem;
    }
    display: flex;
    justify-content: space-between;
    p{
        padding: 1rem 0 0 0;
        font-size: 1.75rem;
    }
    
  }

  .services{
    margin-top: 5rem;
  }
`;

const Banner = styled.div`
  background-image: url(${homeImage2});
  width: 100%;
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: flex-end;

  h2 {
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 0;
    font-weight: 900;
  }
`;

const ServiceCards = styled.div`
display: flex;
justify-content: space-between;
margin: 1.5rem 0rem;
`

export default Home;
