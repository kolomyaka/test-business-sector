import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const PaginationItemText = styled.div`
  color: #474955;
  font-size: 1.35rem;
  font-weight: 600;
`;

type Props = {
  page: number;
  pageCount: number;
  changePage: (e: React.ChangeEvent<unknown>, value: number) => void
};


export const PaginationBlock = ({ page, pageCount, changePage }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`page=${page}`)
  }, [page, navigate])

  const prevButton = () => {
    return <PaginationItemText>Назад</PaginationItemText>;
  };
  const nextButton = () => {
    return <PaginationItemText>Далее</PaginationItemText>;
  };
  if (pageCount) {
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
              component={Link}
              to={`page=3`}
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
    )
  }
  return null;
};
