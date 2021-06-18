import { Button, Modal } from 'react-bootstrap'
import { postProfilePicture, putProfile } from '../../Lib/fetch'
import { useState, useEffect} from 'react'

const ProfileModalImg = (props) => {

    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
      setImageUrl(props.edit)
    }, [props.show])
    
    const imageHandler = async () => {
      const formData = new FormData()
      formData.append('profile', image)

      const result = await postProfilePicture(formData)

      if(!result.error) {
        console.log('successfully updated profile picture')
      } else {
        console.log('error with updating profile picture')
      }
    }

    const imageUrlHandler = async () => {
      const data = {image: imageUrl}
      const result = await putProfile(data)
      if(!result.error) {
        console.log('successfully updated profile picture')
      } else {
        console.log('error with updating profile picture')
      }
    }

    const doImage = async () => {
      imageUrl ? await imageUrlHandler() : await imageHandler()
      props.close()
      props.refresh()
    }

    return (
        <Modal show={props.show} onHide={() => {props.close(); setImage(null); setImageUrl(null)}}>
          <Modal.Header closeButton>
            <Modal.Title>Change picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label className="d-block" htmlFor="img"><strong>Upload image</strong></label>
            <input type="file" id="img" name="image" onChange={(e) => setImage(e.target.files[0])} disabled={imageUrl ? true : false} />
            <div className="my-3">OR</div>
            <label className="d-block" htmlFor="imgUrl"><strong>Enter image url</strong></label>
            <input className="w-100" type="text" id="imgUrl" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} disabled={image ? true : false} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={() => doImage()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default ProfileModalImg