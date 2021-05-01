import { ADD_BLOG,EDIT_BLOG,REMOVE_BLOG,ADD_COMMENT   } from '../action/types';
  
  

    const initialState={
       blog: []
    };
    

    function removeElement(array, index) {
        let new_array=[]
        array.map((element,indexs)=>{
             if(index!==indexs){
                 new_array.push(element);
             }
        })
        console.log('n',new_array,index);
        return new_array;
    }
    
    export default function(state=initialState,action){
        const {type,payload}=action;
    
        switch(type){
            case ADD_BLOG:
                state.blog.push(payload)
                localStorage.setItem('data',{...state})
                return {...state}
            case EDIT_BLOG:
                state.blog[payload.index].title=payload.title
                state.blog[payload.index].content=payload.content
                return {...state}
            case REMOVE_BLOG:
                state.blog=removeElement( state.blog,payload.index)
                localStorage.setItem('data',{...state})
                return {...state}
            case ADD_COMMENT:
                state.blog[payload.index].comment.push(payload.comment)
                localStorage.setItem('data',{...state})
                return {...state}
            default :
              return state
        }
    }