import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ""
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.contacts.push(action.payload)
      
    },
    deleteUser: (state, action) => {
      const index = state.contacts.findIndex(user => user.id === action.payload)
      state.contacts.splice(index,1)
      },
    filterUser: (state, action) => {
      state.filter = action.payload
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = usersSlice.actions

export default usersSlice.reducer