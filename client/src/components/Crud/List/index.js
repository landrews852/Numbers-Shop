import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addToCart } from '../../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '../../Card/Card';
import { Toaster, toast } from 'react-hot-toast';

const useStyles = makeStyles({
  root: {
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
  }
});

export default function List() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const isLoading = useSelector(state => state.isLoading);

  
  const addToCartHandler = product => {
    dispatch(addToCart(product));
    toast.success("Added to cart successfully")
  };
  
  useEffect(async () => {
    dispatch(await getProducts());
  }, []);
  console.log(products);
  
  return (
    <div className={classes.root}>
      <div>
        <h1>List</h1>
      </div>
      <div className={classes.cards}>
        {
          !isLoading?products.map(product => (
            <div>
              <Card
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                onClick={() => addToCartHandler(product)}
                />
            </div>
            )) 
            : <h3>Loading...</h3>
          }
      </div>
    </div>
  )
}