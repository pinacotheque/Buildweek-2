import ProfileCard from './ProfileCard/ProfileCard';
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from './infoCards/InterestsCard';
import EducationCard from './infoCards/EducationCard';
import SkillsEndorsements from './infoCards/SkillsEndorsements';
import Experience from './infoCards/Experience';
import About from './infoCards/About';
import SidePeopleBar from './infoCards/SidePeopleBar/SidePeopleBar';


function Profile() {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <ProfileCard />
          <About />
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
