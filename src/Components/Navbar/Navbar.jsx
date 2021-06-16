import { Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from "./assets/logo.png"
import pp from "./assets/putin.jpeg"
import styles from "./Navbar.module.css"
import NavButton from "./NavButton"
import {useState} from 'react'


function NavBar (){

    const [navbar,setNavbar] = useState(false)

    const ChangeDisplay = () => {
        if(window.scrollY > 250){
            setNavbar(true) 
        }else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', ChangeDisplay)

    return(
        <>
        <Navbar bg="white" expand="lg" className={`${styles.navbar} navbar p-0 justify-content-between`}>
            <Container>
                <div>
                    <Form inline>
                        <Navbar.Brand href="#home"><img src={logo} style= {{ width:'38px',height:'38px', borderRadius:'5px'}} alt="" /></Navbar.Brand>
                        <FormControl type="text" bg="" placeholder="Search" className={ styles.searchbar}></FormControl>
                    </Form> 
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=" d-flex">
                        <Nav className="nav-h6 d-flex">
                            <Nav.Link href="#home" className={styles.navlink} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                <h6 className="mt-1 mb-0" style={{fontSize:'12px'}} >Home</h6>
                            </Nav.Link> 
                            <Nav.Link href="#link" className={styles.navlink}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.323 6.323 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                                <h6 className="mt-1 mb-0" style={{fontSize:'12px'}} > My Network</h6>
                            </Nav.Link>
                            <Nav.Link href="#link" className={styles.navlink}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.238 0L0 6.85v5.65z"/>
                                </svg>
                                <h6 className="mt-1 mb-0" style={{fontSize:'12px'}} >Jobs</h6>
                            </Nav.Link>
                            <Nav.Link href="#link" className={ styles.navlink} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.923.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                                <h6 className="mt-1 mb-0" style={{fontSize:'12px'}} >Messaging</h6>
                            </Nav.Link>
                            <Nav.Link href="#link" className={ styles.navlink}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                </svg>
                                <h6 className="mt-1 mb-0" style={{fontSize:'12px'}} >Notifications</h6>
                            </Nav.Link>
                            <div className={ styles.dropmenu}> 
                                <img src={pp} className={styles.dropmenuImg} alt="" />
                                <NavDropdown title="Me" className={styles.meTitle}  id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className={ styles.gridmenu}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                                </svg>            
                                <NavDropdown title="Work" className={styles.meWork} style={{padding:'0'}} id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <Nav.Link href="#link" className={styles.navlink}>
                                <h6 className={ styles.premiumLink} >Try Premium for <br/> free</h6>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>

        <Navbar bg="white" expand="lg" className={`${styles.subNav} ${navbar ? styles.navbarScrollactive : styles.navbarScroll}`}>
            <Container >
                <Form inline className={styles.scrollNav} >
                    <Navbar.Brand href="#home" className="m-0 mr-2"><img src={pp} className={styles.scrollNavImg} alt="" /></Navbar.Brand>  
                    <div href="#link" className={ styles.navname}>
                        <h6 className={styles.scrollNavText} >Name Surname</h6>
                        <h6 className=" mb-0" style={{fontSize:'12px',fontWeight:'400'}} >Job Title</h6>
                    </div>
                </Form>
                <div>
                    <NavButton text="More"/>
                    <NavButton text="Add section"/>
                    <NavButton text="Open to" blue/>
                </div>
            </Container>
        </Navbar>
        </> 
    )
}

export default NavBar