import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import godena_logo from "../images/godena_logo.svg";
import east_logo2 from "../images/east_logo2.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="socials">
          <h3>Social</h3>
          <div className="social-cards">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
            <span>
              <a href="#">/kstu.kg</a>
            </span>
          </div>
          <div className="social-cards">
            <FontAwesomeIcon size="2x" icon={faSquareFacebook} />
            <span>
              <a href="#">kstu.kg</a>
            </span>
          </div>
          <div className="intouch">
            <h2 className="intouch-title">Get in touch</h2>
            <p>Form to be placed here</p>
          </div>
        </div>
        <div className="partners">
          <h3>Our Partners</h3>
          <div className="partners-logos">
            <img src={godena_logo} alt="godena logo" />
            <img
              className="logo2"
              src={east_logo2}
              alt="east consultants logo"
            />
          </div>
        </div>
        <div className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About EAST</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">EAST Tv</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© East African School of Taxation 2022</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem 4rem;
  left: 0;
  bottom: 0;
  width: 100%;
  a {
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    color: #000;
  }
  .container {
    display: flex;
    justify-content: space-between;
    h3 {
      color: #0a59a7;
      font-size: 2.75rem;
      margin-bottom: 1rem;
    }

    .socials {
      background: white;

      .social-cards {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        span {
          margin-left: 0.75rem;
          font-weight: bold;
        }
      }

      .intouch {
        /* background-color: red; */
        h2 {
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }

    .partners {
      .partners-logos {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: space-around;

        .logo2 {
          margin-top: 1.5rem;
        }
      }
    }

    .navigation {
      ul {
        list-style: none;

        li {
          font-size: 1.5rem;
        }
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    p {
      padding: 0;
    }
  }
`;

export default Footer;
