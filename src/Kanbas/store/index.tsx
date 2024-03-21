import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentReducer from "../Courses/Assignments/assignmentReducer";
import { Assignment } from "../Courses/Assignments/assignmentReducer";

export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
    assignmentReducer: {
        assignments: Assignment[];
    };
}

const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentReducer,
    },
});

export default store;