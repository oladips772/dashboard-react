/** @format */
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="logo">
          <h2>S</h2>
          <h3>Shareon</h3>
        </div>
        <div className="sidebar_items">
          <div className="sidebar_item">
            <HomeIcon />
            <p>My Cloud</p>
          </div>
          <div className="sidebar_item">
            <PeopleAltIcon />
            <p>Shared file</p>
          </div>
          <div className="sidebar_item">
            <StarBorderIcon />
            <p>Starred</p>
          </div>{" "}
          <div className="sidebar_item">
            <HelpOutlineIcon />
            <p>Shared file</p>
          </div>
          <hr />
          <div className="sidebar_item">
            <DeleteSweepIcon />
            <p>Shared file</p>
          </div>
          <div className="sidebar_item">
            <SettingsIcon />
            <p>Shared file</p>
          </div>
        </div>
        <div className="file_div">
          <img
            src="https://icon-library.com/images/file-download-icon-png/file-download-icon-png-4.jpg"
            alt=""
          />
          <p>
            upgarde to <span>Pro</span> for unlimited storage
          </p>
          <button>Go Premuim</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
