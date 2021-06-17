import { Row, Col, Container } from "react-bootstrap"
import SidePeopleBar from './infoCards/SidePeopleBar/SidePeopleBar';
import FeedSection from "./News/FeedSection";
import MyProfileCard from './Sidebar/ProfileCard';


const Homepage = (props) => {

  return (
    <Container>
      <Row id="homePage">
        <Col xs={2} >
            <MyProfileCard profile={props.profile} />
        </Col>
        <Col xs={6}>
            <FeedSection profile={props.profile} />
        </Col>
        <Col xs={4}>
            <SidePeopleBar />
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage;