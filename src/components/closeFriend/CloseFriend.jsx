import React from 'react'
import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <div>
            <li className="sidebarFriend">
              <img className='sidebarFriendImage' src={user.profilePicture} alt="" />
              <span className="sidebarFriendName">{user.username}</span>
            </li>
    </div>
  )
}
