import ProfileCard from "./ProfileCard/ProfileCard"
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from "./infoCards/InterestsCard"
import EducationCard from "./infoCards/EducationCard"
import SkillsEndorsements from "./infoCards/SkillsEndorsements"
import Experience from "./infoCards/Experience"
import About from "./infoCards/About"
import SidePeopleBar from "./infoCards/SidePeopleBar/SidePeopleBar"
import { useState, useEffect } from "react"
import { useRouteMatch } from "react-router-dom"
import { getProfile } from "./../Lib/fetch"

function PublicProfile(props) {
  const [profile, setProfile] = useState(null)

  let match = useRouteMatch()

  useEffect(() => {
    fetchProfile(match.params.id)
  }, [match.params.id])

  const fetchProfile = async (id) => {
    const result = await fetch("http://localhost:3001/api/profiles/" + id)
    if (!result.error) {
      const data = await result.json()
      setProfile(data)
    } else {
      console.log("error with getting profile")
    }
  }

  return (
    <Container>
      <Row id="profileBody">
        <Col xs={9}>
          {profile && (
            <ProfileCard
              public
              img={profile.image}
              name={`${profile.name} ${profile.surname}`}
              about={profile.title}
              location={profile.area}
              profile={profile}
              refresh={props.refresh}
            />
          )}
          {profile && (
            <About bio={profile.bio} profile={profile} refresh={props.refresh} public />
          )}
          <SkillsEndorsements public />
          {profile && <Experience public id={match.params.id} />}
          <InterestsCard public />
          <EducationCard public />
        </Col>
        <Col xs={3}>
          <SidePeopleBar refresh={props.profile} />
        </Col>
      </Row>
    </Container>
  )
}

export default PublicProfile
