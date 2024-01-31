import { configureStore } from '@reduxjs/toolkit'
import showsDataReducer from './showData/ShowData'


export const store = configureStore({
    reducer: {
        showsData:showsDataReducer,
    },
})
