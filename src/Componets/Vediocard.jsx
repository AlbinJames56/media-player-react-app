import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import { addVideoHistoryAPI, deleteVideoAPI } from "../../services/allAPI";

function Vediocard({ video, setDeleteVideoResponse ,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { name, link } = video;
    const today = new Date();
    let timeStamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    let videoHistory = { name, link, timeStamp };
    await addVideoHistoryAPI(videoHistory);
  };
  const removeVideo=async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true) 
  }

  const DragStarted=(e,id)=>{
    console.log(id);
  e.dataTransfer.setData("VideoId", id);
  
  }
  return (
    <>
      <Card style={{ width: "15rem" }} draggable onDragStart={e=>DragStarted(e,video?.id)}>
        <Card.Img variant="top" width={"100%"} style={{aspectRatio:"1.7/1"}} src={video.url} onClick={handleShow} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            {video?.name}
          </Card.Title>
            {insideCategory?null:
          <Button variant="primary" onClick={()=> removeVideo(video?.id)}>
            <i className="fa-solid fa-trash text-white"></i>
          </Button>}
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} lg>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <iframe
            width="425"
            height="250"
            src={video.link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Vediocard;
