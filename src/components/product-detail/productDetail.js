import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import ProductsAndServices from '../products-and-services/productsAndServices';


 const ProductDetail = () => {

const navigate = useNavigate()

  return (
    <Grid container justifyContent={'center'} >
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Markit
          </Typography>
          <Button color="inherit" onClick={() => {navigate('/login')}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <ProductsAndServices/>
    </Grid>
  );
}

export default ProductDetail