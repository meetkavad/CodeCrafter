import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JsonCodeEditor from "./pages/Editor";
import Home from "./pages/Home";
import Display from "./pages/Display";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/codecrafter/v1/editor" element={<JsonCodeEditor />} />
        <Route path="/codecrafter/v1/home" element={<Home />} />
        <Route path="/codecrafter/v1/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
