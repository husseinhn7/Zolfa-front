import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';

const choices = ['Option 1', 'Option 2', 'Option 3'];

export default function RadioButtonsGroup() {
  const [selectedOption, setSelectedOption] = useState(choices[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <RadioGroup value={selectedOption} onChange={handleChange}>
      {choices.map((choice) => (
        <FormControlLabel
          key={choice}
          value={choice}
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: '#4caf50',
                },
                '& .MuiSvgIcon-root': {
                  display: 'none',
                },
                '&.Mui-checked .MuiSvgIcon-root': {
                  display: 'block',
                },
              }}
              icon={<FavoriteBorder />}
              checkedIcon={<DoneIcon />}
            />
          }
          label={choice}
          sx={{border : selectedOption === choice ? '1px solid ' : '0px',transition:"1" ,transitionDelay:".9"}}
        />
      ))}
    </RadioGroup>
  );
}