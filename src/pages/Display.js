import React from "react";

function Display() {
  const ReactCode = localStorage.getItem("ReactCode");

  return (
    <>
      <div>{ReactCode}</div>
    </>
  );
}

export default Display;
