import React from "react";

function IdentityCard(props) {
  return (
    <div id="wrapper">
      <section id="main">
        <span className="avatar">
          <img src={props.image} alt={props.name} />
        </span>
        <h1>{props.name}</h1>
        <p>Software Engineer</p>
      </section>
    </div>
  );
}

export default IdentityCard;
