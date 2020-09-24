import React from 'react';

const DetailsBtn = ({isShowing, toggleDetails})=> {
  const btnText = isShowing ? "Hide Details": "Show Details";
  return <button onClick={()=>{toggleDetails()}}>{btnText}</button>
}

export default DetailsBtn;
