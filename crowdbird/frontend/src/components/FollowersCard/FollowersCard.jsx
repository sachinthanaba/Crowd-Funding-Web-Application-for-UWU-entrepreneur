import React from 'react'
import './FollowersCard.css'
import { Followers } from '../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3 class="fc-heading">Ongoing Fund Raisings</h3>

        {Followers. map((follower, id)=>{
          return(
            <div className="follower">
              <div>
                <img src={follower.img} alt="" className='followerImage'/>
                <div className="name">
                  <span>{follower.name}</span>
                  <span>{follower.CEO}</span>
                </div>
              </div>
              <button className='button fc-button'>Donate</button>
            </div>
          )
        })}
    </div>
  )
}

export default FollowersCard
