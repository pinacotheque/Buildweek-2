import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import footer from './components/footer'
import { Row, Col, Container } from "react-bootstrap"

function App() {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;