import React from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./Vediocard";

function View() {
  return (
    <>
      <Row >
        <Col sm={12} md={4} lg={3} >
          <VideoCard />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <VideoCard />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <VideoCard />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <VideoCard />
        </Col>
      </Row>
    </>
  );
}

export default View;
