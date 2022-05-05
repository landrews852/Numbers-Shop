import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, clearCart, getAllCarts } from '../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Table, TableBody, Button } from '@mui/material';
// import Toaster from "../../components/Tools/Toaster";
import { Toaster, toast } from 'react-hot-toast';
import CartItem from '../../components/CartItem.js';
import Dollarizer from '../../components/Tools/Dollarizer';
import { Link } from 'react-router-dom';
import SaveNewCart from '../../components/Crud/Create/SaveNewCart';
import ReactCSSTransitionGroup from 'react-transition-group';
import { DeleteSweep } from '@mui/icons-material';

const useStyles = makeStyles({
  main: {
    margin: '0 auto 20px',
  },
  total: {
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  button: {
    margin: '0 10px',
  },
  form: {
    transition: 'width 2s, height 2s, transform 2s;',
  },
});

export default function Cart(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const total = useSelector(state => state.total);
  const saveOptions = useSelector(state => state.saveOptions);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllCarts());
  }, []);

  const clearCartHandler = () => {
    dispatch(clearCart());
    toast('I hope you come back soon!', {
      icon: '😪',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <Container className={classes.main}>
      <div className={classes.title}>
        <h2>Your shopping cart</h2>
      </div>
      <Table>
        <TableBody>
          {cart.length ? (
            cart.map(product => <CartItem product={product} />)
          ) : (
            <>
              <h2>is empty</h2>
            </>
          )}
        </TableBody>
      </Table>
      <div>
        <p>
          Total: <span className={classes.total}>${Dollarizer(total)}</span>
        </p>
      </div>
      <br />

      <Button
        className={classes.button}
        color="error"
        variant="outlined"
        disabled={!cart.length}
        onClick={() => clearCartHandler()}
        sx={{ margin: '5px 5px' }}
        startIcon={<DeleteSweep />}>
        Clear cart
      </Button>

      {!showForm ? (
        <Button
          color="primary"
          className={classes.button}
          variant="outlined"
          onClick={() => setShowForm(true)}
          sx={{ margin: '5px 5px' }}>
          Wanna save your cart?
        </Button>
      ) : (
        <Button
          color="primary"
          className={classes.button}
          variant="outlined"
          onClick={() => setShowForm(false)}
          sx={{ margin: '5px 5px' }}>
          Hide form
        </Button>
      )}
      {showForm && (
        <div className={classes.form}>
          <SaveNewCart cart={cart} />
        </div>
      )}
      <br />
      <Button
        sx={{ margin: '15px 0' }}
        color="primary"
        variant="contained"
        component={Link}
        to="/mycarts">
        My carts
      </Button>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}
