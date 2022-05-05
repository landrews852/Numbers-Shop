import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveNewCart, clearCart } from '../../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import { Toaster, toast } from 'react-hot-toast';
import { FormControl, InputLabel, FormHelperText, Input, Button, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const useStyles = makeStyles({
  main: {
    margin: '0 auto 20px',
  },
  error: {
    width: 183,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    background: 'rgb(255,0,0,0.1)',
    opacity: 0.5,
    border: '1px solid red',
    borderRadius: '4px',
    padding: '5px',
  },
});

export default function SaveNewCart(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const actualCart = useSelector(state => state.cart);
  // const inputName = useRef(null);

  const [disabledButton, setDisabledButton] = useState(true);
  const [error, setError] = useState('');
  const [cart, setCart] = useState({
    name: '',
    content: [props.cart],
  });
  const theError = error;
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(saveNewCart(cart));
      dispatch(clearCart());
      toast.success(`${cart.name} was successfully saved!`);
      setCart({
        name: '',
        content: [],
      });
    } catch (err) {
      toast.error('That cart name already exists');
    }
  };

  const handleChange = e => {
    setCart({
      ...cart,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    const nameNoSpace = cart.name?.split(' ').join('');
    if (!actualCart.length) {
      setDisabledButton(true);
      setError('Your cart is empty. Please go home and add some products');
      return;
    }
    if (nameNoSpace.length < 3 || nameNoSpace.length > 20) {
      setDisabledButton(true);
      setError('Name must be between 3 and 20 characters');
      return;
    }
    setDisabledButton(false);
    setError('');
  }, [cart]);

  return (
    <div className={classes.main}>
      <div>
        <br />
        <h2>Save your shopping cart</h2>
      </div>
      <FormControl>
        <TextField
          onChange={handleChange}
          type="text"
          label="Name of the cart"
          value={cart.name}
          id="name"
          aria-describedby="my-helper-text"
          color={error.length ? 'error' : 'primary'}
          // inputRef={inputName}
        />
        <FormHelperText id="my-helper-text">Something nice to remember.</FormHelperText>

        {error && <p className={classes.error}>{theError}</p>}
        <Button
          startIcon={<SaveAltIcon />}
          disabled={disabledButton}
          onClick={handleSubmit}
          variant="outlined"
          color="primary">
          Save
        </Button>
      </FormControl>
    </div>
  );
}
