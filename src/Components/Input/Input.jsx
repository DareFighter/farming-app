import React from "react";
import { TextField } from "@mui/material";

import Box from "@mui/material/Box";

const Input = ({ label, handleChange, sx, value, name }) => {
  return (
    <>
      <Box>
        <TextField
          label={label}
          onChange={handleChange}
          variant="outlined"
          sx={sx}
          value={value}
          name={name}
        />
      </Box>

      {/* <Input
        variant="outline"
        placeholder={label}
        size="md"
        onChange={handleChange}
        value={value}
        name={name}
      /> */}
    </>
  );
};

export default Input;
