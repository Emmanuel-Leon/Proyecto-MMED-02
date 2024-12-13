import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Popup from './Popup.jsx';
import MenuItem from '@mui/material/MenuItem';
import './App.css';
import { ClassNames } from '@emotion/react';

import { alignProperty } from '@mui/material/styles/cssUtils.js';



export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='new02'> 
            {<button className='boton2' > Home </button>}
           
        <div className='order'>
        
            <Button class='button'
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        > 
            MENU
            </Button>
           
             <div className='y12'>   
            <Menu 
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <div className='lemenu'>
            <MenuItem class='item' onClick={handleClose}>About Us</MenuItem>
            <MenuItem class='item' onClick={handleClose}>Products</MenuItem>
            <MenuItem class='item' onClick={handleClose}>Servicies</MenuItem>
            </div> 
            </Menu>
            
              </div>
    </div>  
   
    </div>
  );
}
