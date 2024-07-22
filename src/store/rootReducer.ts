import { combineReducers } from "@reduxjs/toolkit";

import countSlice from "./slices/countSlice"

const rootReducer = combineReducers({
  countSlice: countSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;