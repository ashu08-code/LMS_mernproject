import React, { useEffect } from 'react'
import HeroSection from '../Components/Home/HeroSection'
import LatestSkills from '../Components/Home/LatestSkills'
import OurTracks from '../Components/Home/OurTracks'
import LearningExperience from '../Components/Home/LearningExperience'
import Subscribe from '../Components/Home/Subscribe' 
import {  useSelector } from 'react-redux' 

const Home = () => {
 
  const userInfo = useSelector((state) => {
    return state.auth.userInfo;
  });

  console.log("userInfo=====",userInfo)

  return (
    <>
     {/* <div>
      <h1>User Info</h1>
      {userInfo ? (
        <p>User ID: {userInfo.user_id}</p>
      ) : (
        <p>No user info available.</p>
      )}
    </div> */}
     <HeroSection/>
     <LatestSkills/>
     <OurTracks/>
     <LearningExperience/>
     <Subscribe/>
    
    </>
  )
}

export default Home
