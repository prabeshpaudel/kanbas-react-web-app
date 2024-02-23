import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "75%" }}>
            <h5>Assignment Name</h5>
            <input value={assignment?.title}
                className="form-control mb-2" />
            <br />
            <h5>Assignment Description</h5>
            <div className="form-group mb-3">
                <textarea className="form-control"
                    rows={4}>{assignment?.description}</textarea>
            </div>
            <br />
            <div className="form-group row mb-3">
                <label htmlFor="points" className="col-sm-3 col-form-label text-sm-right">Points</label>
                <div className="col-sm-9">
                    <input type="number" id="points" className="form-control" value={assignment?.points} />
                </div>
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="assignmentGroup" className="col-sm-3 col-form-label text-sm-right">Assignment Group</label>
                <div className="col-sm-9">
                    <select id="assignmentGroup" className="form-control">
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
                <input type="checkbox" id="excludeGrade" className="form-check-input"/>
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
                                                <input type="text" className="form-control" id="assignTo" placeholder="Everyone"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="datePicker"><strong>Due</strong></label>
                                        <input type="datetime-local" className="form-control" id="datePicker" value={assignment?.due}/>
                                    </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="availableFrom"><strong>Available from</strong></label>
                                                    <input type="datetime-local" className="form-control" id="availableFrom" value={assignment?.availableFrom}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="until"><strong>Until</strong></label>
                                                    <input type="datetime-local" className="form-control" id="until" value={assignment?.availableUntil}/>
                                                </div>
                                            </div>

                                            <button type="button" className="btn btn-secondary btn-block mt-3"
                                            style = {{color: "black", backgroundColor: "lightgray"}}>
                                                <i className="fa fa-plus"></i> Add
                                            </button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="excludeGrade" className="form-check-input"/>
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
