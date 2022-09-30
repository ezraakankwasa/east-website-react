import React, {useState} from "react";
import styled from "styled-components";

const CourseDetails = ({currentModule}) => {
    return(
        <CardContainer>
            <h3>{currentModule.name}</h3>
            <LineSeperate></LineSeperate>
            {(currentModule.unit).map((unit, index) => <Card key={index}>{unit}</Card>)}
        </CardContainer>
    );
}

const CardContainer = styled.div`
background: yellow;
padding: 1rem;
text-align: center;
h3 {
    color: blue;
    font-size: 1.5rem;
}

`
const LineSeperate = styled.div`
  background-color: #97C63B;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
`;

const Card = styled.div`
background-color: green;
height: 3rem;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
margin: 1rem 0rem;
`

export default CourseDetails;