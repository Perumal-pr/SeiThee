import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../api";

const initialState = {
    latest: [],
    isLoaded: false,
    searchLoaded: false,
}

export const LatestNews = createAsyncThunk("news/LatestNews",async ()=> {
   const {data: {articles}} = await axios.get(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=${API_KEY}`);

    return articles;
});

export const SearchNews = createAsyncThunk("news/SearchNews", async (search) => {
    const date = new Date().toISOString().split("T")[0];
    const {data: {articles}} = await axios.get(`https://gnews.io/api/v4/search?q=${search}&lang=en&apikey=${API_KEY}`);
    return articles;
})


const newsFeedSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LatestNews.pending,()=> {
            console.log("pending");
            
        }),
        builder.addCase(LatestNews.fulfilled,(state,action) => {
            state.latest = action.payload;
            state.isLoaded = true;
        }),
        builder.addCase(SearchNews.pending,()=> {
            console.log("pending");
            
        }),
        builder.addCase(SearchNews.fulfilled,(state,action) => {
            state.search = action.payload;
            state.searchLoaded = true;
        })
        
    },
})


export default newsFeedSlice.reducer;

