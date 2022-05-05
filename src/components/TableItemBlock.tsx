import { Grid, Paper, Typography } from '@mui/material';
import styledEngine from '@mui/styled-engine';
import React from 'react';

type Props = {
  id: number;
  title: string;
  body: string;
};

const TableItemTypography = styledEngine(Typography)`
  font-size: 13px;
  color: #474955;
  font-weight: 600;
`;

const TableItem = styledEngine(Paper)`
  height: 90px;
`;

export const TableItemBlock = ({ id, body, title }: Props) => {
  return (
    <>
      <Grid container alignItems="center" sx={{ border: '1px solid #E3E6EC' }}>
        <Grid item md={1.5}>
          <TableItem variant="outlined" square>
            <Typography sx={{ textAlign: 'center', padding: '31.5px' }}>{id}</Typography>
          </TableItem>
        </Grid>
        <Grid item md={5.25}>
          <TableItem variant="outlined" square sx={{ height: '70px' }}>
            <TableItemTypography sx={{ padding: '25px' }}>{title}</TableItemTypography>
          </TableItem>
        </Grid>
        <Grid item md={5.25} zeroMinWidth>
          <TableItem variant="outlined" square sx={{ height: '70px' }}>
            <TableItemTypography sx={{ padding: '15px' }}>{body}</TableItemTypography>
          </TableItem>
        </Grid>
      </Grid>
    </>
  );
};
