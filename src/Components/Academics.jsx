import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




export default function Academics(props) {



  return (
    <Card sx={{ }} className="academiccard">
    
      <CardMedia
        sx={{ height: 100 }}
        image={props.pic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.degree}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <b><i>Course Work : </i></b>{props.course}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.duration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <i>GPA : { props.gpa}</i>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
