import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import { Row, Col, Container } from "react-bootstrap"

function App() {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <ProfileCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
