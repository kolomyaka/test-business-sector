import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PaginationBlock } from './components/PaginationBlock';
import { SearchBlock } from './components/SearchBlock';
import { Table } from './components/Table';
import { useAppDispatch } from './store/store';
import { fetchPostsThunk } from './store/thunks/fetchPosts';

const columnsItems = [
  { name: 'ID', type: 'id', width: 1.5 },
  { name: 'Заголовок', type: 'title', width: 5.25 },
  { name: 'Описание', type: 'body', width: 5.25 },
];

function App() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('id');
  const [order, setOrder] = useState('asc');
  const dispatch = useAppDispatch();

  // Функция для изменения актуальной страницы
  const onChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Функция для сортировки по выбранному столбцу
  const handleChangeSortBy = (type: string) => {
    if (type === 'id') {
      setOrder('desc');
    } else {
      setOrder('asc');
    }
    setSortBy(type);
  };

  useEffect(() => {
    dispatch(fetchPostsThunk(page, sortBy, order));
  }, [page, sortBy, dispatch]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        {/* избавиться от inline стиля */}
        <Container maxWidth="sm" style={{ margin: 0, padding: 0 }}>
          <SearchBlock />
        </Container>
        <Table columns={columnsItems} sortBy={sortBy} changeSort={handleChangeSortBy} />
        <PaginationBlock page={page} onChange={onChangePage} />
      </Container>
    </div>
  );
}

export default App;
