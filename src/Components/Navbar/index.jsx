import React from "react";

import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import "./style.css";
const Navbar = () => {
  return (
    <div
      style={{
        width: "98%",
        height: "50px",
        backgroundColor: "white",
        // border:"1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "5px",
      }}
    >
      <div>
        <button
          style={{
            width: "34px",
            height: "32px",
            alignItems: "center",
            textAlign: "center",
            margin: "20px",
            border: "none",
          }}
        >
          <RiBarChartHorizontalLine
            style={{ textAlign: "center", fontSize: "15px" }}
          />
        </button>
      </div>
      <div style={{ display: "flex" ,textAlign:"center",gap:"8px"}}>
        <div>
          <button
            style={{
              width: "34px",
              height: "32px",
              alignItems: "center",
              textAlign: "center",
              margin: "20px",
              border: "none",
            }}
          >
            <IoMdNotifications
              style={{ textAlign: "center", fontSize: "15px" }}
            />
          </button>
        </div>
        <div>
          <CgProfile style={{ textAlign: "center", fontSize: "29px",color:"grey",alignItems:"center",
          justifyItems:"center",marginTop:"22px" }} />
        </div>
        <div>
        <p style={{marginTop:"24px",fontSize:"12px"}}>
        UserName
       </p>
       <p 
       style={{color:"gray",fontSize:"10px",textAlign:"left"}}
       >Admin</p>
        </div>
       
       <p style={{marginTop:"24px",fontSize:"16px",marginRight:"10px"}}>
        <FiChevronDown/>
       </p>
      </div>
    </div>
  );
};

export default Navbar;
