
import {ADD_TEXT ,DELET_TEXT ,EDIT_TEXT ,COMPLET_TEXT} from "../Action/ActionType"

const initialState ={

    todolist:[
        {id:Math.random() ,title:" Task1: Contact Machel for the contract" ,isDone:false},
        {id:Math.random() ,title:"Task2: Contact Ms Med for the meetig" ,isDone:false},
        {id:Math.random() ,title:"Task3: Plan a dinner with our partners" ,isDone:false},
    ]      
}

const ToDoReducer = (state = initialState , action) =>{

      switch (action.type){

          case  ADD_TEXT :
         return {
        ...state, 
        todolist:[...state.todolist, action.payload]
        }
  
          case  DELET_TEXT : 
          return {
         ...state,
         todolist:state.todolist.filter( task=> task.id !== action.payload)
        }

          case EDIT_TEXT :
            return {
           ...state,
           todolist: state.todolist.map( task => 
             task.id === action.payload.id ? { ...task, title : action.payload.newText } 
             :
             task
            )
        }

          case COMPLET_TEXT:
            return {
            ...state,
            todolist: state.todolist.map( task =>
               task.id === action.payload ? { ...task, isDone : !task.isDone} 
               :
               task
                )
            }

              
         

             default : return state;
       }
    }


export default ToDoReducer;