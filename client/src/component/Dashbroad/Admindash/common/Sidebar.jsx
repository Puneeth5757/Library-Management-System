// import React from 'react'
import { MdSpaceDashboard, MdOutlineFoodBank,MdOutlineGroups2  } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-4 vh-100 position-fixed sidebar ">
      <div className="">
        <div className="header">
          <MdSpaceDashboard className="" /> Dashboard
        </div>
      </div>
      <ul className="list-group list-unstyled" style={{ listStyle: "none" }}>

        <li className="list-group-item ">
          <Link to={"/admin-dash/allstudents"}>
            <MdOutlineGroups2 className="icon" /> All Users
          </Link>
        </li>

        <li className="list-group-item ">
          <Link to={"/admin-dash/book-section"}>
            <MdOutlineFoodBank className="icon" /> Books Section
          </Link>
        </li>


      </ul>
    </div>
  );
};

export default Sidebar;
