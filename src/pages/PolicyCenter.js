import React, { useState } from "react";
import styled from "styled-components";
import uni from "../images/uni_2.jpg";
import modules from "../module";
import CourseDetails from "../components/CourseDetails";

const PolicyCenter = () => {
  const [data, setData] = useState(modules());
  const [currentModule, setModule] = useState(data);

  console.log(data);

  return (
    <Study>
      <h2>Policy Center</h2>
      <p>
        Our Policy Centre undertakes research and conducts training on various
        issue areas including tax policy, government expenditure management
        fiscal decentralisation, public sector accountability auditing and
        reporting
      </p>
      <DiplomaContainer>
        <ImageBanner>
          <ImageContainer></ImageContainer>
        </ImageBanner>
        <TextDesc>
          <h3>We have participated in various research projects including:</h3>
          <p>
            Collaborative research on "Sustainable Tax Governance in Developing
            countries Through Global Tax Transparency"(funded by the Norwegian
            Research Council)
          </p>

          <p>
            Partnering with the Institute for Austrian and International Tax Law
            of the Vienna University of Economics and Business Administration to
            undertake Joint research on the EAC Common Protocol, Tax
            Harmonization in EAC member states and a comparative analysis of
            mineral taxation laws and policies in Africa.
          </p>
        </TextDesc>
      </DiplomaContainer>
    </Study>
  );
};

const Study = styled.div`
  text-align: justify;
  p {
    color: #fff;
  }

  h2 {
    color: yellow;
    font-size: 4rem;
  }

  padding: 4rem 4rem;
`;

const DiplomaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Banner = styled.div`
  background: #97c63b;
  height: 40vh;
  color: #fff;
  padding: 2rem 4rem;
  text-align: left;

  h2 {
    font-size: 10rem;
  }
`;

const ImageBanner = styled.div`
  height: 80vh;
  width: 100%;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-image: url(${uni});
`;

const LineSeperate = styled.div`
  background-color: yellow;
  height: 1px;
  width: 100%;
  margin: 2rem 0;
`;

const TextDesc = styled.div`
  text-align: left;
  margin-top: 2rem;

  p {
    padding: 1.5rem 0rem;
    font-size: 1.6rem;
  }

  h3 {
    color: yellow;
    font-size: 3rem;
    margin: 0;
  }
`;

const PurposeText = styled.div`
  text-align: left;
  p {
    padding: 1rem 0;
  }

  h3 {
    color: yellow;
    font-size: 3rem;
    margin: 0;
  }
`;

const ButtonDiv = styled.div`
  padding: 3rem;
  margin-bottom: 7rem;
  display: flex;
  justify-content: space-around;
`;

export default PolicyCenter;
