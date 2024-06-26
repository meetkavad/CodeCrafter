import React, { Component, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../pages_css/Home.css";

function Home() {
  const handleClick = (component) => {
    localStorage.setItem("Component", `${component}`);
  };

  return (
    <>
      <Navbar />
      <div className="components-container">
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Navbar")}
        >
          <h1>Button</h1>
          <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Navbar")}
        >
          <h1>Navbar</h1> <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Form")}
        >
          <h1>Form</h1> <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Carousel")}
        >
          <h1>Carousel</h1> <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Card")}
        >
          <h1>Card</h1> <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Table")}
        >
          <h1>Table</h1> <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Sidebar")}
        >
          <h1>Sidebar</h1> <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Navbar")}
        >
          <h1>Yahoo</h1> <img src="" alt="component-img" />
        </a>
        <a
          className="components"
          href="/codecrafter/v1/editor"
          onClick={() => handleClick("Navbar")}
        >
          <h1>Tab</h1> <img src="" alt="component-img" />
        </a>
      </div>
    </>
  );
}

export default Home;
