import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./Vediocard";
import { getAllUploadedVideoAPI } from "../../services/allAPI";
 

function View() {
  const [allVideos,setAllVideos]=useState([]);
  useEffect(()=>{
    getAllVideos()
  },[])

  const getAllVideos=async ()=>{
    const result=await getAllUploadedVideoAPI();
     
  if(result.status==200){
    console.log(result.data);
    setAllVideos(result.data) 
  }
  else{

    console.log("Api fetch failed")
    setAllVideos([])
  }
  }

 console.log(allVideos);
 
  

  return (
    <>
      <Row >
        {
          allVideos?.length>0?allVideos.map(video=>(
             <Col sm={12} md={4} lg={3} key={video}>
          <VideoCard video={video}/>
        </Col>
          )):<p>Noting to display</p>
       
        }
      </Row>
    </>
  );
}

export default View;
