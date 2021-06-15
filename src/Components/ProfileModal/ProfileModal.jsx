import { Modal, Form } from "react-bootstrap";

import { useState } from 'react'

const ProfileModal = (props) => {

//   const [checked, setChecked] = useState(false)
//   const [experience, setExperience] = useState(
//     {
//       role: props.edit != null ? props.edit.role : '',
//       company: props.edit != null ? props.edit.company : '',
//       area: props.edit != null ? props.edit.area : '',
//       startDate: props.edit != null ? props.edit.startDate : '',
//       endDate: props.edit != null ? props.edit.endDate : '',
//       description: props.edit != null ? props.edit.description : '',
//     }
//   )

//   const changeData = (id, value) => {
//     const exp = {...experience, [id]: value}
//     setExperience(exp)
//   }

//   const postExperience = async (e) => {
//     e.preventDefault()
//     const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences`, {
//       method: "POST",
//       body: JSON.stringify(experience),
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem('token')
//       }
//     })
//     if(response.ok) {
//       props.closeFunc()
//     } else {
//       console.log("error with posting experience")
//     }
//   }

//   const putExperience = async (e) => {
//     e.preventDefault()
//     const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences/${props.edit._id}`, {
//       method: "PUT",
//       body: JSON.stringify(experience),
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem('token')
//       }
//     })
//     if(response.ok) {
//       props.reload()
//       props.closeFunc()
//     } else {
//       console.log("error with posting experience")
//     }
//   }

//   const doExperience = (e) => {
//     props.edit ? putExperience(e) : postExperience(e)
//   }

  return (
    <Modal show={props.show} onHide={props.closeFunc} size="lg" scrollable={true}>
      <Form >
        <Modal.Header>
          <Modal.Title>Add Experience</Modal.Title>
          <div className="ml-auto m-0 p-0" onClick={props.closeFunc} style={{ cursor: "pointer" }}>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="role">Title *</label>
            <input type="text" className="form-control" id="role" placeholder="Ex: Retail Sales Manager" aria-describedby="basic-addon3" 
               required />
          </div>
          <div className="mt-4">
            <label htmlFor="EmploymentType">Employment type</label>
            <div className="input-group mb-3">
              <select className=" w-100 sel" id="EmploymentType" aria-label="Example select with button addon" style={{ height: "2rem" }}>
                <option selected>-</option>
                <option value={"Full-time"}>Full-time</option>
                <option value={"Part-time"}>Part-time</option>
                <option value={"Self-empoyed"}>Self-empoyed</option>
                <option value={"Freelance"}>Freelance</option>
                <option value={"Contract"}>Contract</option>
                <option value={"Internship"}>Internship</option>
                <option value={"Apprenticeship"}>Apprenticeship</option>
                <option value={"Seasonal"}>Seasonal</option>
              </select>{" "}
              <p>Country-specific employment types</p>
            </div>
            <a href="/" className="formLink">Learn More</a>
          </div>
          <div className="mt-3">
            <label htmlFor="company">Company*</label>
            <input type="text" className="form-control" id="company" placeholder="Ex: Retail Sales Manager" aria-describedby="basic-addon3"
               required />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="area">Location*</label>
            <input type="text" className="form-control" id="area" placeholder="Ex:London,United Kingdom" aria-describedby="basic-addon3"
               required />
          </div>
        <span className="grey">I am currently working in this role</span>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows={4} defaultValue={""} />
        </div>
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

export default ProfileModal