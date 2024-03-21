import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { addAssignment, updateAssignment } from "../assignmentReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { Assignment } from "../assignmentReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignmentList = useSelector((state: KanbasState) => state.assignmentReducer.assignments);

    const assignment = assignmentList.find(
        (assignment) => assignment._id === assignmentId);

    const [title, setTitle] = useState(assignment?.title);
    const [description, setDescription] = useState(assignment?.description);
    const [dueDate, setDueDate] = useState(assignment?.dueDate);
    const [points, setPoints] = useState(assignment?.points);
    const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom);
    const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil);
    const [due, setDue] = useState(assignment?.due);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSave = () => {
        const assignmentData: Assignment = {
            _id: assignmentId ? assignmentId : new Date().getTime().toString(),
            title: title ? title : "New Assignment",
            course: courseId ? courseId : "1234",
            description: description ? description : "New Assignment Description",
            dueDate: dueDate ? dueDate : "2023-12-15T00:00",
            points: points ? points : "100",
            availableFrom: availableFrom ? availableFrom : "2023-12-15T00:00",
            availableUntil: availableUntil ? availableUntil : "2023-12-15T00:00",
            due: due ? due : "2023-12-15T00:00",
        };
        console.log(assignmentId);
        if (assignmentId && assignmentId !== "Editor") {
            console.log("Assignment ID Exists");
            dispatch(updateAssignment(assignmentData));
        } else {
            dispatch(addAssignment(assignmentData));
        }

        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "75%" }}>
                <h5>Assignment Name</h5>
                <input value={assignment?.title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control mb-2" />
                <br />
                <h5>Assignment Description</h5>
                <div className="form-group mb-3">
                    <textarea className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}>{assignment?.description}</textarea>
                </div>
                <br />
                <div className="form-group row mb-3">
                    <label htmlFor="points" className="col-sm-3 col-form-label text-sm-right">Points</label>
                    <div className="col-sm-9">
                        <input type="number" id="points" className="form-control"
                            onChange={(e) => setPoints(e.target.value)}
                            value={assignment?.points} />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="assignmentGroup" className="col-sm-3 col-form-label text-sm-right">Assignment Group</label>
                    <div className="col-sm-9">
                        <select id="assignmentGroup"
                            className="form-control">
                            <option selected>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="displayGrade" className="col-sm-3 col-form-label text-sm-right">Display Grade as</label>
                    <div className="col-sm-9">
                        <select id="displayGrade" className="form-control">
                            <option selected>Percentage</option>
                            <option>Complete/Incomplete</option>
                        </select>
                    </div>
                </div>

                <div className="form-check mb-3">
                    <input type="checkbox" id="excludeGrade" className="form-check-input" />
                    <label htmlFor="excludeGrade" className="form-check-label">Do not count this assignment towards the final grade</label>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 d-flex">
                            <label htmlFor="assignCard" className="col-form-label">Assign</label>
                        </div>

                        <div className="col-sm-9">
                            <div className="card mb-4" id="assignCard">
                                <div className="card-body">
                                    <h5 className="card-title">Assign to</h5>
                                    <form>
                                        <div className="form-row align-items-center mb-2">
                                            <div className="col-auto">
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control" id="assignTo" placeholder="Everyone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="datePicker"><strong>Due</strong></label>
                                            <input type="datetime-local" className="form-control" id="datePicker"
                                                onChange={(e) => setDue(e.target.value)}
                                                value={assignment?.due} />
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="availableFrom"><strong>Available from</strong></label>
                                                    <input type="datetime-local" className="form-control" id="availableFrom"
                                                        onChange={(e) => setAvailableFrom(e.target.value)}
                                                        value={assignment?.availableFrom} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="until"><strong>Until</strong></label>
                                                    <input type="datetime-local" className="form-control" id="until"
                                                        onChange={(e) => setAvailableUntil(e.target.value)}
                                                        value={assignment?.availableUntil} />
                                                </div>
                                            </div>

                                            <button type="button" className="btn btn-secondary btn-block mt-3"
                                                style={{ color: "black", backgroundColor: "lightgray" }}>
                                                <i className="fa fa-plus"></i> Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <input type="checkbox" id="excludeGrade" className="form-check-input" />
                <label htmlFor="excludeGrade" className="form-check-label">&nbsp;&nbsp;Notify users that this content has changed</label>
                <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                    Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger float-end">
                    Cancel
                </Link>
            </div>
        </div>
    );
}
export default AssignmentEditor;
