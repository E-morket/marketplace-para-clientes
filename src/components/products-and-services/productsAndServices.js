import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import imgTemplate1 from './assets/template1.jpg'
import imgTemplate2 from './assets/template2.jpg'
import imgTemplate3 from './assets/template3.png'
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';

const  ProductsAndServices = ()  => {
   const [data, setData,] = useState([
    
      
    ])

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;

  const addItem = () => {
    setState({ open: true, vertical: 'bottom', horizontal: 'right', });
      setTimeout(() => {
        setState({ open: false, vertical: 'bottom', horizontal: 'right', });
      }, 6000);
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const dataSelected = [{id:1,
    title: 'Manager'},
    {id:2, title: 'Technology'},
    {id:3,title: 'Business'},
    { id:4,title: 'Software'}
  ]
  const [personName, setPersonName] = React.useState([]);
  const [checkValidation, setCheckValidation] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
 
  
  const check =  (id,personName) => {
    dataSelected.map((item)=> {
     
     console.log("check".check)
    })

   
    if (id === 2) {
      setCheckValidation(true)
      setData([{
        id:3,title: 'Template Technology', description:'Esta es la descripcion del template 3', 
        category: 'Technology', price: '30$', img: imgTemplate3
      }])
    } else if(id === 1) {
      setCheckValidation(true)
      setData([{
        id:1,title: 'Template Manager', description:'Esta es la descripcion del template 1', 
        category: 'Manager', price: '10$', img: imgTemplate1
      }])
    } else if ( id === 3) {
      setCheckValidation(true)
      setData([{
        id:2,title: 'Template Bussines', description:'Esta es la descripcion del template 2', 
        category: 'Bussines', price: '20$', img: imgTemplate2 
      }])
    } else if(id===4){
      setCheckValidation(false)
      setData([
        {
          id:7,title: 'Template Software', description:'Esta es la descripcion del template 3', 
          category: 'Software', price: '30$', img: imgTemplate3
        },
        {
          id:4,title: 'Template Software', description:'Esta es la descripcion del template 3 22222', 
          category: 'Software', price: '30$', img: imgTemplate3
        }
       
      ])
    } else{
      setCheckValidation(true)
      setData([ {
        id:1,title: 'Template Technology', description:'Esta es la descripcion del template 1', 
        category: 'Technology', price: '10$', img: imgTemplate1
      },
      {
        id:2,title: 'Template Bussines', description:'Esta es la descripcion del template 2', 
        category: 'Bussines', price: '20$', img: imgTemplate2 
      },
      {
        id:3,title: 'Template Manager', description:'Esta es la descripcion del template 3', 
        category: 'Manager', price: '30$', img: imgTemplate3
      },
      {
        id:4,title: 'Template Software', description:'Esta es la descripcion del template 3', 
        category: 'Software', price: '30$', img: imgTemplate3
      },
      {
        id:5,title: 'Template Technology', description:'Esta es la descripcion del template 3', 
        category: 'Technology', price: '30$', img: imgTemplate3
      },
      
      {
        id:6,title: 'Template Software', description:'Esta es la descripcion del template 3', 
        category: 'Software', price: '30$', img: imgTemplate3
      },])
      
    }
   
  
  }
 

    return (
      <> 
      <Grid container spacing={2}>
        <Grid item md={4} mt={4}>
          <Paper sx={{ width: 320, maxWidth: '100%' }}>
              {
                dataSelected.map((data) => (
                  <MenuList key={data.id}>
                    <MenuItem >
                      <ListItemText>{data.title}</ListItemText>
                      <Checkbox id="clicks" value={checkValidation}
                      onChange={handleChange} onClick={() => {{check(data.id,personName)}}}{...label} /> 
                      {/* { <Checkbox value={checkValidation} onChange={handleChange}
                       onClick={() => {check(data.id,personName)}} {...label} /> } */}
              
                    </MenuItem>
                    
                  </MenuList>
                          
                ))
                
               }
              
          </Paper>
          <Grid item sx={{xs:6, mb:4, ml:8}}>
                          <Button 
                          variant="contained"
                         
                         color="success" onClick={() =>{ {check(data.id)}}}
                          size='large'>ver todos</Button>
                        </Grid>
        </Grid>
        
        <Grid item md={8} style={{  width: '900px', maxWidth: '100%'}}>
          {
            data.map( (item) => (
              <Card style={{  height: '300px',
              width: 'calc(33% - 25px)',
              margin: '8px 20px 0 0',
              float: 'left'}} key={item.id} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={item.alt}
                  height="140"
                  image={item.img}
                />
                <CardContent pb={0}> 
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => {addItem()}}>Agregar</Button>
                </CardActions>
              </Card>
              )
            )}
            <Snackbar
              autoHideDuration={6000}
              anchorOrigin={{ vertical, horizontal }}
              open={state.open }
              severity="success"
              key={vertical + horizontal}
             
            > 
              <Alert severity="success" sx={{ width: '100%' }}>
              Item agregado al carrito
              </Alert>
            </Snackbar>

            
        </Grid>
      </Grid>
      
      </>
    );
  }
  
  export default ProductsAndServices;
      
      
      
  