import React from 'react'
/*import Text from 'react-text';*/
import logo from './piece.png';

export default function Login() {
  
  const Etrada=()=>{

  alert('Invalid user, tray again.')
    
  };
  
  return (

    <div className='login'>       
       <div className='logg'>        
    <img src={logo} className="App-logo" alt="logo" /> <br/>
BIENVENIDO

<br/><br/><br/>
        <input type="text" className='textbox'placeholder="User"/>
        <br/>   <input type="text" className='textbox1' placeholder="Keyword"/><br/>
      <button className='button' onClick={Etrada}>Log In</button>        
    </div> 
        </div>
  )
}
