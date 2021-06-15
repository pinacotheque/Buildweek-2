import { Modal, Form} from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./ExpEduForm.css";

import { useState } from 'react'

const ExpEduForm = (props) => {

  const [checked, setChecked] = useState(false)
  const [experience, setExperience] = useState(
    {
      role: props.edit != null ? props.edit.role : '',
      company: props.edit != null ? props.edit.company : '',
      area: props.edit != null ? props.edit.area : '',
      startDate: props.edit != null ? props.edit.startDate : '',
      endDate: props.edit != null ? props.edit.endDate : '',
      description: props.edit != null ? props.edit.description : '',
    }
  )

  const changeData = (id, value) => {
    const exp = {...experience, [id]: value}
    setExperience(exp)
  }

  const postExperience = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences`, {
      method: "POST",
      body: JSON.stringify(experience),
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })
    if(response.ok) {
      props.closeFunc()
    } else {
      console.log("error with posting experience")
    }
  }

  const putExperience = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences/${props.edit._id}`, {
      method: "PUT",
      body: JSON.stringify(experience),
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })
    if(response.ok) {
      props.reload()
      props.closeFunc()
    } else {
      console.log("error with posting experience")
    }
  }

  const doExperience = (e) => {
    props.edit ? putExperience(e) : postExperience(e)
  }

  return (
    <Modal show={props.show} onHide={props.closeFunc} size="lg" scrollable={true}>
      <Form onSubmit={(e) => doExperience(e)}>
        <Modal.Header>
          <Modal.Title>Add Experience</Modal.Title>
          <div className="ml-auto m-0 p-0" onClick={props.closeFunc} style={{ cursor: "pointer" }}>
            <CloseIcon />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="role">Title *</label>
            <input type="text" className="form-control" id="role" placeholder="Ex: Retail Sales Manager" aria-describedby="basic-addon3" 
              value={experience.role} onChange={(e) => changeData(e.target.id, e.target.value)} required />
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
              value={experience.company} onChange={(e) => changeData(e.target.id, e.target.value)} required />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="area">Location*</label>
            <input type="text" className="form-control" id="area" placeholder="Ex:London,United Kingdom" aria-describedby="basic-addon3"
              value={experience.area} onChange={(e) => changeData(e.target.id, e.target.value)} required />
          </div>
        {!checked && <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} onClick={() => setChecked(true)} />}
        {checked && <CheckBoxIcon onClick={() => setChecked(false)} style={{ color: "green", cursor: "pointer" }} />}
        <span className="grey">I am currently working in this role</span>
        <div className="mt-3 mb-3 d-flex" style={{ justifyContent: "space-evenly" }}>
          <div>
            <label htmlFor="startDate">Start Date *</label>
            <input min={"1963-01-01"} type="date" id="startDate" className="mx-3" required value={experience.startDate.slice(0,10)} onChange={(e) => changeData(e.target.id, e.target.value)} />
            {!experience.startDate && <p className="invalid mt-3">Please enter a start date.</p>}
          </div>
          <div className="ml-5">
            <label htmlFor="endDate">End Date *</label>
            {!checked && <input min={"1963-01-01"} type="date" id="endDate" className="mx-3" required value={experience.endDate.slice(0,10)} onChange={(e) => changeData(e.target.id, e.target.value)} />}
            {checked && <span className="mx-3"> Present</span>}
            {!experience.endDate && !checked && <p className="invalid mt-3">Please enter an end date.</p>}
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows={4} defaultValue={""} value={experience.description} onChange={(e) => changeData(e.target.id, e.target.value)} />
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

export default ExpEduForm