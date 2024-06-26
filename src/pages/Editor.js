import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages_css/Editor.css";
import FormJson from "../json_codes/form.json";
import NavbarJson from "../json_codes/navbar.json";
import CarouselJson from "../json_codes/carousel.json";
import TableJson from "../json_codes/table.json";
import CardJson from "../json_codes/card.json";
import CNavbarTR from "../convert_react/Navbar.js";
import CFormTR from "../convert_react/Form.js";
import CCarouselTR from "../convert_react/Carousel.js";
import CCardTR from "../convert_react/Card.js";

const component = localStorage.getItem("Component");
const componentObject = {
  Form: FormJson,
  Navbar: NavbarJson,
  Carousel: CarouselJson,
  Table: TableJson,
  Card: CardJson,
};

const componentFunctions = {
  Form: CFormTR,
  Navbar: CNavbarTR,
  Carousel: CCarouselTR,
  Card: CCardTR,
};

function JsonCodeEditor() {
  const navigate = useNavigate();
  const [CopyReactText, setCopyReactText] = useState("Copy"); //for copy button
  const [CopyReactClass, setCopyReactClass] = useState("Copy"); //for copy button
  const [CopyJsonText, setCopyJsonText] = useState("Copy"); //for copy button
  const [CopyJsonClass, setCopyJsonClass] = useState("Copy"); //for copy button

  // to get the initial text  :
  const initialText = JSON.stringify(componentObject[component], null, 2);

  const [jsonText, setJsonText] = useState(initialText); //for json text
  const [reactText, setReactText] = useState(""); // for react text

  const handleJsonChange = (e) => {
    setJsonText(e.target.value);
  };

  const handleReactChange = (e) => {
    setReactText(e.target.value);
  };

  const convertToReact = () => {
    const convertedReact = componentFunctions[component](jsonText);
    console.log(convertedReact);
    setReactText(convertedReact);
  };

  const handleWebButton = () => {
    localStorage.setItem("ReactCode", reactText);
    navigate("/codecrafter/v1/display");
  };

  const copyToClipboard = (code) => {
    if (code === "react") {
      navigator.clipboard.writeText(reactText);
      setCopyReactText("Copied!");
      setCopyReactClass("Copied");
      setTimeout(() => {
        setCopyReactText("Copy");
        setCopyReactClass("Copy");
      }, 2000);
    } else {
      navigator.clipboard.writeText(jsonText);
      setCopyJsonText("Copied!");
      setCopyJsonClass("Copied");
      setTimeout(() => {
        setCopyJsonText("Copy");
        setCopyJsonClass("Copy");
      }, 2000);
    }
  };

  return (
    <div className="Container">
      <div className="jsonEditor">
        <h2>
          JSON
          <button
            className={`copy-code ${CopyJsonClass}`}
            onClick={() => copyToClipboard("json")}
          >
            {CopyJsonText}
          </button>
          <button className="convert-code" onClick={convertToReact}>
            Convert
          </button>
        </h2>

        <textarea
          value={jsonText}
          onChange={handleJsonChange}
          name="jsonEditor"
          style={{ width: "48vw", height: "75vh" }}
        ></textarea>
      </div>

      <div className="ReactEditor">
        <h2>
          React js
          <button
            className={`copy-code ${CopyReactClass} `}
            onClick={() => copyToClipboard("react")}
          >
            {CopyReactText}
          </button>
          <button className="watch-button" onClick={() => handleWebButton()}>
            Web
          </button>
        </h2>

        <textarea
          name="ReactEditor"
          onChange={handleReactChange}
          value={reactText}
          style={{ width: "48vw", height: "75vh" }}
        ></textarea>
      </div>
    </div>
  );
}

export default JsonCodeEditor;
