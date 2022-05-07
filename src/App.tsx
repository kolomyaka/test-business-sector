import { Container, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaginationBlock } from './components/PaginationBlock';
import { SearchBlock } from './components/SearchBlock';
import { Table } from './components/Table';
import { selectLoadingStatus, selectPostsItem } from './store/selectors/postSelectors';
import { useAppDispatch } from './store/store';
import { fetchPostsThunk } from './store/thunks/fetchPosts';
import styled from 'styled-components';

const CenterLoader = styled('div')`
  text-align: center;
  margin-top: 46%;
  margin-bottom: 46%;

`;
function App() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('id');
  const [order, setOrder] = useState('asc');
  const [search, setSearch] = useState('');
  const isLoading = useSelector(selectLoadingStatus);
  let posts = useSelector(selectPostsItem);
  let totalPosts = 0
  const pageSize = 10;
  const lastPostIndex = page * pageSize;
  const firstPostIndex = lastPostIndex - pageSize;

  // Функция для изменения актуальной страницы
  const changePage = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  // Функция для сортировки по выбранному столбцу
  const handleChangeSortBy = (type: string) => {
    if (type === 'id') {
      setOrder('desc');
    } else {
      setOrder('asc');
    }
    setSortBy(type);
  };

  const filteredPosts = posts.filter((post) => {
    return post.body.toLowerCase().includes(search.toLowerCase());
  });
  totalPosts = filteredPosts.length;


  let pageCount = Math.ceil(totalPosts / pageSize);

  useEffect(() => {
    dispatch(fetchPostsThunk(sortBy, order));
  }, [sortBy, dispatch]);


  return (
    <div className="App">
      <Container maxWidth="lg">
        <Container maxWidth="sm" style={{ margin: 0, padding: 0 }}>
          <SearchBlock setSearch={setSearch} />
        </Container>
        {isLoading
          ? <CenterLoader><CircularProgress color='inherit' /></CenterLoader>
          : <Table
            search={search}
            firstPostIndex={firstPostIndex}
            lastPostIndex={lastPostIndex}
            data={filteredPosts}
            isLoading={isLoading}
            sortBy={sortBy}
            changeSort={handleChangeSortBy}
          />}
        <PaginationBlock page={page} pageCount={pageCount} changePage={changePage} />
      </Container>
    </div>
  );
}

export default App;
