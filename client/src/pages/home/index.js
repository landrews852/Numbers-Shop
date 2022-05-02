import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import List from '../../components/Crud/List';

const useStyles = makeStyles({});

export default function Home() {
  return (
    <Container>
      {/* <Navbar /> */}
      <List />
    </Container>
    // <div>
    //   <h1>Home</h1>
    // </div>
  );
}