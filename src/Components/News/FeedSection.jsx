import styles from './News.module.css'
import { Button, Row, Col, FormControl, Form } from 'react-bootstrap';
import CardBoilerplate from '../infoCards/Common/CardBoilerplate';
import Post from './Post'
import { getPosts } from '../../Lib/fetch';
import { useState, useEffect } from 'react'
import AddPostModal from './AddPostModal'

const FeedSection = (props) => {

    const [modal, setModal] = useState(false)
    const [sort, setSort] = useState('new')
    const [sortedPosts, setSortedPosts] = useState(null)

    const showModal = () => setModal(true)
    const hideModal = () => setModal(false)

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        if(posts !== null) {
            if(sort === 'new') {
                setSortedPosts([...posts].reverse())
            } else if(sort === 'old') {
                setSortedPosts([...posts])
            } else if(sort === 'pic') {
                setSortedPosts([...posts].reverse().filter(post => post.image))
            } else if(sort === 'txt') {
                setSortedPosts([...posts].reverse().filter(post => !post.image))
            }
        }
    }, [posts, sort])

    useEffect(() => {
        getAllPosts()
    }, [])

    const getAllPosts = async () => {
        const result = await getPosts()
        if(!result.error) {
            setPosts(result.data)
        } else {
            console.log('Error with getting posts')
        }
    }

    return (
        <>
            <CardBoilerplate noMargin>
                <Row style={{alignItems:'center'}}>
                    <Col className="d-flex">
                        <img src={props.profile?.image} className={styles.ppputin} alt="" />
                        <input type="text" placeholder="Start a post" className={styles.inputField} onClick={showModal} />
                    </Col>
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
            </CardBoilerplate>
            <AddPostModal show={modal} close={hideModal} refresh={getAllPosts} />
            <div style={{marginTop:'7px', height: '16px'}} className="d-flex align-items-center">
                <hr className={styles.hr} />
                <Form.Control as="select" className={styles.sortSelect} onChange={(e) => setSort(e.target.value)}>
                    <option value="new">Recent First</option>
                    <option value="old">Oldest First</option>
                    <option value="pic">W/ Pictures</option>
                    <option value="txt">Only Text</option>
                </Form.Control>
            </div>
            <Posts posts={sortedPosts} refresh={getAllPosts} />
        </>
    )
}

export default FeedSection


const Posts = (props) => {

    return (
        <>
            {
                props.posts && props.posts.slice(0, 30).map(post => <Post key={post._id} {...post} refresh={props.refresh} />)
            }
        </>
    )
}