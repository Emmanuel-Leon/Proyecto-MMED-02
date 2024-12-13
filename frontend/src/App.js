import Menu from './Menu.js'
import Footer from './Footer.jsx'
import Popup from './Popup.jsx'
import Firstcuaderno from './Firstcuaderno.jsx'

import './App.css';

function App (){
  
  return( 
  
  <div> 
    <div className='hero'>
      <Menu/>  
      <p className='titulo'>  WELCOME TO MMED 
      <p className='subtitle'>
      The science and tecnology <br/> 
      for all.</p>
      <Popup/>   </p> 
    </div>
    <Firstcuaderno/>
    <Footer/>
    
  </div>
  
) 
};

export default App;