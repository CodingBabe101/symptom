import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const symptomSlice = createSlice({
    name: 'symptoms',
    initialState,
    reducers: {
        addSymptoms(state, action) {
            state.push(action.payload)
        },
        removeSymptom(state, action) {
            return state.filter(symptom => symptom !== action.payload)
        },
        clearSymptoms(state) {
            return []
        }
    }
})

