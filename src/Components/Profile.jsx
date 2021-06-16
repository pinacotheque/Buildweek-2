import ProfileCard from './ProfileCard/ProfileCard';
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from './infoCards/InterestsCard';
import EducationCard from './infoCards/EducationCard';
import SkillsEndorsements from './infoCards/SkillsEndorsements';
import Experience from './infoCards/Experience';
import About from './infoCards/About';
import SidePeopleBar from './infoCards/SidePeopleBar/SidePeopleBar';
import Dashboard from './DashBoard/DashBoard';

function Profile(props) {

  return (
    <Container>
      <Row id="profileBody">
        <Col xs={9}>
          {props.myProfile && <ProfileCard img={props.myProfile.image} name={`${props.myProfile.name} ${props.myProfile.surname}`} about={props.myProfile.title} location={props.myProfile.area} profile={props.myProfile} refresh={props.refresh} />}
          <Dashboard />
          {props.myProfile && <About bio={props.myProfile.bio} profile={props.myProfile} refresh={props.refresh} />}
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
