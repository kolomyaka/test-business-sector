import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaginationBlock } from './components/PaginationBlock';
import { SearchBlock } from './components/SearchBlock';
import { Table } from './components/Table';
import { selectLoadingStatus, selectPostsItem } from './store/selectors/postSelectors';
import { useAppDispatch } from './store/store';
import { fetchPostsThunk } from './store/thunks/fetchPosts';
import { postApi } from './services/PostApi';
const columnsItems = [
  { name: 'ID', type: 'id', width: 1.5 },
  { name: 'Заголовок', type: 'title', width: 5.25 },
  { name: 'Описание', type: 'body', width: 5.25 },
];

function App() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('id');
  const [order, setOrder] = useState('asc');
  const [search, setSearch] = useState('');
  const isLoading = useSelector(selectLoadingStatus);
  let posts = useSelector(selectPostsItem);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState([]);
  let allPosts = null;
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

  // Функция для поиска по значению
  const filteredPosts = posts.filter((post) => {
    return post.body.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchPostsThunk(page, sortBy, order));
  }, [page, sortBy, dispatch]);
  allPosts = postApi.fetchAllPosts();
  console.log(allPosts);

  return (
    <div className="App">
      <Container maxWidth="lg">
        {/* избавиться от inline стиля */}
        <Container maxWidth="sm" style={{ margin: 0, padding: 0 }}>
          <SearchBlock setSearch={setSearch} />
        </Container>
        <Table
          columns={columnsItems}
          posts={filteredPosts ? filteredPosts : posts}
          isLoading={isLoading}
          sortBy={sortBy}
          changeSort={handleChangeSortBy}
        />
        <PaginationBlock page={page} onChange={onChangePage} />
      </Container>
    </div>
  );
}

export default App;
