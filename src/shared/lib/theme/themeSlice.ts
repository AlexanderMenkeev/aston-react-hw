import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/providers/store';

interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectIsDarkTheme = (state: RootState) => state.theme.isDarkTheme;
