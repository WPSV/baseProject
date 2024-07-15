import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TRegisterForms = {
  company: string;
  localization: string;
  url: string;
  businessDescription: string;
  termsOfUse: boolean;
  opportunities: string[];
  actuation: string[];
  businessType: string[];
  preferences: string[];
  expectations: string[];
}

const initialState: TRegisterForms = {
  company: "",
  localization: "",
  url: "",
  businessDescription: "",
  termsOfUse: false,
  opportunities: [],
  actuation: [],
  businessType: [],
  preferences: [],
  expectations: [],
};

const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ name: keyof TRegisterForms, value: string | string[] | boolean }>) => {
      const { name, value } = action.payload;
      
      if (typeof value === "string" && value.includes(",")) {
        const newValue = value.split(",").filter(value => value.trim() !== "");
        return {
          ...state,
          [name]: newValue,
        };
      } else if (Array.isArray(value)) {
        return {
          ...state,
          [name]: value,
        };
      } else {
        console.log(JSON.stringify(state, null, 2));
        return {
          ...state,
          [name]: value !== "" ? [value] : [],
        };
      }
    },
    removeValue: (state: TRegisterForms, action: PayloadAction<{ name: keyof TRegisterForms, value: string }>) => {
      const { name, value } = action.payload;
      const fieldValue = state[name];
      
      if (Array.isArray(fieldValue)) {
        const newValue: string[] = fieldValue.filter((stateValue: string) => stateValue !== value && stateValue !== "");
        return {
          ...state,
          [name]: newValue,
        };
      } else {
        return {
          ...state,
          [name]: value,
        };
      }
    }
  },
});

export const { updateField, removeValue } = registerFormSlice.actions;
export default registerFormSlice.reducer;
