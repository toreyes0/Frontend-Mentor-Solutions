import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// eslint-disable-next-line react/prop-types
export default function Filter({ onChoose }) {
  const [type, setType] = useState('All')

  const handleChange = (event) => {
    setType(event.target.value)
  };

  return (
    <Stack alignItems={'flex-end'} sx={{ mb: 8 }}>
      <Box>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Type</InputLabel>
          <Select value={type} label='Type' onChange={handleChange}>
            <MenuItem value='All' onClick={onChoose}>All</MenuItem>
            <MenuItem value='Component' onClick={onChoose}>Component</MenuItem>
            <MenuItem value='Landing Page' onClick={onChoose}>Landing Page</MenuItem>
            <MenuItem value='JavaScript' onClick={onChoose}>JavaScript</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  )
}