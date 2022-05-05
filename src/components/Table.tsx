import { Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TableItemBlock } from './TableItemBlock';

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

const posts: any[] = [];
export const Table = (props: Props) => {
  return (
    <>
      <HeaderGrid container>
        <Grid item md={1.5}>
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

      {posts &&
        posts.map((post) => {
          return <TableItemBlock id={post.id} title={post.title} body={post.body} />;
        })}
    </>
  );
};
