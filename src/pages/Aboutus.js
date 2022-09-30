import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <AboutUs>
      <Banner>
        <h2>Meet East</h2>
      </Banner>
      <ImageBanner>
        <ImageContainer></ImageContainer>
      </ImageBanner>
      <TextDesc>
        <p>
          The East African School of Taxation provides tax training and
          consultancy services in East Africa. The school is located in Kampala,
          Uganda, and is the first taxation school in East Africa. It offers
          courses in income tax and revenue administration, certificates of
          merit in taxation, and tailor-made courses in taxation for parastatal
          organizations, the private sector, local governments and small and
          medium enterprises. The school also offers training in facilitating
          tax planning processes, salary, and benefits tax consultancy, tax
          management systems and tax audits
        </p>

        <p>
          Established in 2009, the East Africa School of Taxation (EAST) is an
          accredited research and training centre for taxation. EAST is
          headquartered in Kampala, Uganda. We offer courses and continuing
          education programs including taxation public financial management
          entreprenurship and business management Our signature program is the
          Diploma in Tax & Revenue Administration (DITRA) for public and private
          sector professionals. Since its inception EAST has trained over 1,000
          professionals including lawyers, Financial managers, accountants and
          economists from revenue authorities, finance ministries, tax tribunals
          and the private sector including law firms, consulting firms and civil
          society organizations
        </p>
      </TextDesc>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <LineSeperate></LineSeperate>
      </div>

      <div>
        <PurposeText>
          <h3>Our Vision</h3>
          <p>
            "To be a leading tax training and consultancy<br></br> institution
            in the East African Region"
          </p>
        </PurposeText>
        <PurposeText>
          <h3>Our Mission</h3>
          <p>
            "To develop, promote and deliver<br></br>internationally recognised
            tax training and <br></br>consultancy programs throughout<br></br>
            East Africa"
          </p>
        </PurposeText>
      </div>

      <ButtonDiv>
        <button><a href="https://goo.gl/maps/8k97T1nJtip3g2QAA" target="_blank">Location</a></button>
        <button><Link to="team">Lecture Team</Link></button>
      </ButtonDiv>
    </AboutUs>
  );
};

const AboutUs = styled.div`
  text-align: center;
  p {
    color: #fff;
  }
`;

const Banner = styled.div`
  background: #97C63B;
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
  background-image: linear-gradient(269.34deg, rgba(151, 198, 59, 0.3) 11.9%, rgba(10, 89, 167, 0.3) 63.82%), url("https://observer.ug/images/URAs-Doris-Akol-and-other-school-officials-posing-with-the-Graduands.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;



const LineSeperate = styled.div`
  background-color: yellow;
  height: 1px;
  width: 50%;
  margin: 3rem 0;
`;

const TextDesc = styled.div`
  margin-top: 2rem;
  padding: 0rem 4rem;

  p {
    padding: 1.5rem 0rem;
    font-size: 1.6rem;
  }
`;

const PurposeText = styled.div`
  h3 {
    color: yellow;
    font-size: 3rem;
    margin: 0;
  }

  p {
    padding: 2rem 0;
  }
`;

const ButtonDiv = styled.div`
  padding: 3rem;
  margin-bottom: 7rem;
  display: flex;
  justify-content: space-around;
`;

export default Aboutus;
