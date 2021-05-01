import React from 'react'
import {connect} from 'react-redux';
import {Delblog} from '../action/blog';
import {useHistory} from 'react-router-dom'; 
const BlogItem=(props)=>{
    let history=useHistory()
    return (
        <div className='blog-item'>
            <div className='blog-name'>{props.title}</div>
            <div className='button-area'>
                <button className='edit-button' onClick={()=>history.push('/user/view/'+props.id,{id:'test'})}>View</button>
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

const Bloglist = (props) => {
    return (
        <div className='container-all'>
            <span className='title'>User Home</span>
            <div>
                {console.log(props.blog)}
              {getBlog(props.blog,props)}
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    blog: state.blog.blog,
  });
  
export default connect(mapStateToProps,{Delblog})(Bloglist)
  
