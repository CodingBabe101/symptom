import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { symptomReducer } from "./reducers/symptomReducer";
import { aiReducer } from "./reducers/aiReducer";



const store = configureStore({
    reducer: {
        symptoms: symptomReducer,
        aiResults: aiReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store