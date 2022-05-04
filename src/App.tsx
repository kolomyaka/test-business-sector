import { Container } from '@mui/material';
import React from 'react';
import { PaginationBlock } from './components/PaginationBlock';
import { SearchBlock } from './components/SearchBlock';
import { Table } from './components/Table';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        {/* избавиться от inline стиля */}
        <Container maxWidth="sm" style={{ margin: 0, padding: 0 }}>
          <SearchBlock />
        </Container>
        <Table />
        <PaginationBlock />
      </Container>
    </div>
  );
}

export default App;
