import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Dollarizer from "../Tools/Dollarizer";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
  },
  img: {
    width: 150,
    margin: "10px 10px 0"
  },
  main: {
    backgroundColor: "#f5f5f5",
    border: "1px solid rgba(0, 0, 0, .125)",
    borderOpacity: "0.1",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    maxWidth: 300,
    transition: "all .15s ease-in-out",
    "&:hover": {
      boxShadow: "1px 1px 5px black"
    }
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    }
  },
});

export default function Card(props) {

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Container>
      <div key={props.id} className={classes.main}>
        <img className={classes.img} src={props.image}/>
        <h2 className={classes.title} >{props.name}</h2>
        <p className={classes.text} >{props.description}</p>
        <p className={classes.text} >Price {Dollarizer(props.price)}</p>
        <Button className={classes.btn} onClick={props.onClick}>
          <AddShoppingCartIcon />
          Add to cart
        </Button>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  )
}