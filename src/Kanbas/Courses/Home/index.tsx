import React from 'react';
import ModuleList from "../Modules/List";
import { FaDownload, FaHome, FaComments, FaBullhorn, FaChartBar, FaBell, FaCalendar, FaBook } from 'react-icons/fa';
import './index.css';

function Home() {
  return (
    <div className="d-flex w-100" style={{ minHeight: "100vh" }}>
      <div style={{ flex: 3 }}>
        <ModuleList />
      </div>
      <div className="d-lg-block d-none" style={{ flex: 1, maxWidth: "25%" }}>
        <div className="container mt-3">
          <div className="course-status d-flex align-items-center mb-3">
            <h2 className="flex-grow-1">Course Status</h2>
            <button type="button" className="btn btn-secondary btn-sm me-1">Unpublish</button>
            <button type="button" className="btn btn-success btn-sm">Published</button>
          </div>
          <ul className="list-group mb-4">
            <li className="list-group-item sidebar-item"><FaDownload className="me-2" style={{paddingLeft: "2px"}} /><a>Import Existing Content</a></li>
            <li className="list-group-item sidebar-item"><FaDownload className="me-2" style={{paddingLeft: "2px"}} /><a>Import From Commons</a></li>
            <li className="list-group-item sidebar-item"><FaHome className="me-2" style={{paddingLeft: "2px"}} /><a>Choose Home Page</a></li>
            <li className="list-group-item sidebar-item"><FaComments className="me-2" style={{paddingLeft: "2px"}} /><a>View Course Stream</a></li>
            <li className="list-group-item sidebar-item"><FaBullhorn className="me-2" style={{paddingLeft: "2px"}} /><a>New Announcement</a></li>
            <li className="list-group-item sidebar-item"><FaChartBar className="me-2" style={{paddingLeft: "2px"}} /><a>New Analytics</a></li>
            <li className="list-group-item sidebar-item"><FaBell className="me-2" style={{paddingLeft: "2px"}} /><a>View Course Notifications</a></li>
          </ul>
          <div className="coming-up mb-3">
            <h2>Coming Up</h2>
            <ul className="list-group">
              <li className="list-group-item"><FaCalendar className="me-2" /><a style={{color: "red"}}>View Calendar</a></li>
              <li className="list-group-item"><FaBook className="me-2" /><a style={{color: "red"}}>Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
              <li className="list-group-item"><FaBook className="me-2" /><a style={{color: "red"}}>Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
              <li className="list-group-item"><FaBook className="me-2" /><a style={{color: "red"}}>Lecture CS5610 06 SP23 Lecture Sep 11 at 6am</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
