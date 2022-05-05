import React, { Suspense } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import List from '../../components/Crud/List/Products';

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <List />
    </Container>
  );
}
