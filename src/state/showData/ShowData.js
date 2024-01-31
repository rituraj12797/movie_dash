import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shows: [],
}

export const showDataSlice = createSlice({
  name: 'showsData',
  initialState,
  reducers: {
    setShows: (state,action) => {
        state.shows = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShows} = showDataSlice.actions;
export default showDataSlice.reducer