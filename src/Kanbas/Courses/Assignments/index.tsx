import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(assignment => assignment.course === courseId);

  return (
    <div className="container mt-4">
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /><strong>Assignments</strong>
            <span className="float-end">
              <span className="me-2" id="special-text">40% of Total</span>
              <FaCheckCircle className="text-success" />
              <FaPlus className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          {assignmentList.map(assignment => (
            <ul className="list-group" key={assignment._id}>
              <li className="list-group-item">
                <FaEllipsisV className="me-2" /><FaEllipsisV className="me-2" />
                <i className="fa fa-book" style={{color: "green"}}></i>&nbsp;
                <strong>
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{color: "black"}}>
                    {assignment.title}
                  </Link>
                </strong>
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {assignment.description} | 
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Due </strong>{assignment.dueDate} | {assignment.points} pts
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            </ul>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Assignments;
