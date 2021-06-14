import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import { Row, Col, Container } from "react-bootstrap"
import InterestsCard from './Components/infoCards/InterestsCard';
import EducationCard from './Components/infoCards/EducationCard';
import SkillsEndorsements from './Components/infoCards/SkillsEndorsements';
import Experience from './Components/infoCards/Experience';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <ProfileCard />
          <SkillsEndorsements />
          <Experience />
          <InterestsCard />
          <EducationCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
