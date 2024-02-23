import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div>
      <div className="d-flex justify-content-end" style={{paddingBottom: "10px"}}>
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
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
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
    </div>
  );
}
export default ModuleList;