// import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdSpaceDashboard, MdOutlineFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="d-flex flex-column p-4 vh-100 position-fixed sidebar">
      <div className="">
        <div className="header">
          <MdSpaceDashboard className="" /> Dashboard
        </div>
      </div>
      <ul className="list-group list-unstyled " style={{ listStyle: "none" }}>
        <li className="list-group-item ">
          <Link to={"/dashbroad"}>
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li className="list-group-item">
          <Link to={"/dashbroad/Avalible-books"}>
            <MdOutlineFoodBank className="icon" /> Avalible Books
          </Link>
        </li>
        

      </ul>
    </aside>
  );
};

export default Sidebar;
