import { useEffect } from "react";

function Timer({time, dispatch}) {
  
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  

  useEffect(function(){
    if(time === 0){
      dispatch({type: 'lastQuestion'})
      return;
    }
    const id = setInterval(()=>dispatch({type: 'counter'}), 1000)

    return function(){
      clearInterval(id)
    }
  },[dispatch, time])

  return (
    <button className={`btn btn-outline-dark w-25 ${mins < 1 ? 'bg-danger': ''}`}>
      {mins < 10 ? '0'+mins : mins} : {secs < 10 ? '0'+secs : secs}
    </button>
  )
}

export default Timer
