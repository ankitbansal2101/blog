import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {connect }from 'react-redux';
import {Editblog} from '../action/blog';
const EditBlog = (props) => {
    const {id} = useParams();
    const [data,setdata]=useState({title:'',content:''})
    const [content,setContent]=useState('')
    
    useEffect(()=>{
        if(props.blog[id]!==undefined)
        {
            setdata({title:props.blog[id].title,content:props.blog[id].content});
        }
    },
    [props.blog,id])

    return (
        <div className='container-all'>
        <span className='title'>Edit Blog</span>
        <div>
            <textarea className='title-input' id='title' placeholder='enter blog title' value={data.title}  onChange={(e)=>{setdata({...data,title:e.target.value})}}/><br/>
            <textarea className='content-input' id='content' placeholder='write your blog here' value={data.content}  onChange={(e)=>{setdata({...data,content:e.target.value})}}/>
        
        </div>
        <div>
            <button className='add-blog-btn' onClick={()=>{
                props.Editblog(document.getElementById('title').value,document.getElementById('content').value,id);
                props.history.push("/admin/home")
                }}>Save</button>
        </div>
      
    </div>
    )
}


const mapStateToProps = state => ({
    blog: state.blog.blog,
  });
  
export default connect(mapStateToProps,{Editblog})(EditBlog)
  

