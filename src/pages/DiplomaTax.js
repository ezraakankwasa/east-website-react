import React, { useState } from "react";
import styled from "styled-components";
import uni from "../images/uni_1.jpg";
import modules from "../module";
import CourseDetails from "../components/CourseDetails";

const DiplomaTax = () => {
  const [data, setData] = useState(modules());
  const [currentModule, setModule] = useState(data);

  return (
    <Study>
      <h2>The Diploma in Tax & Revenue Administration</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat
      </p>
      <DiplomaContainer>
        <CardContainer>
          {currentModule.map((module, index) => (
            <CourseDetails key={index} currentModule={module} />
          ))}
          <button>Apply for The DITRA Course</button>
        </CardContainer>
        <CourseDescContainer>
          <ImageBanner>
            <ImageContainer></ImageContainer>
          </ImageBanner>
          <TextDesc>
            <h3>Benefits of the courseset</h3>
            <p>
              The East African School of Taxation provides tax training and
              consultancy services in East Africa. The school is located in
              Kampala, Uganda, and is the first taxation school in East Africa.
              It offers courses in income tax and revenue administration,
              certificates of merit in taxation, and tailor-made courses in
              taxation for parastatal organizations, the private sector, local
              governments and small and medium enterprises. The school also
              offers training in facilitating tax planning processes, salary,
              and benefits tax consultancy, tax management systems and tax
              audits
            </p>

            <p>
              Established in 2009, the East Africa School of Taxation (EAST) is
              an accredited research and training centre for taxation. EAST is
              headquartered in Kampala, Uganda. We offer courses and continuing
              education programs including taxation public financial management
              entreprenurship and business management Our signature program is
              the Diploma in Tax & Revenue Administration (DITRA) for public and
              private sector professionals. Since its inception EAST has trained
              over 1,000 professionals including lawyers, Financial managers,
              accountants and economists from revenue authorities, finance
              ministries, tax tribunals and the private sector including law
              firms, consulting firms and civil society organizations
            </p>
          </TextDesc>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
          </div>

          <div>
            <PurposeText>
              <h3>Apply For the Chartered Tax Consultant</h3>
              <LineSeperate></LineSeperate>
              <p>
                Applications for the DITRA course must be either holders of a
                degree from a recognized university or members of professional
                bodies such as ACCA, CIMA, CPA, ICS, ICSA or ICAE & W
              </p>
              <p>
                By earning the Certificate, students enhance their resumes and
                strengthen their applications for graduate school and many
                competitive job markets.
              </p>
            </PurposeText>
          </div>
        </CourseDescContainer>
      </DiplomaContainer>
    </Study>
  );
};

const Study = styled.div`
  text-align: left;
  p {
    color: #fff;
  }

  h2{
    color: yellow;
    font-size: 4rem;
  }

  margin: 4rem 4rem;
`;

const DiplomaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CourseDescContainer = styled.div`
  width: 60%;
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

export default DiplomaTax;
