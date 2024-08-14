import React from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useState } from "react";

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex mb-5 mt-5 align-items-center">
        <Button onClick={handleShow} className="btn m-1">
          <i className="fa-solid fa-arrow-up-from-bracket fa-beat fa-1x">
            {" "}
            Upload Videos{" "}
          </i>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Video ID" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingName"
            label="Video Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Video Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingImage"
            label="image Url"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Image Url" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingName"
            label="Video Url"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Video Url" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
