import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

const AutoSalesP = ({options, title, setPortData}) =>{
  // const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
    id="country-select-demo"
    sx={{ width: '100%' }}
    options={options}
    onInputChange={(event, newInputValue) => {
          setPortData(newInputValue);
        }}
    autoHighlight
    getOptionLabel={(option) => [option.name] || ""}
    renderOption={(props, option) => (
      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <div className='w-full flex justify-between items-center mr-2'>               
                    <img
                        loading="lazy"
                        width="25"
                        src={option.img}
                        alt=""
                    /> 
                    <p className='text-sm'>{option.name}</p>
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



export default AutoSalesP