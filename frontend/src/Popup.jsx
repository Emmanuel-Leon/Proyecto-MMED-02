import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css';

export default () => (
  (
    <div>
        
        <Popup trigger=
            {<button className='boton3' > Log In </button>} 
            modal nested>
            {
                close => (
                         <div >       
                               <div className='logg'>        
                        BIENVENIDO
                        
                        <br/><br/><br/>
                                <input type="text" className='textbox'placeholder="User"/>
                                <br/>   <input type="text" className='textbox1' placeholder="Keyword"/><br/>
                              
                              <button onClick= {() => close()} className='button' >Log In</button>       
                            </div> 
                                </div>
                        
                        
                     
                )
            }
        </Popup>
    </div>
)

);