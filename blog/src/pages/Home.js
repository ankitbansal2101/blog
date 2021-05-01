import React from 'react'
const Home = (props) => {
    return (
        <div className='container'>
         <div className='home-wrapper'>
            <button className='button' onClick={()=>props.history.push('user/home')}>User</button>
            <button className='button' onClick={()=>props.history.push('admin/home')}>Admin</button>
         </div>
        </div>
    )
}

export default Home
