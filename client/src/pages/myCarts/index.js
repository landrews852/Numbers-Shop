import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../../components/Tools/myStyles.styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteCart, getAllCarts, loadCart } from '../../redux/actions';
import { Container, Button, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DeleteForever, ShoppingCartCheckout } from '@mui/icons-material';
import Dollarizer from '../../components/Tools/Dollarizer';
import { Toaster, toast } from 'react-hot-toast';

const useLocaleStyles = makeStyles({
  delete: {
    position: 'fixed',
    right: 15,
    bottom: 15,
    zIndex: '100',
  },
  date: {
    margin: '-20px 10px 0',
    backgroundColor: 'rgb(211,211,211)',
    borderRadius: 5,
    padding: '1px 16px',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 32,
    margin: '20px 0px 20px 12px',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '15px 5px',
  },
  imgQ: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function MyCarts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const carts = useSelector(state => state.myCarts);

  const card = { width: 300, justifyContent: 'space-between' };
  const btnX = {};

  const classes = useStyles(card, btnX);
  const localeClasses = useLocaleStyles();

  const handleOpen = () => (open ? setOpen(false) : setOpen(true));
  const handleClose = () => setOpen(false);

  const handleLoadCart = cart => {
    dispatch(clearCart());

    cart?.map(cart => {
      dispatch(loadCart(cart));
    });
    navigate('/cart');
  };

  const handleDelete = async cart => {
    dispatch(await deleteCart(cart.id));
    setOpen(false);
    dispatch(await getAllCarts());
    toast.success(`${cart.name} was successfully deleted from our database!`);
  };

  const formatter = e => new Date(e).toLocaleDateString('es-cl');

  useEffect(() => {
    dispatch(getAllCarts());
  }, []);

  return (
    <Container>
      <div>
        <h1>My Carts</h1>
      </div>
      <div className={classes.cards}>
        {carts.length ? (
          carts.map(cart => (
            <div className={classes.card}>
              <p className={localeClasses.date}>{formatter(cart.createdAt)}</p>

              <div>
                <h1 className={classes.name}>{cart.name}</h1>
              </div>
              <div className={localeClasses.imgContainer}>
                {cart.content?.flat().map(product => (
                  <div className={localeClasses.imgQ}>
                    <Tooltip title={product.name} placement="top" arrow>
                      <img
                        className={localeClasses.img}
                        name={product.name}
                        src={product.image}
                        alt={product.name}
                      />
                    </Tooltip>
                    <p>&nbsp;x{product.quantity}</p>
                  </div>
                ))}
              </div>
              <div>
                <p>
                  <b>
                    Total: $
                    {Dollarizer(
                      cart.content
                        ?.flat()
                        .map(product => {
                          let total = product.quantity * product.price;
                          return total;
                        })
                        .reduce((a, b) => a + b)
                    )}
                  </b>
                </p>
                {open ? (
                  <Container>
                    <hr />
                    <p>
                      You are about to delete this cart,
                      <br />
                      Are you sure?
                    </p>
                    <Button variant="outlined" color="error" onClick={() => handleDelete(cart)}>
                      Yes
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="outlined" color="primary" onClick={handleClose}>
                      no
                    </Button>
                    <br />
                    <br />
                  </Container>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ margin: '30px 0' }}
                    onClick={() => handleLoadCart(cart.content.flat())}
                    startIcon={<ShoppingCartCheckout />}>
                    Load this cart
                  </Button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>
              You don't have any carts saved in our database yet. Go home and select some of our
              products first.
            </p>
          </div>
        )}
      </div>
      <div className={localeClasses.delete}>
        <Button
          size="large"
          variant="contained"
          color="error"
          onClick={handleOpen}
          startIcon={<DeleteForever />}>
          DELETE MODE
        </Button>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}
