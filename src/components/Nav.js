import React from "react";
import styled from "styled-components";
import logo from "../images/east_logo_main.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <div className="logo">
          <img src={logo} />
          <p className="logo-desc">
            East African<span>School of Taxation</span>
          </p>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/services">EAST Services</Link>
        </li>
        <li>
          <Link to="/about">Meet EAST</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/easttv">EAST TV</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background: #fff;

  a {
    color: #0a59a7;
    font-family: "Roboto", serif;
    font-weight: 500;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }

  .logo {
    display: flex;
    align-items: center;

    p {
      color: #0a59a7;
      font-weight: bold;
      font-size: 1rem;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 0.5rem;
      line-height: 1;
      span {
        color: #97c63b;
      }
    }
  }
`;

export default Nav;
