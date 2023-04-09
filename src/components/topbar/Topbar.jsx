import React from 'react'
import "./topbar.css"
import {Chat, Notifications, Person, Search} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">KonaIT</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon' />
          <input placeholder='Search' className="searchInput" />  
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Feed</span>
        </div>         
         <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
          <span className="iconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
          <span className="iconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
          <span className="iconBadge">7</span>
          </div>
         </div>
          <img src="/assets/profile/profile.jpg" alt="" className="topbarImg" />


      </div>
          
      </div>
  )
}
