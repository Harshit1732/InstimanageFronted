import React, { useState, useEffect } from "react";
import { CgMenuGridR, CgCollage } from "react-icons/cg";
import { LuSettings2 } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { HiClock } from "react-icons/hi";
import { MdStorage } from "react-icons/md";
import { GrTemplate } from "react-icons/gr";

import "./style.css";
// This component has the code for both versions of sidebar (minisidebar and Defaultsidebar)
const MenuItem = (props) => {
  return props.visible && <div className="nav-link">{props.name}</div>;
};

const Sidebar = () => {
  const [show, setShow] = useState(window.innerWidth >= 996 ? true : false);

  const Visible = () => {
    if (window.innerWidth < 996) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  window.addEventListener("resize", Visible);

  const link = [
    {
      name: "Management",
      icon: <CgCollage />,
    },
    {
      name: "Settings",
      icon: <LuSettings2 />,
    },
    {
      name: "Contacts",
      icon: <IoMdContacts />,
    },
    {
      name: "Contact",
      icon: <ImHome3 />,
    },
    {
      name: "Clock",
      icon: <HiClock />,
    },
    {
      name: "Storage",
      icon: <MdStorage />,
    },
    {
      name: "Settings",
      icon: <LuSettings2 />,
    },
    {
      name: "Contact",
      icon: <IoMdContacts />,
    },
   
  ];

  return (
    <div
      className="sidebar-container"
      style={{
        width: "10px",
        fontSize: "20px",
        backgroundColor: "#02015e",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="sidebar-logo" style={{ fontSize: "30px" }}>
        <button className="side_icon">
        <CgMenuGridR style={{fontSize:"30px"}}/>
        </button>
     
      </div>

      <div className="sidebar">
        

        {link.map((item, idx) => (
          <div key={idx} className="nav-item">
            <div className="nav-item-img">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
