import { Grid, Typography, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TableItemBlock } from './TableItemBlock';
import { useSelector } from 'react-redux';
import { selectLoadingStatus, selectPostsItem } from '../store/selectors/postSelectors';
import { useAppDispatch } from '../store/store';
import { fetchPostsThunk } from '../store/thunks/fetchPosts';
type Props = {};

const HeaderGrid = styled(Grid)`
  background-color: #474955;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 20px;
`;

const ArrowDownComponent = styled(ArrowDownIcon)`
  color: white;
  margin-left: 30px;
`;

const CenterLoader = styled('div')`
  text-align: center;
  margin-top: 453px;
  margin-bottom: 453px;
`;

export const Table = (props: Props) => {
  const isLoading = useSelector(selectLoadingStatus);
  const posts = useSelector(selectPostsItem);
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState('desc');
  const handleSortById = () => {
    dispatch(fetchPostsThunk(1, 'id', order));
    if (order === 'desc') {
      setOrder('asc');
    } else {
      setOrder('desc');
    }
  };

  return (
    <>
      <HeaderGrid container>
        <Grid item md={1.5} onClick={handleSortById}>
          <FlexWrapper>
            <Typography color="white">ID</Typography>
            <ArrowDownComponent />
          </FlexWrapper>
        </Grid>
        <Grid item md={5.25}>
          <FlexWrapper>
            <Typography color="white">Заголовок</Typography>
            <ArrowDownComponent />
          </FlexWrapper>
        </Grid>
        <Grid item md={5.25}>
          <FlexWrapper>
            <Typography color="white">Описание</Typography>
            <ArrowDownComponent />
          </FlexWrapper>
        </Grid>
      </HeaderGrid>

      {isLoading === false ? (
        posts.map((post) => {
          return (
            <TableItemBlock key={post.title} id={post.id} title={post.title} body={post.body} />
          );
        })
      ) : (
        <CenterLoader>
          <CircularProgress color="inherit" />
        </CenterLoader>
      )}
    </>
  );
};
