import React, { useState } from "react";
import styled from "styled-components";
import uni from "../images/uni_3.jpg";

const TeamMember = ({allStaff}) => {
  return (
    <CardContainer>
      {allStaff.map((staff, index) => (
        <Card key={index}>
          <img src={uni}></img>
          <p>{staff.name}</p>
          <button>Details</button>
        </Card>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 1rem;
  text-align: left;
  h3 {
    color: yellow;
    font-size: 4rem;
  }
`;
const LineSeperate = styled.div`
  background-color: #97c63b;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
`;

const Card = styled.div`
  /* background-color: yellow; */
  height: 20rem;
  width: 15rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: left;
  margin: 1rem 0rem;

  p {
    padding: 0;
    margin: 0.3rem 0rem;
    color: yellow;
  }

  img {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  button {
    width: 50%;
    padding: 0.5rem;
  }
`;

export default TeamMember;
