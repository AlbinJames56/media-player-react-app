import React, { useEffect, useState } from 'react' 
import {Link} from 'react-router-dom'
import { getHistoryAPI } from '../../services/allAPI'

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
   console.log(history)
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
          <tr>
            <td>1</td>
            <td>Avesham </td>
            <td>https://www.youtube.com/embed/OsMqr3556F8?autoplay=1</td>
            <td>13-08-2024, 02:29 pm</td>
            <td><button variant="primary"><i className='fa-solid fa-trash text-danger ' ></i></button></td>
          </tr>
        </tbody>
      </table>
   
    </>
  )
}

export default WatchHistory