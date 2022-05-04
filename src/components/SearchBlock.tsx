import React from 'react'
import styled from '@mui/styled-engine-sc'
import { TextField } from '@mui/material'

const SearchTextBlock = styled(TextField)`

`

type Props = {}

const SearchBlock = (props: Props) => {
  return (
    <>
      <SearchTextBlock 
        placeholder='Поиск'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </>
  )
}