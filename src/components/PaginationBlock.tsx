import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import styled from 'styled-components';
import { Post } from '../store/types/Types';

type Props = {
  page: number;

  setPage: (page: number) => void;
  setPreviousPage: () => void;
  setNextPage: () => void;
};

const PaginationItemText = styled.div`
  color: #474955;
  font-size: 1.35rem;
  font-weight: 600;
`;





export const PaginationBlock = ({ page, setPage, setPreviousPage, setNextPage }: Props) => {

  const prevButton = () => {
    return <PaginationItemText onClick={setPreviousPage}>Назад</PaginationItemText>;
  };

  const nextButton = () => {
    return <PaginationItemText onClick={setNextPage}>Далее</PaginationItemText>;
  };
  console.log(page);


  return (
    <>



      <Pagination
        size="large"
        count={10}
        page={page}
        onChange={(e) => console.log(e.target)}
        sx={{ width: '560px', margin: '15px auto' }}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: prevButton, next: nextButton }}
            sx={{
              fontSize: '1.2rem',
              color: '#474955',
              fontWeight: 600,
              '&:focuse': { display: 'none' },
            }}
            {...item}
          />
        )}
      />
    </>
  );
};
