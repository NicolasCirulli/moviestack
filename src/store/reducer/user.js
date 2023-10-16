import { createSlice } from "@reduxjs/toolkit"
export const EmptyUser = {
    id: null,
    name: '',
    email: '',
    token: '',
    role: '',
}
export const userSlice = createSlice({
    name: 'user',
    initialState: EmptyUser,
    reducers: {
        loadUser: (state,action) => action.payload,
        updateUser: (state, action) => ({...state, ...action.payload}),
        resetUser: (state) => { return EmptyUser }
    }  
})

export const { loadUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer