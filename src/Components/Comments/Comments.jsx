import { Row, Col } from "react-bootstrap"
import styles from "./Comments.module.css"
import { useState } from "react"

const Comments = (props) => {
  return (
    <Row style={{ marginTop: "15px" }}>
      <Col className="d-flex ">
        <img src={props.comm?.user?.image} className={styles.ppputin} alt="" />

        <div
          className="p-2 px-3"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            backgroundColor: "#F2F2F2",
          }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}>
            {props.comm?.user.name}{" "}
          </div>
          <div style={{ fontSize: "14px" }}>{props.comm?.comment}</div>
        </div>
      </Col>
    </Row>
  )
}
export default Comments
