import { Modal, Form} from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import styles from "./ExpEduForm.module.css";

import { useState } from 'react'
import { postExp, putExp, addExpImage, putExpImage } from "../../../Lib/fetch";

const ExpEduForm = (props) => {

  const [image, setImage] = useState(null)
  const [checked, setChecked] = useState(false)
  const [experience, setExperience] = useState(
    {
      role: props.edit != null ? props.edit.role : '',
      company: props.edit != null ? props.edit.company : '',
      area: props.edit != null ? props.edit.area : '',
      startDate: props.edit != null ? props.edit.startDate : '',
      endDate: props.edit != null ? props.edit.endDate : '',
      description: props.edit != null ? props.edit.description : '',
      image: props.edit != null ? props.edit.image : '',
    }
  )

  const changeData = (id, value) => {
    const exp = {...experience, [id]: value}
    setExperience(exp)
  }

  const postImage = async (expId) => {
    const formData = new FormData()
    formData.append('picture', image)

    const result = await fetch(
      "http://localhost:3001/api/experiences/" + localStorage.getItem("myId") + '/' + expId  + "/picture",
      {
        method: "POST",
        body: formData,
      }
    )    
    if(!result.error) {
      console.log('successful')
    } else {
      console.log('error with updating profile picture')
    }
  }

  // const result = await  fetch(
  //   'http://localhost:3001/api/experiences/' + localStorage.getItem('myId'),
  // {
  //   method: 'POST',
  //   body: JSON.stringify(experience)
  //   headers: {
  //     'Content-Type' : 'application/json'
  //   },

  // })

  
  // if (result.ok) {
  //   setExperience(experience)}

  const postExperience = async (e) => {
    e.preventDefault()
    const result = await  fetch(
      'http://localhost:3001/api/experiences/' + localStorage.getItem('myId'),
    {
      method: 'POST',
      body: JSON.stringify(experience),
      headers: {
        'Content-Type' : 'application/json'
      },
  
    })
  
    
    if (result.ok) {
      setExperience(experience)
      console.log('result', result.json());
      console.log('exp',experience);
      console.log('successfully posted experience')
    } else {
      console.log("error with posting experience")
    }
    if(image) {
      const jsonFil = await result.json()
      await postImage(result._id)
    }
    props.reload()
    props.closeFunc()
  }

  const putExperience = async (e) => {
    e.preventDefault()


    // const result = await fetch(
    //   'http://localhost:3001/api/profiles/' + localStorage.getItem('myId') +,
    // {
    //   headers: {
    //     'Content-Type' : 'application/json'
    //   },
    //   method: 'PUT',
    //   body: JSON.stringify(profData)

    // })



    const result = await fetch('http://localhost:3001/api/experiences/' + localStorage.getItem('myId') +'/'+ props.edit._id,
    {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(experience)

    })   
    if(!result.error) {
      props.reload()
      props.closeFunc()
    } else {
      console.log("error with putting experience")
    }
  }

  const doExperience = (e) => {
    props.edit !== null ? putExperience(e) : postExperience(e)
    props.resetEdit()
  }

  return (
    <Modal show={props.show} onHide={props.closeFunc} size="lg" scrollable={true}>
      <Form className="h-100 d-flex flex-column" onSubmit={(e) => doExperience(e)}>
        <Modal.Header>
          <Modal.Title>Add Experience</Modal.Title>
          <div className="ml-auto m-0 p-0" onClick={props.closeFunc} style={{ cursor: "pointer" }}>
            <CloseIcon />
          </div>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div>
            <label htmlFor="role">Title *</label>
            <input type="text" className="form-control" id="role" placeholder="Ex: Retail Sales Manager" aria-describedby="basic-addon3" 
              value={experience.role} onChange={(e) => changeData(e.target.id, e.target.value)} required />
          </div>
          <div className="mt-4">
            <label htmlFor="EmploymentType">Employment type</label>
            <div className="input-group mb-3">
              <select className={`w-100 ${styles.sel}`} id="EmploymentType" aria-label="Example select with button addon" style={{ height: "2rem" }}>
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
            <a href="/" className={styles.formLink}>Learn More</a>
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
        <span className={styles.grey}>I am currently working in this role</span>
        <div className="mt-3 mb-3 d-flex" style={{ justifyContent: "space-evenly" }}>
          <div>
            <label htmlFor="startDate">Start Date *</label>
            <input min={"1963-01-01"} type="date" id="startDate" className="mx-3" required value={experience.startDate.slice(0,10)} onChange={(e) => changeData(e.target.id, e.target.value)} />
            {!experience.startDate && <p className={`${styles.invalid} mt-1`}>Please enter a start date.</p>}
          </div>
          <div className="ml-5">
            <label htmlFor="endDate">End Date *</label>
            {!checked && <input min={"1963-01-01"} type="date" id="endDate" className="mx-3" required value={experience.endDate.slice(0,10)} onChange={(e) => changeData(e.target.id, e.target.value)} />}
            {checked && <span className="mx-3"> Present</span>}
            {!experience.endDate && !checked && <p className={`${styles.invalid} mt-1`}>Please enter an end date.</p>}
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows={4} defaultValue={""} value={experience.description} onChange={(e) => changeData(e.target.id, e.target.value)} />
        </div>
        <Form.Group className="mb-1" controlId="image">
          <Form.Label>Add image</Form.Label>
          {props.edit !== null ? <Form.Control type="text" value={experience.image} onChange={(e) => changeData(e.target.id, e.target.value)} /> : <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />}
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

export default ExpEduForm