import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TRegisterStepsState = {
  currentStep: number;
}

const initialState: TRegisterStepsState = {
  currentStep: 1,
};

const registerStepsSlice = createSlice({
  name: "registerSteps",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  }
});

export const { setCurrentStep } = registerStepsSlice.actions;
export default registerStepsSlice.reducer;