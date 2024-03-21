import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      <div className="d-flex justify-content-end" style={{ paddingBottom: "10px" }}>
        <button type="button" className="btn btn-light">Collapse All</button>
        <button type="button" className="btn btn-light">View Progress</button>
        <select id="select-one-option" className="btn btn-light">
          <option selected value="PUBLISHALL">Publish All</option>
          <option value="OPTION2">Option 2</option>
        </select>
        <button type="button" className="btn btn-danger">Module</button>
        <button type="button" className="btn btn-light">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="list-group wd-modules">
        <div
          style={{ border: "2px solid black", backgroundColor: "lightgray" }}
          className="new-module-container">
          <h5 style={{ textAlign: "center" }}>New Module</h5>
          <input
            className="module-input"
            value={module.name}
            placeholder="Module Name"
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
          <textarea
            className="module-description"
            value={module.description}
            placeholder="Module Description"
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
          <button className="btn btn-success" onClick={() => dispatch(updateModule(module))}>Update</button>
          <button className="btn btn-danger" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        </div><br />
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ marginRight: "10px", padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderRadius: '0.2rem' }}
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    style={{ marginRight: "10px", padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderRadius: '0.2rem' }}
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;