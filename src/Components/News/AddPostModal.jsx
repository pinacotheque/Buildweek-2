import { Modal, Form } from "react-bootstrap";
import { useState } from 'react'
import { postPost } from './../../Lib/fetch';

const AddPostModal = (props) => {

    const [post, setPost] = useState({text: ''})

//   const changeData = (id, value) => {
//     const profile = {...profData, [id]: value}
//     setProfData(profile)
//   }

  const postP = async (e) => {
    e.preventDefault()
    const response = await postPost(post)
    if(!response.error) {
      props.close()
      props.refresh()
    } else {
      console.log("error with posting experience")
    }
  }

  return (
    <Modal show={props.show} onHide={props.close} size="lg" scrollable={true}>
      <Form className="h-100 d-flex flex-column" onSubmit={(e) => postP(e)}>
        <Modal.Header>
          <Modal.Title>Edit About</Modal.Title>
          <div className="ml-auto m-0 p-0" onClick={props.close} style={{ cursor: "pointer" }}>
          </div>
        </Modal.Header>
        <Modal.Body className="p-4 h-100">
            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Summary</Form.Label>
                <Form.Control as="textarea" rows={5} value={post.text} onChange={(e) => setPost({text: e.target.value})} />
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