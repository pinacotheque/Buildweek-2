import ProfileCard from './ProfileCard/ProfileCard';
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from './infoCards/InterestsCard';
import EducationCard from './infoCards/EducationCard';
import SkillsEndorsements from './infoCards/SkillsEndorsements';
import Experience from './infoCards/Experience';
import About from './infoCards/About';
import SidePeopleBar from './infoCards/SidePeopleBar/SidePeopleBar';
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Dashboard from './DashBoard/DashBoard';


function Profile() {
  return (
    <>
      <Navbar />
      <Container>
        <Row id="profileBody">
          <Col xs={9}>
            <ProfileCard />
            <Dashboard />
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
      <Footer />
    </>
  );
}

export default Profile;
