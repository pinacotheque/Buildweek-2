import ProfileCard from "./ProfileCard/ProfileCard";
import { Row, Col, Container } from "react-bootstrap";
import InterestsCard from "./infoCards/InterestsCard";
import EducationCard from "./infoCards/EducationCard";
import SkillsEndorsements from "./infoCards/SkillsEndorsements";
import Experience from "./infoCards/Experience";
import About from "./infoCards/About";
import SidePeopleBar from "./infoCards/SidePeopleBar/SidePeopleBar";
// import DashBoard from "./DashBoard/DashBoard";

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
          {/* <DashBoard /> */}
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
  );
}

export default Profile;
