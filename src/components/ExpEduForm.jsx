import { Component } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseIcon from "@material-ui/icons/Close";
import ModalDialog from "react-bootstrap/ModalDialog";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "../ExpEdu.css";

class ExpForm extends Component {
  state = {
    checked: false,
    experience: {
      role: "",
      company: "",
      area: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  };

  render() {
    return (
      <>
      <Modal
          show={this.props.show}
          onHide={this.props.closeFunc}
          size="lg"
          scrollable={true}
          style={{ height: "100vh" }}
        ></Modal>
            
            <Modal.Header>
            <Modal.Title>Add Experience</Modal.Title>
            <div
              className="ml-auto m-0 p-0"
              onClick={this.props.closeFunc}
              style={{ cursor: "pointer" }}
            >
              <CloseIcon />
            </div>
          </Modal.Header>

          <Modal.Body>
            <div>
              <label htmlFor="basic-title">Title *</label>
              <input
                type="text"
                className="form-control"
                id="basic-title"
                placeholder="Ex: Retail Sales Manager"
                aria-describedby="basic-addon3"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="EmploymentType">Employment type</label>
              <div className="input-group mb-3">
                <select
                  className=" w-100 sel"
                  id="EmploymentType"
                  aria-label="Example select with button addon"
                  style={{ height: "2rem" }}
                >
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
              <a className="formLink">Learn More</a>
            </div>
            <div className="mt-3">
              <label htmlFor="Company">Company*</label>
              <input
                type="text"
                className="form-control"
                id="Company"
                placeholder="Ex: Retail Sales Manager"
                aria-describedby="basic-addon3"
              />
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="Company">Location</label>
              <input
                type="text"
                className="form-control"
                id="Company"
                placeholder="Ex:London,United Kingdom"
                aria-describedby="basic-addon3"
              />
            </div>

            {!this.state.checked && (
              <CheckBoxOutlineBlankIcon
                style={{ cursor: "pointer" }}
                onClick={() => this.setState({ checked: true })}
              />
            )}
            {this.state.checked && (
              <CheckBoxIcon
                onClick={() => this.setState({ checked: false })}
                style={{ color: "green", cursor: "pointer" }}
              />
            )}
            <span className="grey">I am currently working in this role</span>
            <div
              className="mt-3 mb-3 d-flex"
              style={{ justifyContent: "space-evenly" }}
            >
              {/* <p>Start Date *</p>
              <select
                className="sel"
                style={{ width: "10rem", height: "2rem", overflow: "auto" }}
                id="month"
              >
                <option selected>Month</option>
                <option value={"01"}>Jenuary</option>
                <option value={"02"}>February</option>
                <option value={"03"}>March</option>
                <option value={"04"}>April</option>
                <option value={"05"}>May</option>
                <option value={"06"}>June</option>
                <option value={"07"}>Jully</option>
                <option value={"08"}>August</option>
                <option value={"09"}>September</option>
                <option value={"10"}>October</option>
                <option value={"11"}>November</option>
                <option value={"12"}>December</option>
              </select> */}
              <div>
                <label htmlFor="startDate">Start Date *</label>
                <input
                  min={"1963-01-01"}
                  type="date"
                  id="startDate"
                  className="mx-3"
                  required
                />
                {!this.state.experience.startDate && (
                  <p className="invalid mt-3">Please enter a start date.</p>
                )}
              </div>
              <div className="ml-5">
                <label htmlFor="startDate">End Date *</label>
                {!this.state.checked && (
                  <input
                    min={"1963-01-01"}
                    type="date"
                    id="startDate"
                    className="mx-3"
                    required
                  />
                )}
                {this.state.checked && <span className="mx-3"> Present</span>}
                {!this.state.experience.endDate && !this.state.checked && (
                  <p className="invalid mt-3">Please enter an end date.</p>
                )}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={4}
                defaultValue={""}
              />
              <p className="mt-3" style={{ fontSize: "0.8rem" }}>
                Media{" "}
              </p>
              <p style={{ fontSize: "0.8rem" }}>
                Add or link to external documents, photos, sites, videos and
                presentations.{" "}
              </p>
            </div>
            <div className="d-flex " style={{ justifyContent: "space-around" }}>
              <button className="btnB">Upload</button>
              <button className="btnW">Link</button>
            </div>
            <HelpOutlineIcon
              style={{
                color: "blue",
                backgroundColor: "white",
              }}
            />
            <span
              style={{ color: "blue", fontSize: "0.8rem", cursor: "pointer" }}
            >
              Supported formats
            </span>
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
              ClassName="ml-auto"
              onClick={this.props.closeFunc}
            >
              Save
            </button>
          </Modal.Footer>
        </Modal>
