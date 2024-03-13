import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addUser = createAction('users/addUser', (name, number) => {
    return {
        payload: {
        id: nanoid(),
        name:name,
        number:number,
        },
    }
})

export const deleteUser = createAction('users/deleteUser')

export const filterUser = createAction('users/filterUser', (filter) => { 
  return {
    payload: { 
    filter
    }
  }
})