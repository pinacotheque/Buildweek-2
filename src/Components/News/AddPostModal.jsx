import { Modal, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { BACKEND_URL } from "../../env.js"

const AddPostModal = (props) => {
  const [post, setPost] = useState({ text: "" })
  const [image, setImage] = useState(null)

  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    setPost({ text: props.edit !== null ? props.edit.text : null })
    setImageUrl(props.edit !== null ? props.edit.image : null)
  }, [props.edit])

  const imageHandler = async (id) => {
    if (imageUrl) {
      const result = await fetch(BACKEND_URL + "/posts/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageUrl }),
      })
      if (result.ok) {
        console.log("successfully updated profile picture")
      } else {
        console.log("error with updating post picture")
      }
    } else {
      const formData = new FormData()
      formData.append("post", image)

      const result = await fetch(BACKEND_URL + "/posts/" + id, {
        method: "POST",
        body: formData,
      })

      if (result.ok) {
        console.log("successfully updated profile picture")
      } else {
        console.log("error with updating post picture")
      }
    }
  }

  const postP = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        BACKEND_URL + "/posts/" + localStorage.getItem("myId") + "/new",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      if (response.ok) {
        setPost({
          post: "",
        })
        if (image || imageUrl) {
          const id = await response.json()
          await imageHandler(id)
        }
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  const putP = async () => {
    const response = await fetch(BACKEND_URL + "/posts/" + props.edit._id, {
      method: "PUT",
      body: JSON.stringify(...[post]),
      headers: {
        "Content-type": "application/json",
      },
    })
    if (!response.error) {
      console.log("successfully editted the post")
    } else {
      console.log("error with posting experience")
    }
    if (image || imageUrl) {
      await imageHandler(props.edit._id)
    }
  }

  const doPost = async (e) => {
    e.preventDefault()
    if (props.edit?._id) {
      await putP(e)
    } else {
      await postP(e)
    }
    setImageUrl(null)
    setImage(null)
    setPost({ text: "" })

    props.close()
    props.refresh()
  }

  return (
    <Modal
      show={props.show}
      onHide={() => {
        props.close()
        setImageUrl(null)
        setImage(null)
        setPost({ text: "" })
      }}
      size="lg"
      scrollable={true}>
      <Form className="h-100 d-flex flex-column" onSubmit={(e) => doPost(e)}>
        <Modal.Header>
          <Modal.Title>Create a post</Modal.Title>
          <div
            className="ml-auto m-0 p-0"
            onClick={props.close}
            style={{ cursor: "pointer" }}></div>
        </Modal.Header>
        <Modal.Body className="p-4 h-100">
          <Form.Group className="mb-3" controlId="bio">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={post.text}
              onChange={(e) => setPost({ text: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="img">
            <Form.Label>Upload image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              disabled={imageUrl ? true : false}
            />
          </Form.Group>
          <div className="mb-2">OR</div>
          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>Enter image url</Form.Label>
            <Form.Control
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              disabled={image ? true : false}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex">
          <button
            style={{
              color: "white",
              backgroundColor: "rgb(10,102,194)",
              border: "none",
              borderRadius: "2rem",
              minWidth: "4rem",
              minHeight: "2rem",
            }}
            className="ml-auto"
            type="submit">
            Save
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddPostModal
