import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, removeFromCart, clearCart } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Toaster from "../../components/Tools/Toaster";
import { Toaster, toast } from "react-hot-toast";
import CartItem from "../../components/CartItem.js";
import Dollarizer from "../../components/Tools/Dollarizer";

const useStyles = makeStyles({
  total: {
    fontWeight: "bold",
    color: "darkBlue",
  },
});

export default function Cart(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const total = useSelector(state => state.total);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const clearCartHandler = () => {
    dispatch(clearCart());
    toast('I hope you come back soon!', {
      icon: '😪',
      style:
      {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }}
    );
  };

  return (
    <Container>
      <div className={classes.title}>
        <h2>Your shopping cart</h2>
      </div>
      <Table>
        <TableBody>
          {cart.length?cart.map(product => (
            <CartItem 
              product={product}
            />
          )) : <p>Your cart is empty</p>}
        </TableBody>
      </Table>
      <div>
        <p>Total: <span className={classes.total}>{Dollarizer(total)}</span></p>
      </div>
      <br/>
      {cart.length ? (
      <Button variant='outlined' onClick={() => clearCartHandler()}>
        Clear cart
      </Button>
      ) : <Button variant='outlined' disabled >
        Clear cart
      </Button>}
      <br/>
      <br/>
      <Toaster position='bottom-center' reverseOrder={false} />
    </Container>
  );
}