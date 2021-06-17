import { useEffect } from "react"
import { useState } from "react"
import { getProfileById } from "../../assets/fetch"

import "./MyProfileCard.css"

const MyProfileCard = () => {
  const [myProfile, setMyProfile] = useState(null)

  useEffect(() => getProfileById("me", setMyProfile), [])

  return (
    myProfile && (
      <section className="feed-my-profile">
        <div className="hero"></div>
        <img className="avatar rounded-circle" src={myProfile.image} alt="" />
        <h6 className="text-center my-name">
          {myProfile.name} {myProfile.surname}
        </h6>
        <p className="text-center my-title border-bottom pb-3">{myProfile.title}</p>
        <div className="d-flex flex-column px-3 views border-bottom">
          <div className="d-flex justify-content-between mt-3">
            <p>Who viewed your profile</p>
            <span>62</span>
          </div>
          <div className="d-flex justify-content-between pb-3">
            <p>Views of your post</p>
            <span>108</span>
          </div>
        </div>
        <p className="p-3 my-items">
          <i className="fas fa-bookmark mr-2"></i>
          My Items
        </p>
      </section>
    )
  )
}

export default MyProfileCard
