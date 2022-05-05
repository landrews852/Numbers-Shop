import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../Tools/myStyles.styles';
import { Button } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
import Dollarizer from '../Tools/Dollarizer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useMediaQuery, Container } from '@mui/material';

const useLocaleStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  img: {
    width: 150,
    margin: '10px 10px 0',
  },
  text: {
    margin: 10,
  },
}));

export default function Card(props) {
  const card = { maxWidth: 320, justifyContent: 'space-between' };
  const classes = useStyles(card);
  const localeClasses = useLocaleStyles();

  return (
    <div key={props.id} className={classes.card}>
      <div>
        <img className={localeClasses.img} src={props.image} />
      </div>
      <h2 className={classes.title}>{props.name}</h2>
      <p className={localeClasses.text}>{props.description}</p>
      <br />
      <p className={classes.text}>Price ${Dollarizer(props.price)}</p>
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={props.onClick}
          startIcon={<AddShoppingCartIcon />}>
          Add to cart
        </Button>
      </div>
      <br />
      <br />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
