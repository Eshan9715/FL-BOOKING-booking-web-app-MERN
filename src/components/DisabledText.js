import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const DisabledText = ({defaultVal,label}) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          disabled
          id="outlined-disabled"
          label={label}
          defaultValue={defaultVal}/>
      </div>
    </Box>
  );
}