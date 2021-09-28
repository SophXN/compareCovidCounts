import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from './countrydata';

function Country () {
  return (
    <div>
      <h1>Select Country</h1>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={countries}
      getOptionLabel={(option) => {
        if (option.hasOwnProperty('name')) {
          return option.name;
        }
        return option;
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
     />
    </div>
  )
}

export default Country;