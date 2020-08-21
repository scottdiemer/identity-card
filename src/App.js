import React from "react";
import IdentityCard from "./identityCard";
import "./App.css";
import avatarImage from "./images/avatar.jpg";

function App() {
  return (
    <div className="App">
      <IdentityCard name="Scott Diemer" image={avatarImage} />
    </div>
  );
}

export default App;
