import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

const AutoText = ({options, title, setPortData}) =>{
  // const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
    id="country-select-demo"
    sx={{ width: 250, marginTop:3 }}
    options={options}
    onInputChange={(event, newInputValue) => {
          setPortData(newInputValue);
        }}
    autoHighlight
    getOptionLabel={(option) => option.port || ""}
    renderOption={(props, option) => (
      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        <img
          loading="lazy"
          width="20"
          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          alt=""
        />
        <div className='flex flex-col gap-1'>
        <div className='flex justify-start items-center'>
        <p className='text-sm'>{option.port}</p>
        <p className='text-xs ml-1'>[{option.portCode}]</p>   
        </div>
        <p className='text-sm'>({option.country})</p>

        </div>
       
        
      </Box>
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        label={title}
        inputProps={{
          ...params.inputProps,
          // autoComplete: 'new-password', 
          // disable autocomplete and autofill
        }}
      />
    )}
  />
  );
}



export default AutoText