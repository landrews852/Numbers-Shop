import React from 'react';
import { useDispatch } from 'react-redux';
import { TableRow, TableCell, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dollarizer from '../Tools/Dollarizer';
// import Toaster from '../Tools/Toaster';
import { Toaster, toast } from "react-hot-toast";
import { removeFromCart } from '../../redux/actions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Delete from '@mui/icons-material/DeleteForeverRounded';
import { increment, decrement } from '../../redux/actions';

const useStyles = makeStyles({
  img: {
    width: "50px",
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  total: {
    fontWeight: "bold",
    color: "green",
  },
  cevrons: {
    textAlign: "center",
    width: 70,
  },
  cevron: {

    color: "black",
  },
  name: {
    fontWeight: "bold",
  },
  quantity: {
    fontWeight: "bold",
  },
});

export default function CartItem(e) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = e.product;

  const totalItem = product.price * product.quantity;

  const removeFromCartHandler = product => {
    dispatch(removeFromCart(product));
    toast.error("Removed from cart");
  };

  return (
    <>
      <TableRow className={classes.tableRow} key={product.id}>
        <TableCell>
          <img className={classes.img} src={product.image} alt={product.name} />
        </TableCell>
        <TableCell><p className={classes.name}>{product.name}</p><p>${Dollarizer(product.price)}</p></TableCell>
        <TableCell className={classes.cevrons}>
          <Button className={classes.cevron} onClick={() => dispatch(increment(product))} >
            <KeyboardArrowUpIcon shapeRendering='rounded' />
          </Button>
          <span className={classes.quantity}>{product.quantity}</span>
          {product.quantity > 1?
            <Button className={classes.cevron} onClick={() => dispatch(decrement(product))} >
              <KeyboardArrowDownIcon shapeRendering='rounded' />
            </Button>
          : <Button disabled className={classes.cevron} >
              <KeyboardArrowDownIcon shapeRendering='rounded' />
            </Button>}
        </TableCell>
        <TableCell>${Dollarizer(totalItem)}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => removeFromCartHandler(product)}
          >
            {/* Remove */}
            <Delete />
          </Button>
        </TableCell>
      </TableRow>
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  )
};