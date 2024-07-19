import { combineReducers } from "@reduxjs/toolkit";

import registerStep from "./slices/registerStepsSlice";
import registerForms from "./slices/registerFormsSlice";
import darkMode from "./slices/darkModeSlice";

const rootReducer = combineReducers({
  registerSteps: registerStep,
  registerForms: registerForms,
  darkMode: darkMode
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;