import React from "react";
import styled from "styled-components";
import socialIcons from "../constants/socialIcons";

function IdentityCard(props) {
  return (
    <StyledWrapper id="wrapper">
      <section id="main">
        <span className="avatar">
          <img src={props.image} alt={props.name} />
        </span>
        <h1>{props.name}</h1>
        <p>{props.title}</p>
        <div className="social-icons">
          {socialIcons.map((item, index) => {
            return (
              <a
                href={item.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  #main {
    padding: 2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 50%;
    border-radius: 5px;
  }

  .avatar {
    position: relative;
    display: block;
    margin-bottom: 1.5em;
  }
  img {
    display: block;
    margin: 0 auto;
    border-radius: 100%;
    box-shadow: 0 0 0 1.5em #ffffff;
    height: 100px;
    width: 100px;
  }
  .avatar:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    // left: -3em;
    width: 100%; // calc(100% + 6em);
    height: 1px;
    z-index: -1;
    background: #c8cccf;
  }
`;

export default IdentityCard;
