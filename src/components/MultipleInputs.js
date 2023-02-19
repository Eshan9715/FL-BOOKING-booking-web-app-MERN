import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ports } from '../Data';
import { Box } from '@mui/system';
import anchor from '../assets/anchor.png'

export const MultipleInputs = () => {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={ports}
        getOptionLabel={(option) => option.port || ""}
        defaultValue={[]}
        filterSelectedOptions
        renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                loading="lazy"
                width="30"
                src={anchor}
                alt=""
                />
                <div className='w-full flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-start items-center'>
                            <p className='text-sm'>{option.port}</p>
                            <p className='text-xs ml-1'>[{option.portCode}]</p>  
                        </div>
                        <p className='text-sm'>{option.country}</p>
                    </div>

                    <img
                        loading="lazy"
                        width="25"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    /> 
                </div>
            
            
            
                
            </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Transhipments (Optional)"
            placeholder="Transhipments"
          />
        )}
        />
    </Stack>
  );
}