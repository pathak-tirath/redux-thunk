import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import type { PayloadAction } from '@reduxjs/toolkit';

type postsProps ={
    title: string[]
}

interface Iprops{
    name:string;
    counter: number;
    status:string;
    posts: postsProps[]
}

const initialState = {
    name: '',
    counter: 0,
    status:'idle',
    posts:[]
} satisfies Iprops as Iprops

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response?.data
})


const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userPrint(state, action: PayloadAction<string>){
            state.name = action.payload
        },
        counterFn(state, action: PayloadAction<number>){
            state.counter += action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action:PayloadAction<string[]>) => {
            state.status = 'Fulfilled',
            state.posts = state.posts.concat(action.payload)
        })
    },
})

export const {userPrint, counterFn} = UserSlice.actions;
export default UserSlice.reducer