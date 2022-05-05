import React from 'react';
import styled from 'styled-components';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchTextBlock = styled(TextField)`
  div {
    background-color: #5a5c66;
    border-radius: 0;
  }

  div:focus {
    border: none;
    outline: none;
  }

  fieldset {
    border: none;
  }

  input::placeholder {
    color: #b2b7bf;
  }

  input {
    color: #fff;
  }
`;

type Props = {};

export const SearchBlock = (props: Props) => {
  return (
    <>
      <SearchTextBlock
        placeholder="Поиск"
        fullWidth
        sx={{ marginTop: '23px', marginBottom: '15px' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: 'white' }} fontSize="large" />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
