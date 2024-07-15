import { combineReducers } from "@reduxjs/toolkit";

import registerStep from "./slices/registerStepsSlice";
import registerForms from "./slices/registerFormsSlice";

const rootReducer = combineReducers({
  registerSteps: registerStep,
  registerForms: registerForms
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;