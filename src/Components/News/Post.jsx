import styles from './News.module.css'
import NewsBoilerplate from "./NewsBoilerplate"
import { Button,Row, Col } from 'react-bootstrap';
import IconBtn from './IconBtn';
import pp from './putin.jpeg'
import feedData from './Feed.json'
import Feed from './Feed'

const EducationCard = (props) => {
    return (
        <>
        <NewsBoilerplate >
          <Row style={{alignItems:'center'}}>
            <img src={pp} className={styles.ppputin}/>
           <input type="text"
            placeholder="Start a post" className={styles.inputField}/>
        </Row>

        <Row className='mt-4 flex-row justify-content-between'>
            
            <div className={styles.couples}>
                 <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#70b5f9'}} className={styles.svgs} viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg> 
            <h6 className={styles.h6s}>Photo</h6> 
            </div>
               
            
            <div className={styles.couples}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#7fc15e'}} className={styles.svgs} viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <h6 className={styles.h6s}>Video</h6> 
            </div>
               
           
            <div className={styles.couples}>
               <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#e7a33e'}} className={styles.svgs} viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            <h6 className={styles.h6s}>Event</h6>  
            </div>
           
            
            <div className={styles.couples}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#f5987e'}} className={styles.svgs} viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <h6 className={styles.h6s}>Write article</h6>
            </div>
        </Row>
        </NewsBoilerplate>
            <Row style={{marginTop:'7px',alignItems:'center'}}>
            <Col sm={10}>
            <hr/>
            </Col> 


            <Col sm={2}>
            <h6 style={{marginBottom:'0',fontWeight:'400',fontSize:'12px'}}>Sort by: <span style={{fontWeight:'600',fontSize:'14px'}} >Top</span></h6>
            </Col> 
            
            </Row>

            <div>


            {feedData.map(news => (
                 <Feed news={news} />
            )
            )}

            </div>
            
            
           

        </>
    )
}

export default EducationCard


const EducationCardCard = (props) => {
    return (
        <Col className={styles.educationCol}>
            <Row>
                <div className={`${styles.education} d-flex`}>
                    <img src={props.src} alt="" />
                    <div className="mr-auto">
            
                    </div>
                    <IconBtn edit />
                </div>
            </Row>
        </Col>
    )
}
