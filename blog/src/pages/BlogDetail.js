import React,{useState} from 'react'
import {Addcomment} from '../action/blog';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

const Comment=(props)=>{
    return(
        <div className='comment-wrapper'>
            <span>{props.text}</span>
        </div>
    )
}


const getCommen=(props,id)=>{
    
   let list=[]
   if( props.blog[id].comment==undefined)
         return
   console.log('comment',props.blog[id].comment);
  // props.blog[id].comment.map((element,index)=>{
   //    list.push(<Comment key={index} text={element}/>)
   //})
   props.blog[id].comment.forEach((element,index) => {
    list.push(<Comment key={index} text={element}/>);
   });

   return list;
}

const BlogDetail = (props) => {
    const [re,set]=useState(true)
    var {id}=useParams();
    return (
        <div className='container-all'>
            <span className='title'>Blog Details</span>
            <div>
                <h1 className='title-input' >{props.blog?props.blog[id].title:''}</h1><br/>
                <span className='content-input'>{props.blog?props.blog[id].content:''}</span>
            
            </div>
            <div className='comment-area'>
               {getCommen(props,id)}
            </div>
            <div>
                <textarea className='title-input' id='comment' style={{marginTop:50}} placeholder='add your comment'></textarea>
                <button className='add-blog-btn' onClick={()=>{
                    props.Addcomment(document.getElementById('comment').value,id);
                    set(!re);
                    }}>comment</button>
            </div>
          
        </div>
    )
}

const mapStateToProps = state => ({
    blog: state.blog.blog,
  });
  

export default connect(mapStateToProps,{Addcomment})(BlogDetail)
