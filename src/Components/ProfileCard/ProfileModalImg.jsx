import { Button, Modal } from 'react-bootstrap'
import { postProfilePicture } from '../../Lib/fetch'
import {useState} from 'react'

const ProfileModalImg = (props) => {

    const [image, setImage] = useState(null)

    const imageHandler = async () => {
      const formData = new FormData()
      formData.append('profile', image)

      const result = await postProfilePicture(formData)

      if(!result.error) {
        props.close()
        props.refresh()
      } else {
        console.log('error with updating profile picture')
      }
    }

    return (
        <Modal show={props.show} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Change picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {props.close(); imageHandler() }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default ProfileModalImg