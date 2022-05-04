import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
      <Grid container alignItems="center" sx={{ border: '1px solid #000' }}>
        <Grid item md={1.5} sx={{ borderRight: '1px solid #000' }}>
          <Paper elevation={0} square>
            <Typography sx={{ textAlign: 'center', padding: '27px' }}>15</Typography>
          </Paper>
        </Grid>
        <Grid item md={5.25} sx={{ borderRight: '1px solid #000' }}>
          <Paper elevation={0} square>
            <Typography sx={{ padding: '15px' }}>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
              molestiae ut
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={5.25}>
          <Typography sx={{ padding: '13px' }}>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
            molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
