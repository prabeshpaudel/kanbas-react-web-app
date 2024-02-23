import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUpload, FaDownload, FaCog, FaFilter } from 'react-icons/fa';
import { assignments, enrollments, grades, users } from '../../Database';
import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const courseAssignments = assignments.filter(assignment => assignment.course === courseId);
    const courseEnrollments = enrollments.filter(enrollment => enrollment.course === courseId);

    const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>, studentId: string, assignmentId: string) => {
        console.log(`New grade for student ${studentId} on assignment ${assignmentId}: ${e.target.value}`);
    };


    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-custom mx-2">
                    <FaUpload /> Import
                </button>
                <button type="button" className="btn btn-custom mx-2">
                    <FaDownload /> Export
                </button>
                <button type="button" className="btn btn-custom mx-2">
                    <FaCog />
                </button>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <h5>Student Names</h5>
                    <input type="text" className="form-control search-input" placeholder="Search Students" />
                </div>
                <div className="col-md-6">
                    <h5>Assignment Names</h5>
                    <input type="text" className="form-control search-input" placeholder="Search Assignments" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <button type="button" className="btn btn-custom">
                        <FaFilter /> Apply Filter
                    </button>
                </div>
            </div>

            <div className="container-fluid mt-4">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                {courseAssignments.map((assignment) => (
                                    <th key={assignment._id}>{assignment.title} <br /> Out of {assignment.points}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {courseEnrollments.map((enrollment) => {
                                const student = users.find(user => user._id === enrollment.user);
                                return (
                                    <tr key={enrollment._id}>
                                        <td className="student-name">{student?.firstName} {student?.lastName}</td>
                                        {courseAssignments.map((assignment) => {
                                            const studentGrade = grades.find(grade => grade.student === enrollment.user && grade.assignment === assignment._id);
                                            return (
                                                <td key={assignment._id}>
                                                    <input
                                                        type="text"
                                                        className="form-control editable-grade"
                                                        value={studentGrade?.grade || ''}
                                                        onChange={(e) => handleGradeChange(e, enrollment.user, assignment._id)}
                                                        placeholder="N/A"
                                                    />
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Grades;