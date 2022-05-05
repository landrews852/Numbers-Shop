import React from 'react';
import { useDispatch } from 'react-redux';
import { TableRow, TableCell, IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../Tools/myStyles.styles';
import Dollarizer from '../Tools/Dollarizer';
// import Toaster from '../Tools/Toaster';
import { Toaster, toast } from 'react-hot-toast';
import { removeFromCart } from '../../redux/actions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Delete from '@mui/icons-material/DeleteForeverRounded';
import { increment, decrement } from '../../redux/actions';
import useMediaQuery from '@mui/material/useMediaQuery';

const useLocaleStyles = makeStyles({
  img: {
    width: '50px',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  total: {
    fontWeight: 'bold',
    color: 'green',
  },
  cevrons: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cevron: {
    color: 'black',
    alignSelf: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  quantity: {
    fontWeight: 'bold',
  },
});

export default function CartItem(e) {
  const classes = useStyles();
  const localeClasses = useLocaleStyles();
  const dispatch = useDispatch();
  const product = e.product;

  const totalItem = product.price * product.quantity;

  const removeFromCartHandler = product => {
    dispatch(removeFromCart(product));
    toast.error('Removed from cart');
  };

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <TableRow key={product.id} hover={true}>
        <TableCell size="small" align="center" sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
          <img className={localeClasses.img} src={product.image} alt={product.name} />
        </TableCell>
        {!matches ? (
          <TableCell size="small" align="center">
            <span className={localeClasses.name}>{product.name}</span>
            <br />
            <span>${Dollarizer(product.price)}</span>
            <br />
            <br />
            <span>
              <b>Sum:</b>
            </span>
            <br />
            <span>${Dollarizer(totalItem)}</span>
          </TableCell>
        ) : (
          <>
            <TableCell size="small" align="center">
              <p className={localeClasses.name}>{product.name}</p>
              <p>${Dollarizer(product.price)}</p>
            </TableCell>
            <TableCell size="small" align="center">
              <p>
                <b>Sum:</b>
              </p>
              <p>${Dollarizer(totalItem)}</p>
            </TableCell>
          </>
        )}
        <TableCell size="small" align="center">
          <IconButton className={localeClasses.cevron} onClick={() => dispatch(increment(product))}>
            <KeyboardArrowUpIcon shapeRendering="rounded" />
          </IconButton>
          <p className={localeClasses.quantity}>{product.quantity}</p>
          {product.quantity > 1 ? (
            <IconButton
              className={localeClasses.cevron}
              onClick={() => dispatch(decrement(product))}>
              <KeyboardArrowDownIcon shapeRendering="rounded" />
            </IconButton>
          ) : (
            <IconButton disabled className={localeClasses.cevron}>
              <KeyboardArrowDownIcon shapeRendering="rounded" />
            </IconButton>
          )}
        </TableCell>
        <TableCell size="small" align="center">
          <IconButton
            variant="outlined"
            size="large"
            color="error"
            className={classes.btnX}
            onClick={() => removeFromCartHandler(product)}>
            <Delete size="large" />
          </IconButton>
        </TableCell>
        <Toaster position="bottom-center" reverseOrder={false} />
      </TableRow>
    </>
  );
}
