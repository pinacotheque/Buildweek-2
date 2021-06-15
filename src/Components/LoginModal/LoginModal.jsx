import { Modal, Button } from "react-bootstrap"

const LoginModal = (props) => {

    return (
        <Modal show={props.show}>
            <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="primary">
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal