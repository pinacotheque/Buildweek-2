import ProfileCard from './ProfileCard/ProfileCard';
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from './infoCards/InterestsCard';
import EducationCard from './infoCards/EducationCard';
import SkillsEndorsements from './infoCards/SkillsEndorsements';
import Experience from './infoCards/Experience';
import About from './infoCards/About';
import SidePeopleBar from './infoCards/SidePeopleBar/SidePeopleBar';
import Dashboard from './DashBoard/DashBoard';
import { useState, useEffect } from 'react';


function Profile(props) {

  const [myProfile, setMyProfile] = useState(null)

  useEffect(() => {
    fetchProfile()
  }, [props.loggedIn])

  const fetchProfile = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })
    if(response.ok) {
      const data = await response.json()
      setMyProfile(data)
    } else {
      console.log("error fetching profile")
    }
  }

  return (
    <Container>
      <Row id="profileBody">
        <Col xs={9}>
          {myProfile && <ProfileCard img={myProfile.image} name={`${myProfile.name} ${myProfile.surname}`} about={myProfile.title} location={myProfile.area} />}
          <Dashboard />
          {myProfile && <About bio={myProfile.bio} />}
          <SkillsEndorsements />
          <Experience />
          <InterestsCard />
          <EducationCard />
        </Col>
        <Col xs={3}>
          <SidePeopleBar />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
