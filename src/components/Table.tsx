import { Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TableItemBlock } from './TableItemBlock';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Post } from '../store/types/Types';

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

const ArrowUpComponent = styled(ArrowUpIcon)`
  color: white;
  margin-left: 30px;
`;

const WarningContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top: 15%;
`;


type column = {
  name: string;
  type: string;
  width: number;
};

type Props = {
  sortBy: string;
  lastPostIndex: number;
  firstPostIndex: number;
  data: Post[];
  search: string;
  isLoading: boolean;
  changeSort: (type: string) => void;
};

export const Table = ({ sortBy, data, search, lastPostIndex, isLoading, firstPostIndex, changeSort }: Props) => {

  const columnsItems: column[] = [
    { name: 'ID', type: 'id', width: 1.5 },
    { name: 'Заголовок', type: 'title', width: 5.25 },
    { name: 'Описание', type: 'body', width: 5.25 },
  ];

  return (
    <>
      <HeaderGrid container>
        {columnsItems.map((column) => (
          <React.Fragment key={column.type}>
            <Grid key={column.type} item md={column.width} onClick={() => changeSort(column.type)}>
              <FlexWrapper>
                <Typography color="white" fontWeight={600}>{column.name}</Typography>
                {column.type === sortBy ? <ArrowUpComponent /> : <ArrowDownComponent />}
              </FlexWrapper>
            </Grid>
          </React.Fragment>
        ))}
      </HeaderGrid>


      {data.length !== 0 ? (
        data.slice(firstPostIndex, lastPostIndex).map((post) => {
          return (
            <TableItemBlock key={post.title} id={post.id} title={post.title} body={post.body} />
          );
        })
      ) : (
        <WarningContainer>
          <DangerousIcon sx={{ fontSize: 54, marginBottom: 5 }} />
          <Typography sx={{ fontSize: 28, textAlign: 'center', maxWidth: 700 }}>По запросу <b>{search}</b> не найдено ни одного результата</Typography>
        </WarningContainer>
      )}
    </>
  );
};
