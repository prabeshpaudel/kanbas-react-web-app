import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaBook } from "react-icons/fa";
import "./index.css";

function Dashboard() {
  console.log(courses.length)
  return (
    <div className="p-4">
      <h1 style={{fontWeight: "200"}}>Dashboard</h1>              <hr />
      <h2 style={{paddingLeft:"20px"}}>Published Courses ({courses.length})</h2> <hr style={{paddingLeft:"20px"}}/>
      <div className="row" style={{paddingLeft:"20px"}}>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text" style={{color: "grey", fontSize: "20px"}}>{course.number} {course.name}</p>
                  <p className="card-text" style={{color: "grey", fontSize: "15px"}}>{course.startDate} to {course.endDate}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-outline">
                  <FaBook className="fs-2 icon-grey" /> </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;