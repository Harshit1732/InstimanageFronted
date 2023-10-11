import React from "react";
import "./style.css";
const SectionA = () => {
  return (
    <div
      className="sectionA_wrapper"
      style={{
        width: "98%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "5px",
        margin:"20px"
      }}
    >
      <p className="sectionA_text">Exchanges</p>

      <button className="section_button">+ New Exchange</button>
    </div>
  );
};

export default SectionA;
