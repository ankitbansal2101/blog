import React from 'react'
import {Addblog} from '../action/blog';
import {connect} from 'react-redux';

const AddBlog = (props) => {
    return (
        <div className='container-all'>
            <span className='title'>Add Blog</span>
            <div>
                <textarea className='title-input' id='title' placeholder='enter blog title'/><br/>
                <textarea className='content-input' id='content' placeholder='write your blog here'/>
            
            </div>
            <div>
                <button className='add-blog-btn' onClick={()=>{
                    props.Addblog(document.getElementById('title').value,document.getElementById('content').value);
                    props.history.push("/admin/home")
                    }}>Save</button>
            </div>
          
        </div>
    )
}

export default connect(null,{Addblog})(AddBlog)
