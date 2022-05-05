import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styledEngine from '@mui/styled-engine';
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

const TableItemTypography = styledEngine(Typography)`
  font-size: 13px;
  color: #474955;
  font-weight: 600;
`;

const TableItem = styledEngine(Paper)`
  height: 90px;
`;

const items = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit autфывыфвфывфывфыв',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
  },
  {
    userId: 1,
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
  },
  {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
  },
  {
    userId: 1,
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
  },
];

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

      {items &&
        items.map((item) => {
          return <TableItemBlock id={item.id} title={item.title} body={item.body} />;
        })}
      {/* <Grid container alignItems="center" sx={{ border: '1px solid #E3E6EC' }}>
        <Grid item md={1.5}>
          <TableItem variant="outlined" square>
            <Typography sx={{ textAlign: 'center', padding: '31.5px' }}>15</Typography>
          </TableItem>
        </Grid>
        <Grid item md={5.25}>
          <TableItem variant="outlined" square sx={{ height: '90px' }}>
            <TableItemTypography style={{ padding: '30px' }}>
              consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere
            </TableItemTypography>
          </TableItem>
        </Grid>
        <Grid item md={5.25} zeroMinWidth>
          <TableItem variant="outlined" square sx={{ height: '90px' }}>
            <TableItemTypography sx={{ padding: '15px' }}>
              eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores
              qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est
              et voluptatem dignissimos dolor itaque sit nam
            </TableItemTypography>
          </TableItem>
        </Grid>
      </Grid> */}
    </>
  );
};
