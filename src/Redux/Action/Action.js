import {ADD_TEXT, COMPLET_TEXT, DELET_TEXT, EDIT_TEXT} from './ActionType'

export const addText = payload =>{
    return {
        type: ADD_TEXT,
        payload
    };
}

export const deleteText = (payload)  =>{
    return {
    type: DELET_TEXT,
    payload
   };
}

export const editText = (id,newText)  =>{
    return {
    type: EDIT_TEXT,
     payload:{ id,newText }
   };
}

export const completText = (id)  =>{
    return {
    type: COMPLET_TEXT,
    payload:id
   };
}