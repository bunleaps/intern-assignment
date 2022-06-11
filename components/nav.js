import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { BsShare } from "react-icons/bs";

const NavSectionStyled = styled.section`
  display: flex;
  padding: 68px 50px;
  color: #fff;
  width: 100%;
  height: 50px;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;

  .logo {
    display: flex;
    align-items: center;
    font-family: Roboto, sans-serif;

    span {
      font-size: 12px;
      font-weight: bold;
      margin-left: 12px;
      letter-spacing: 1.25px;
    }
  }

  .story {
    button {
      display: inline-block;
      background: transparent;
      border: 1px solid #fff;
      padding: 16px 30px;
      border-radius: 40px;
    }
    .all_story {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      color: white;
    }
  }

  .side-callout {
    display: flex;
    align-items: center;

    span > ul {
      display: flex;
      list-style-type: none;
      margin-right: 30px;

      li {
        font-family: Roboto, sans-serif;
        margin-right: 15px;
        font-size: 13px;

        :first-child {
          color: black;
        }
      }
    }

    .donate {
      display: inline-block;
      background: #fff;
      border: 1px solid #fff;
      padding: 16px 30px;
      border-radius: 40px;
      margin-right: 15px;

      span {
        color: #000;
        font-size: 11px;
        font-family: Roboto, sans-serif;
      }
    }

    .share {
      display: inline-block;
      background: transparent;
      border: none;

      .icon {
        color: #fff;
        font-size: 20px;
        font-family: Roboto, sans-serif;
      }
    }
  }

  @media (max-width: 930px) {
  }
`;

function Nav() {
  return (
    <NavSectionStyled>
      <div className="logo">
        <Image src={Logo} alt="Logo" width={70} height={32} />
        <span>A PIECE OF ME</span>
      </div>
      <div className="story">
        <button>
          <span className="all_story">ALL STORIES</span>
        </button>
      </div>
      <div className="side-callout">
        <span className="lang">
          <ul>
            <li>English</li>
            <li>Español</li>
            <li>Français</li>
          </ul>
        </span>
        <button className="donate">
          <span>DONATE</span>
        </button>{" "}
        <button className="share">
          <BsShare className="icon" />
        </button>
      </div>
    </NavSectionStyled>
  );
}

export default Nav;
