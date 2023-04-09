import React from 'react'
import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
        <Sidebar/>
       <div className="profileRight">
         <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/posts/post2.jpg" alt="" className="profileCoverImg"/>
              <img src="assets/profile/profile.jpg" alt="" className="profileUserImg"/>
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName' >David Idowu</h4>
              <span className='profileInfoDesc'>Hello, this is my bio.</span>
            </div>
         </div>

         <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
         </div>
         
       </div>      
    </div>
    </>
  )
}
