import React from "react";

import './style.css'
import Navbar from "../Navbar";
import SectionA from "../sectionA/indes";
import Cards from "../cards";
import Search from "../search";
import Table from "../table/table";
//Main Dashboard component
const Dashboard = () => {

    return (
        <div className="dashboard-wrapper">
              <Navbar/> 
            
            <div className="overview-section">
               <SectionA/>
               <Cards/>
               <Search/>
               <Table />
            </div>

        </div>
    )
}

export default Dashboard;