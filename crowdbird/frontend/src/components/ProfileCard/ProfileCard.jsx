import React from 'react'
import Cover from '../../img/Shop.jpg'
import Profile from '../../img/ProfilePic.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span>Melani Augastin</span>
            <span>CEO - Tea Center</span>
        </div>

        <div className="FollowStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>5.2 Million</span>
                    <span>Funds Raised</span>
                </div>

                <div className="vl"></div>
                <div className="follow">
                    <span>721 People</span>
                    <span>People Funded</span>
                </div>
                </div>
                <hr />
            </div>

            <span>
                Latest Successors
            </span>

        </div>

    
  )
}

export default ProfileCard
