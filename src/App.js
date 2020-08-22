import React from "react";
import IdentityCard from "./components/identityCard";
import avatarImage from "./images/avatar.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <IdentityCard
        name="Scott Diemer"
        title="Web Developer"
        image={avatarImage}
      />
    </div>
  );
}

export default App;
