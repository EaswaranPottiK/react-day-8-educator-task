import './App.css';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Bar from './Bar';

function App(){
  
  const [completion,setCompletion] = useState(0)

  useEffect(() => {
    setInterval(() => { // how to clear interval here?
      if (completion<=100){      
        setCompletion((value)=>value+1);
      }
    }, 200);
  }, []);

  function findPercent(){
    if (parseInt(completion)<100){
      return completion
    }
    else {
      return 100
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <p style={{textAlign:'center'}}>Progress Bar</p>
      <Bar completion={findPercent()}/>
      <p style={{textAlign:'center'}}>{parseInt(completion)>=100 ? "Complete!":"Loading..."}</p>
    </div>
  );
}

export default App;
