import * as React from 'react';
import{ useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import axios from 'axios';
import Button from '@mui/material/Button';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

 const TableAdminProviders = ({ editProvider }) => {

  const [data, setData] = useState([])
  const [edit, setEdit] = useState(false)

  const getData = () => {
    axios.get('http://localhost:3000/adminProviders')
      .then(resp => {
        setData(resp.data)
        setEdit(false)
      })
      .catch(error => {
        console.log('Hubo un error consultado los datos', error)
      })
   }

  const deleteItem = id => {
    axios.put(`http://localhost:3000/adminProviders/delete-provider/${id}`)
    .then((response) => {
           console.log(response)
           getData()
       }).catch(error => {
           console.log('error',error)
       })
   }

  useEffect(() => {
    getData()
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 810 }} >
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.idproviders}
           
            >
              <TableCell component="th" scope="row">
                {row.idproviders}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell>{row.usuario}</TableCell>
              <TableCell>{row.rol}</TableCell>
              <TableCell>
                <Grid container>
                  <Grid item pr={2}>
                    <Button variant="contained" color={'error'} onClick={() => deleteItem(row.idproviders)}><Delete/></Button>
                  
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color={'warning'} onClick={() => {editProvider({row, edit})}}><Edit/></Button>
                  
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableAdminProviders