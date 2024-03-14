import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction('users/addContact', (name, number) => {
    return {
        payload: {
        id: nanoid(),
        name:name,
        number:number,
        },
    }
})

export const deleteContact = createAction('users/deleteContact')

export const filterUser = createAction('users/filterUser', (filter) => { 
  return {
    payload: { 
    filter
    }
  }
})
