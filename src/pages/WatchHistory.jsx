import React, { useEffect, useState } from 'react' 
import {Link} from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../services/allAPI'

function WatchHistory() {
  const [history,setHistory]=useState([])
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory=async ()=>{
    const result=await getHistoryAPI()
    if(result.status=200){
      setHistory(result.data)
    }else{
      console.log("Api Failed",result.message);
      
      
    }
   
  }
  const removeVideoHistory=async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  return (
    <>
    <div className="container mt-5 mb-3 d-flex justify-content-between">
      <h2>Watch History</h2>
      <Link style={{textDecoration:"none", color:"white" }} to={'/Home'}>Back to Home <i className='fa-solid fa-arrow-rotate-left fa-beat-fade'></i></Link>
       </div>
       <table className='table mb-5 container shadow w-100 text-white'>
      <thead><tr> 
        <th> #</th>
        <th>Title</th>
        <th>Url</th>
        <th>TimeStamp</th>
        <th>Action</th>
      </tr>
        </thead>
        <tbody>
          {history?.length>0?history?.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.name} </td>
            <td><a target='_blank' href={video.link}>{video.link}</a></td>
            <td>{video.timeStamp}</td>
            <td><button variant="primary" onClick={()=> removeVideoHistory(video?.id)}><i className='fa-solid fa-trash text-danger ' ></i></button></td>
          </tr>
          )):
          <p>Noting to Display</p>
        }
          
        </tbody>
      </table>
   
    </>
  )
}

export default WatchHistory