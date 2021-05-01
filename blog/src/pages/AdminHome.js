import React from 'react'
import {connect} from 'react-redux';
import {Delblog} from '../action/blog';
import { useHistory } from "react-router-dom";
const BlogItem=(props)=>{
    let history=useHistory()
    return (
        <div className='blog-item'>
            <div className='blog-name'>{props.title}</div>
            <div className='button-area'>
                <button className='edit-button' onClick={()=>history.push('/admin/edit/'+props.id,{id:'test'})}>Edit</button>
                <button className='delet-button' onClick={()=>props.p.Delblog(props.id)}>Delete</button>
            </div>
        </div>
    )
}

const getBlog=(data,props)=>{
    let list=[];
    console.log('data ',data)
    if(data===[])
       return []
    data.map((element,index)=>{
        list.push(<BlogItem Delblog={props.Delblog} title={element.title} key={index} p={props} id={index} />)
    })
    return list ;
}

const AdminHome = (props) => {
    return (
        <div className='container-all'>
             <button className='back' onClick={()=>props.history.push('/')}>Back</button>
            <span className='title'>Admin Home</span>
            <div>
                {console.log(props.blog)}
              {getBlog(props.blog,props)}
            </div>
            <div>
                <button className='add-blog-btn' onClick={()=>props.history.push('/admin/add-blog')}>Add Blog</button>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    blog: state.blog.blog,
  });
  
export default connect(mapStateToProps,{Delblog})(AdminHome)
  
