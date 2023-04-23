import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export const Filter = () => {
  const [age, setAge] = useState('');

  const handleChange = event => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Show</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={20}>All</MenuItem>
          <MenuItem value={20}>Follow</MenuItem>
          <MenuItem value={30}>Followings show all</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
