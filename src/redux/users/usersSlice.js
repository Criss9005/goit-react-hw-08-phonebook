import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = 'https://connections-api.herokuapp.com/contacts';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
    filter: ""
}

export const getContacts = createAsyncThunk('users/getContacts', () => { 
  const token = localStorage.getItem("token")
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  if (token) { 

    return axios.get(url)
      .then(function (response) {
        console.log(response.data)
        return response.data
      })
      .catch(function (error) {
      // manejar error
      console.log(error);
    })
  }
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload)
      axios.post(url, {
      name: action.payload.name,
      number: action.payload.number,
      id: action.payload.id
      })
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
       // console.log(error);
      });
      
    },
    deleteContact: (state, action) => {
      const index = state.contacts.items.findIndex(user => user.id === action.payload)
      state.contacts.items.splice(index, 1)
      axios.delete(`${url}/${action.payload }`)
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
       // console.log(error);
      }); 
    },
    filterUser: (state, action) => {
      state.filter = action.payload
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => { 
      state.contacts.isLoading = true
      })
      .addCase(getContacts.rejected, (state) => {
        state.contacts.isLoading = false
      })
    .addCase(getContacts.fulfilled, (state, action) => { 
      //console.log(action.payload)
      state.contacts.isLoading = false
      state.contacts.items = action.payload
     
      })
  }
  
})

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, filterUser, fetchContacts } = usersSlice.actions

export default usersSlice.reducer