import {Col, Container, Row} from "react-bootstrap";
import './DashBoard.css'

const Dashboard = function () {
    return (
        <Container className="card mt-3">
          <Row>
              <Col className="mt-4 px-4">
                  Your Dashboard
                  <p style={{color:"gray", fontSize:"0.9rem"}}><em>Private to you</em></p>
              </Col>
          </Row>
            <Row className="top-row mx-2">
                <Col sx={12}>
                </Col>
            </Row>
            <Row className="bottom-row mt-4 mx-2">
                <Col sx={12}>
                </Col>
            </Row>
        </Container>
    )
};

export default Dashboard;
