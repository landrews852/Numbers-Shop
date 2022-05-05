import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    justifyContent: 'space-around',
  },
});

export default function MyCarts() {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div>
        <h1>My Carts</h1>
      </div>
      <div className={classes.cards}>{}</div>
    </div>
  );
}
