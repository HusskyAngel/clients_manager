import { TextField, InputAdornment } from "@mui/material";

export default function SearchCliente(){
  const onChange=()=>{
    //c
  }
  return (
    <div>
      <TextField fullWidth 
        type="search"
        variant="outlined"
        margin="normal"
        InputProps={{ startAdornment: (
          <InputAdornment position="start">
            Search
          </InputAdornment>
        ) }}
      />
    </div>
  );
}
