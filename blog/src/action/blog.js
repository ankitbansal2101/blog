import { ADD_BLOG,EDIT_BLOG,REMOVE_BLOG,ADD_COMMENT   } from '../action/types';

export const Addblog=(title,content)=>async dispatch=>{
    dispatch({type:ADD_BLOG,payload:{title,content,comment:[]}})
 }


 export const Delblog=(index)=>dispatch=>{
     dispatch({type:REMOVE_BLOG,payload:{index}})
 }

 export const Editblog=(title,content,index)=>dispatch=>{
     dispatch({type:EDIT_BLOG,payload:{title,content,index}});
 }

 export const Addcomment=(comment,index)=>dispatch=>{
     dispatch({type:ADD_COMMENT,payload:{comment,index}})
 }