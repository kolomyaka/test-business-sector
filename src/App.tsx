import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PaginationBlock } from './components/PaginationBlock';
import { SearchBlock } from './components/SearchBlock';
import { Table } from './components/Table';
import styled from 'styled-components';
import { useAppDispatch } from './store/store';
import { fetchPostsThunk } from './store/thunks/fetchPosts';

function App() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchPostsThunk(page));
  }, [page]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        {/* избавиться от inline стиля */}
        <Container maxWidth="sm" style={{ margin: 0, padding: 0 }}>
          <SearchBlock />
        </Container>
        <Table />
        <PaginationBlock page={page} onChange={onChange} />
      </Container>
    </div>
  );
}

export default App;
