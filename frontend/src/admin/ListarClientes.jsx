import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import  SearchCliente  from "./auxcomponents/SearchCliente";
import  Lister from './auxcomponents/Lister';


export default function ListarClientes(){
    return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <div style={{ alignItems: "center" }}>
              <Typography variant="h5"style={{ alignItems: "center" }} >Listar clientes</Typography>
            </div>
            <SearchCliente/>
            <Lister/>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
    );
}
