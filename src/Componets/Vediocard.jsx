import React from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useState } from 'react';

function Vediocard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
     < >
     <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/d/d1/Aavesham.jpg" onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>Aavesham</Card.Title>
        
        <Button variant="primary"><i className='fa-solid fa-trash text-danger' ></i>Enthino vendi</Button>
      </Card.Body>
    </Card>
     <Modal show={show} onHide={handleClose} lg>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <iframe width="425" height="250" src="https://www.youtube.com/embed/OsMqr3556F8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
      </Modal>
     </>
  )
}

export default Vediocard