import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ServiceCard({service}) {
  return (
    <Card sx={{ maxWidth: 345, background: "transparent", boxShadow: "none"}}>
      <CardMedia
        component="img"
        alt={service.name}
        height="270"
        image={service.img}
      />
      
      <CardContent>
        <Typography sx={{ color: "yellow", fontFamily: "Playfair Display"}} gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography sx={{ color: "#fff", fontFamily: "Roboto"}}>
          {service.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <button size="small"><Link to={`services/${service.link}`}>Learn More</Link></button>
      </CardActions>
    </Card>
  );
}
