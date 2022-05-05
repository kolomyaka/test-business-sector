import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import styled from 'styled-components';
import { fetchPostsThunk } from '../store/thunks/fetchPosts';
import { fetchPosts } from '../store/slices/postSlice';
import { useAppDispatch } from '../store/store';

type Props = {};

const PaginationItemText = styled.div`
  color: #474955;
  font-size: 1.35rem;
  font-weight: 600;
`;

const prevButton = () => {
  return <PaginationItemText>Назад</PaginationItemText>;
};

const nextButton = () => {
  return <PaginationItemText>Далее</PaginationItemText>;
};

export const PaginationBlock = (props: Props) => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchPostsThunk(page));
  }, [page]);

  return (
    <>
      <Pagination
        size="large"
        count={10}
        page={page}
        onChange={handleChange}
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
