import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from './Components/infoCards/InterestsCard';
import EducationCard from './Components/infoCards/EducationCard';
import SkillsEndorsements from './Components/infoCards/SkillsEndorsements';
import Experience from './Components/infoCards/Experience';
import About from './Components/infoCards/About';
import SidePeople from './Components/infoCards/SidePeople';

function App() {
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
          <SidePeople title="People Also Viewed" top />
          <SidePeople title="People you may know" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
