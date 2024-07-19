import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TDarkModeSliceState = {
  isDarkMode: boolean;
}

const initialState: TDarkModeSliceState = {
  isDarkMode: false,
}

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      window.localStorage.setItem("darkMode", action.payload);
      state.isDarkMode = action.payload;
      
      if (action.payload) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }
});

export const { setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;