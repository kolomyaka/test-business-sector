import { Container } from '@mui/material';
import React from 'react';
import { PaginationBlock } from './components/PaginationBlock';
import { SearchBlock } from './components/SearchBlock';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Container maxWidth="sm" sx={{ marginLeft: 0}}>
          <SearchBlock />
        </Container>
      <PaginationBlock />
      </Container>
    </div>
  );
}

export default App;
