import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
} from "./assignmentReducer";
import { KanbasState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function Assignments() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => state.assignmentReducer.assignments);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  const handleAddAssignmentClick = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/Editor/`);
  };

  const openModal = (assignmentId: any) => {
    setAssignmentToDelete(assignmentId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment({ _id: assignmentToDelete }));
      closeModal();
    }
  };

  const handleDeleteAssignmentClick = (assignmentId: string) => {
    dispatch(deleteAssignment({ _id: assignmentId }));
  };

  return (
    <>
      <div className="d-flex justify-content-end" style={{ paddingBottom: "10px" }}>
        <button type="button" className="btn btn-light">+ Group</button>
        <button type="button"
          style={{ marginLeft: "10px", marginRight: "25px" }}
          className="btn btn-danger btn" onClick={handleAddAssignmentClick}>+ Assignment</button>
      </div>
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
            {assignmentList
              .filter((assignment) => assignment.course === courseId)
              .map(assignment => (
                <ul className="list-group" key={assignment._id}>
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" /><FaEllipsisV className="me-2" />
                    <i className="fa fa-book" style={{ color: "green" }}></i>&nbsp;
                    <strong>
                      <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: "black" }}>
                        {assignment.title}
                      </Link>
                    </strong>
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {assignment.description} |
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>Due </strong>{assignment.dueDate} | {assignment.points} pts
                    <span className="float-end">
                      <button
                        className="btn btn-danger btn-sm"
                        style={{ marginRight: "10px", padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderRadius: '0.2rem' }}
                        onClick={() => openModal(assignment._id)}>
                        {/* onClick={() => handleDeleteAssignmentClick(assignment._id)}> */}
                        Delete
                      </button>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                </ul>
              ))}
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div className="custom-modal" style={{ display: 'block', position: 'fixed', zIndex: 1050, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 5px 15px rgba(0,0,0,.5)' }}>
          <h5>Confirm Deletion</h5>
          <p>Are you sure you want to delete this assignment?</p>
          <button className="btn btn-danger" onClick={confirmDelete} style={{ marginRight: '10px' }}>Yes</button>
          <button className="btn btn-primary btn-sm" onClick={closeModal}>No</button>
        </div>
      )}
    </>
  );
}

export default Assignments;
