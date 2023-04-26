import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Filter = ({ filter, handleChange }) => {
  return (
    <Box
      sx={{
        minWidth: 120,
        fontSize: '24px',
        marginBottom: '30px',
        marginTop: '30px',
        marginLeft: '24px',
        marginRight: '24px',
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="select-label">Show</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'follow'}>Follow</MenuItem>
          <MenuItem value={'following'}>Followings show all</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
