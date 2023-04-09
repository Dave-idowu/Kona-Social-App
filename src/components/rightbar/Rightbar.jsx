import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return(
      <>
          <div className="birthdayContainer">
            <img className='birthdayImg' src="assets/gift.jpg" alt=""/>
            <span className="birthdayText"> <b>Temi Turner</b> and <b>3 others</b> have their birthdays today</span>
          </div>

          <img src="assets/ad.jpg" alt="" className="rightbarAd"/>

          <h4 className="rightbarTitle">Online Friends</h4>

          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user ={u}/>
            ))}
          </ul>
          </>
    )
  }

  const ProfileRightBar = () => {
    return(
    <>
      <h4 className='rightbarTitle'> User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Southampton</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Lagos</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship status:</span>
          <span className="rightbarInfoValue">In a Relationship</span>
        </div>
     </div>  
    <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/profile/prec.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Precious Yusuf </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/okiki.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Okiki Onanibosi </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/dani.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Samuel Daniel </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/temi.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Temi Turner </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/profile.jpg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">David Mololuwa </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/profile6.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Kayode Tobi </span>
        </div>
      </div>
     </>
    )
  }
  return (
    <div className='rightBar'> 
        <div className="rightbarWrapper">
          {profile? <ProfileRightBar/> : <HomeRightBar/> }
        </div>
    </div>
  )
}
