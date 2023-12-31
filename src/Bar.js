import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const Bar = (props) => {
  return (
    <div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <ProgressBar variant="green" max={100} now={props.completion} label={props.completion+"%"} style={{minWidth:'32%',height:'3vh',borderRadius:'10px', color:'yellow'}}/>
      </div>
    </div>
  )
}

export default Bar