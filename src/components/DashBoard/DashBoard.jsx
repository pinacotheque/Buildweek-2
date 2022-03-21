import { Col, Container, Row } from "react-bootstrap";
import "./DashBoard.css";

export default function Dashboard() {
  return (
    <Container className="card mt-3">
      <Row>
        <Col className="mt-4 px-4">
          Your Dashboard
          <p style={{ color: "gray", fontSize: "0.9rem" }}>
            <em>Private to you</em>
          </p>
        </Col>
      </Row>
      <Row className="top-row mx-2">
        <Col sx={12} className="d-flex">
          <div className="left-box">
            <h2 className="ml-2 mt-3">3</h2>
            <p className="ml-2">Who viewed your profile</p>
          </div>
          <div className="center-box">
            <h2 className="ml-2 mt-3">0</h2>
            <p className="ml-2">Article Views</p>
          </div>
          <div className="right-box">
            <h2 className="ml-2 mt-3">3</h2>
            <p className="ml-2">Search appearances</p>
          </div>
        </Col>
      </Row>
      <Row className="bottom-row mt-4 mx-2">
        <Col sx={12}>
          <ul className="list-group">
            <li style={{ display: "flex" }}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="28"
                  height="28"
                  focusable="false"
                >
                  <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
                </svg>
              </span>
              <div
                style={{
                  borderBottom: "0.1rem solid #aaa8a8",
                  width: "100%",
                }}
                className="ml-2"
              >
                <strong>Creator mode: Off</strong>
                <p className="card-para">
                  Grow your audience and get discovered by highlighting content
                  on your profile.
                </p>
              </div>
            </li>
            <li style={{ display: "flex" }}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="28"
                  height="28"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
              </span>
              <div
                style={{
                  borderBottom: "0.1rem solid #aaa8a8",
                  width: "100%",
                }}
                className="ml-2"
              >
                <strong>My Network</strong>
                <p>Manage your connections, events and interests.</p>
              </div>
            </li>
            <li style={{ display: "flex" }}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="28"
                  height="28"
                  focusable="false"
                >
                  <path d="M12 9.88A2.13 2.13 0 119.88 12 2.13 2.13 0 0112 9.88M12 9a3 3 0 103 3 3 3 0 00-3-3zm9-4H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM4 7h2.13A2.13 2.13 0 014 9.13V7zm0 10v-2.12A2.13 2.13 0 016.13 17H4zm16 0h-2.12A2.13 2.13 0 0120 14.88V17zm0-3a3 3 0 00-3 3H7a3 3 0 00-3-3v-4a3 3 0 003-3h10a3 3 0 003 3v4zm0-4.87A2.13 2.13 0 0117.88 7H20v2.13z"></path>
                </svg>
              </span>
              <div
                style={{
                  borderBottom: "0.1rem solid #aaa8a8",
                  width: "100%",
                }}
                className="ml-2"
              >
                <strong>Salary Insights</strong>
                <p>See how your salary compares to others in the community.</p>
              </div>
            </li>
            <li style={{ display: "flex" }}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="28"
                  height="28"
                  focusable="false"
                >
                  <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                </svg>
              </span>
              <div className="ml-2">
                <strong>My items</strong>
                <p>Keep track of your jobs, courses and articles.</p>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
