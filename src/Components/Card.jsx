import * as React from 'react';
import "./Card.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
   <div className='card'></div>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth:300, minHeight:100}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}