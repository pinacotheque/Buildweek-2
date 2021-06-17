import { Modal, Form } from "react-bootstrap";
import { useState } from 'react'
import { addPostImage, postPost } from './../../Lib/fetch';

const AddPostModal = (props) => {

  const [post, setPost] = useState({text: ''})
  const [image, setImage] = useState(null)

  const postP = async (e) => {
    e.preventDefault()
    const response = await postPost(post)
    let postId
    if(!response.error) {
      postId = response.data._id
    } else {
      console.log("error with posting experience")
    }
    if(image && postId) {
      const formData = new FormData()
      formData.append('post', image)

      const result = await addPostImage(postId, formData)
      if(!result.error) {
        console.log('successful')
      } else {
        console.log('error with updating profile picture')
      }
    }
    setPost({text: ''})
    setImage(null)
    props.close()
    props.refresh()
  }

  return (
    <Modal show={props.show} onHide={props.close} size="lg" scrollable={true}>
      <Form className="h-100 d-flex flex-column" onSubmit={(e) => postP(e)}>
        <Modal.Header>
          <Modal.Title>Create a post</Modal.Title>
          <div className="ml-auto m-0 p-0" onClick={props.close} style={{ cursor: "pointer" }}>
          </div>
        </Modal.Header>
        <Modal.Body className="p-4 h-100">
            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Summary</Form.Label>
                <Form.Control as="textarea" rows={5} value={post.text} onChange={(e) => setPost({text: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="img">
                <Form.Label>Add image</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex">
          <button style={{ color: "white", backgroundColor: "rgb(10,102,194)", border: "none", borderRadius: "2rem", minWidth: "4rem", minHeight: "2rem" }} className="ml-auto" type="submit" >
            Save
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddPostModal