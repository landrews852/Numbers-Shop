import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addToCart, getAllCarts } from '../../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Container } from '@mui/material';
import Card from '../../Card/Card';
import { Toaster, toast } from 'react-hot-toast';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
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

export default function List() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const isLoading = useSelector(state => state.isLoading);

  const addToCartHandler = product => {
    dispatch(addToCart(product));
    toast.success('Added to cart successfully');
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllCarts());
  }, []);

  return (
    <Container>
      <h1>List</h1>
      <div className={classes.cards}>
        {!isLoading ? (
          products.map(product => (
            <Card
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              onClick={() => addToCartHandler(product)}
            />
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </Container>
  );
}
