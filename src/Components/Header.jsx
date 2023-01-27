import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';


const Header = () => {
  return (
    <div className='navbar'>
      <div className='top-name'> 
        Gurkirat
      </div> 
        <div className='buttons'>
          <IconButton sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}   color="primary"href="mailto:gurkiratb47@gmail.com"    target="_blank" >
            <MailOutlineIcon/>
          </IconButton>

          <IconButton sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}color="primary" >
            <WhatsAppIcon/>
          </IconButton>

          <IconButton sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}color="primary" href="https://github.com/grkit"       target="_blank" >
            <GitHubIcon/>
           </IconButton>

        </div>  
    </div>
  )
}

export default Header
