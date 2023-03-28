import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import{ useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const  UserRegistry = ({sendDataUser})  => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [validateUser, setValidateUser] = useState(false)
  const [validateUserName, setValidateUserName] = useState(false)

   const onChangeUser = (event) => { setUser(event.target.value)} 
   const onChangePassword = (event) => { setPassword(event.target.value)} 

   const timeoutAlertUserName = () => { 
    setTimeout(() => {
      setValidateUserName(false);
    }, 5000);
   }

   const timeoutAlertUser = () => { 
    setTimeout(() => {
      setValidateUser(false)
    }, 5000);
   }

   const login = () => {
    if (user === '' || password === '') {
      setValidateUserName(true);
      timeoutAlertUserName()
    } else {
      axios.post('http://localhost:3000/login', {
        userName: user,
        password: password
      }).then((res) => {
        sendDataUser(res.data)
        navigate('/administracion')
      }).catch((error) => {
        setValidateUser(true)
        timeoutAlertUser()
      })
    }
   }

  const navigate = useNavigate()

  return (
    <>  
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} mt={8} justifyContent="center">
        <Grid item xs={4} sx={{ widht: 900 }} style={{backgroundColor: '#eff1f3'}}>
          {
            validateUser &&
              <Grid item xs={12} px={3}>
                <Alert  severity="error" >Usuario o contraseña invalido!</Alert>
              </Grid>

          } 
          {
            validateUserName &&
              <Grid item xs={12} px={3}>
                <Alert  severity="error" >Los campos usuario y contrasea no pueden estar vacios!</Alert>
              </Grid>
          }
          <Grid item xs={12} ml={10}>
            <Typography variant="h4" gutterBottom>
              Inicio de sesion
            </Typography>
          </Grid>
          <Grid item xs={12} ml={10}>
            <TextField id="user" label="Usuario" variant="outlined" onChange={onChangeUser}  />
          </Grid>
          <Grid item xs={12} ml={10} mt={4}>
            <TextField id="password" label="Contraseña" type="password" variant="outlined" onChange={onChangePassword}  />
          </Grid>
          <Grid container mb={4}>
            <Grid item xs={2} mx={9} mt={4}>
              <Button variant="contained" color={'primary'} onClick={() => {navigate('/')}}>Regresar</Button>
            </Grid>
            <Grid item xs={2} mt={4}>
              <Button variant="contained" color={'success'} onClick={login}>Ingresar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default UserRegistry;