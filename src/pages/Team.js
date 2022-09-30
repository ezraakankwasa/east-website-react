import React, { useState } from "react";
import styled from "styled-components";
import staff from "../data";
import uni from "../images/uni_3.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

const modalStyle = {
  backgroundColor: "transparent",
  bgColor: "transparent",
};

const Team = () => {
  const [allStaff, setStaff] = useState(staff());
  const [open, setOpen] = useState(false);
  return (
    <AboutUs>
      <Banner>
        <h2>Meet East</h2>
      </Banner>
      <h3>Our Mission</h3>
      <TextDesc>
        <LineSeperate></LineSeperate>
        <p>
          EAST is managed by an exceptional team of industry experts, legal, URA
          staff, accountants & finance experts to deliver value & skillsets to
          its students, trainees & other stakeholders in the tax sector
        </p>
        <Cards>
          {allStaff.map((staff, index) => (
            <Card key={index}>
              <img src={uni} alt={staff.name}></img>
              <p>{staff.name}</p>
              <button onClick={() => (open ? setOpen(false) : setOpen(true))}>
                Details
              </button>
              <Modal
                sx={modalStyle}
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {staff.name}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {staff.bio}
                  </Typography>
                </Box>
              </Modal>
            </Card>
          ))}
        </Cards>
      </TextDesc>
    </AboutUs>
  );
};

const AboutUs = styled.div`
  text-align: left;
  margin-bottom: 4rem;
  p {
    color: #fff;
  }
  h3 {
    color: yellow;
    font-size: 3rem;
    padding: 2rem 4rem;
  }
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

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  height: 32rem;
  width: 25rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: left;
  margin: 1rem 0rem;

  p {
    padding: 0rem;
    margin: 0rem;
    color: yellow;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  button {
    width: 50%;
    padding: 0.5rem;
  }
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

export default Team;
