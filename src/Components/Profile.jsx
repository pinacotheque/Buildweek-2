import ProfileCard from "./ProfileCard/ProfileCard.jsx"
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from "./infoCards/InterestsCard.jsx"
import EducationCard from "./infoCards/EducationCard.jsx"
import SkillsEndorsements from "./infoCards/SkillsEndorsements.jsx"
import Experience from "./infoCards/Experience.jsx"
import About from "./infoCards/About.jsx"
import SidePeopleBar from "./infoCards/SidePeopleBar/SidePeopleBar.jsx"
import Dashboard from "./DashBoard/DashBoard.jsx"

function Profile(props) {
  return (
    <Container>
      <Row id="profileBody">
        <Col xs={12} lg={9}>
          {props.myProfile && (
            <ProfileCard
              img={props.myProfile.image}
              name={`${props.myProfile.name} ${props.myProfile.surname}`}
              about={props.myProfile.title}
              location={props.myProfile.area}
              profile={props.myProfile}
              refresh={props.refresh}
            />
          )}
          <Dashboard />
          {props.myProfile && (
            <About
              bio={props.myProfile.bio}
              profile={props.myProfile}
              refresh={props.refresh}
            />
          )}
          <SkillsEndorsements />
          <Experience id={localStorage.getItem("myId")} />
          <InterestsCard />
          <EducationCard />
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <SidePeopleBar profile={props.profile} />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
