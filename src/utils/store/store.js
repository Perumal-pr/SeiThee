import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../store/newsSlice";


export const store = configureStore({
    reducer: {
        news: newsReducer
    },
});

