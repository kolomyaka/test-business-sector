import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import styled from 'styled-components';
import { Post } from '../store/types/Types';

type Props = {
  page: number;
  pageCount: number;
  setPage: (page: number) => void;
  changePage: (e: React.ChangeEvent<unknown>, value: number) => void
};

const PaginationItemText = styled.div`
  color: #474955;
  font-size: 1.35rem;
  font-weight: 600;
`;





export const PaginationBlock = ({ page, pageCount, setPage, changePage }: Props) => {

  const prevButton = () => {
    return <PaginationItemText>Назад</PaginationItemText>;
  };

  const nextButton = () => {
    return <PaginationItemText>Далее</PaginationItemText>;
  };


  return (
    <>



      <Pagination
        size="large"
        count={pageCount}
        page={page}
        onChange={changePage}
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
