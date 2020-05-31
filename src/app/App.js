import React,{useState,useEffect} from 'react'
import { Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css'

function App() {

 const [timer, setTimer] = useState(0)
 const minutes = Math.floor(timer / 60)
 const seconds = timer % 60
 const minutesStr = minutes < 10 ? '0' + minutes : minutes
 const secondsStr = seconds < 10 ? '0' + seconds : seconds
 const [activeTimer, setActiveTimer] = useState(0)
 
  useEffect(()=>{
    let initialTimer = 0
    if(activeTimer) {
      initialTimer = setInterval(()=>{
      setTimer ((old) => old +1)
    },1000)}
    return () => {
      if(initialTimer) {
        clearInterval(initialTimer)
      }
    } 
  },[activeTimer])

  const controlBtnStartStop = () => {
    setActiveTimer(!activeTimer)
  }

  const btnState = activeTimer === true ? 'Pause' : 'Start'
  const resetTimer = () =>{
      setTimer(0)
      setActiveTimer(null)
  }
  return (

    <div className='App'>
      
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#272c34', height: '50vh' }}>
          <h1 className='title'>Simple <strong>Counter</strong></h1>
          <p className='timer'>{minutesStr}:{secondsStr}</p>
          <Button variant="outlined" color="primary" onClick={controlBtnStartStop}>{btnState}</Button> 
          <Button variant="outlined" color="primary" onClick={resetTimer}>Restart</Button>
        </Typography>
      </Container>
    </div>
  
  )
}

export default App;
