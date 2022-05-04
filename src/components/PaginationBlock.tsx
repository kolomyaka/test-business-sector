import React from 'react'
import { Pagination, PaginationItem } from '@mui/material';
import styled from 'styled-components'

type Props = {}

const PaginationItemText = styled.div`
  color: #474955;
  font-size: 1.35rem;
  font-weight: 600;
`

const prevButton = () => {
  return (
    <PaginationItemText>Назад</PaginationItemText>
  )
}

const nextButton = () => {
  return (
    <PaginationItemText>Далее</PaginationItemText>
  )
}

export const PaginationBlock = (props: Props) => {
  return (
    <>
      <Pagination
        size='large'
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: prevButton, next: nextButton }}
            sx={{ fontSize: '1.2rem', color: '#474955', fontWeight: 600, '&:focuse': { display: 'none'} }}
            {...item}
          />
        )}
      />
    </>
  )
}