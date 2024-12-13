import React from 'react'
import Image from './images/user.png'


export default function Firstcuaderno() {
  return (

    <div className='knowledge'>
        <div className='knowledge__container'> 
          <div>
        Una de las divisiones operativas de MMED se dedica
     a la docencia, investigación y desarrollo.Por medio de clases de regularización, 
             diversos cursos prácticos y brindando asesorías a quien mas las necesite, MMED ED pretende proporcionar 
     apoyo intelectual para los distintos niveles educativos.
           El conocimiento es una poderosa herramienta de oportunidad que debe encontrarse
al alcance de todos ya que todos tenemos derecho a entrar al maravilloso mundo del saber.
</div>
<div className='knowledge__picture'> <img src={Image} alt="" /> </div>

    </div>
       
    </div>
  )
}
