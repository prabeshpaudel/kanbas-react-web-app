import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { FaBook } from "react-icons/fa";
import "./index.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  return (
    <div className="p-4">
      <h1 style={{ fontWeight: "200" }}>Dashboard</h1> <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <div className="d-flex justify-content-end" style={{ paddingBottom: "10px" }}>
        <button type="button" className="btn btn-success" onClick={updateCourse} >Update</button>
        <button type="button" className="btn btn-danger" onClick={addNewCourse}>Add New Course</button>
      </div>
      <h2 style={{ paddingLeft: "20px" }}>Published Courses ({courses.length})</h2> <hr style={{ paddingLeft: "20px" }} />
      <div className="row" style={{ paddingLeft: "20px" }}>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-warning" onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>Delete</button>
                  </div>
                  <p className="card-text" style={{ color: "grey", fontSize: "20px" }}>{course.number} {course.name}</p>
                  <p className="card-text" style={{ color: "grey", fontSize: "15px" }}>{course.startDate} to {course.endDate}</p>
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