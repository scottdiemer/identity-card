import React from "react";
import styled from "styled-components";

function IdentityCard(props) {
  return (
    <StyledWrapper id="wrapper">
      <section id="main">
        <span className="avatar">
          <img src={props.image} alt={props.name} />
        </span>
        <h1>{props.name}</h1>
        <p>Software Engineer</p>
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  text-align: center;
  #main {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 5em;
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
    left: -3em;
    width: calc(100% + 6em);
    height: 1px;
    z-index: -1;
    background: #c8cccf;
  }
`;

export default IdentityCard;
