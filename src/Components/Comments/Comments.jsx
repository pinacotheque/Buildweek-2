import CardBoilerplate from "../infoCards/Common/CardBoilerplate"
import { Row, Col } from "react-bootstrap"
import styles from "./Comments.module.css"
import { useState } from "react"



const Comments = (props) => {

    return(
    
    <CardBoilerplate noMargin>
            <Row style={{ alignItems: "center" }}>
              <Col className="d-flex">
                <img src={props.image} className={styles.ppputin} alt="" />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className={styles.inputField}
                  
                />
              </Col>
            </Row>

            {/* {props.usercomments &&  */}
            
            <Row style={{ marginTop: "35px" }}>
            <Col className="d-flex ">
                <img src={props.image} className={styles.ppputin} alt="" />
                
            <div style={{ width: "100%", height:"100%",borderRadius: "10px", backgroundColor: "#F2F2F2"} }>

            <div style= {{fontSize: "13px", fontWeight:"700", paddingLeft: "10px", paddingTop: "5px" }}>{props.name} </div>
           
            </div> 
              </Col>
            </Row>
            
    </CardBoilerplate>
    
    )
} 
export default Comments