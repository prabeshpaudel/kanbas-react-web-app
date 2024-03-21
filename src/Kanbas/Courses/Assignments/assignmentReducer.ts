import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../../Database";

interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: db.assignments.map((assignment) => ({
        ...assignment,
        points: assignment.points.toString(),
    })),
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments.push(action.payload);
        },
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            const index = state.assignments.findIndex(
                (assignment) => assignment._id === action.payload._id
            );
            if (index !== -1) {
                state.assignments[index] = action.payload;
            }
        },
        deleteAssignment: (state, action: PayloadAction<{ _id: string }>) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload._id
            );
        },
    },
});

export const { addAssignment, updateAssignment, deleteAssignment } =
    assignmentsSlice.actions;

export default assignmentsSlice.reducer;
export interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    dueDate: string;
    points: string;
    availableFrom: string;
    availableUntil: string;
    due: string;
}