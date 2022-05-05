import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar, useScrollTrigger, IconButton, Badge } from '@mui/material';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Home from '@mui/icons-material/Home';
import {
  ShoppingCart,
  ListAltRounded,
  LooksOneOutlined,
  LooksTwoOutlined,
  Looks3,
} from '@mui/icons-material';
import styled from '@mui/material/styles/styled';
import { getAllCarts } from '../../redux/actions';

const useStyles = makeStyles({
  Toolbar: {
    justifyContent: 'space-between',
  },
});

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const amount = useSelector(state => state.amount);
  const myCarts = useSelector(state => state.myCarts);

  useEffect(() => {
    dispatch(getAllCarts());
  }, []);

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.Toolbar}>
            <IconButton component={Link} to="/" edge="end">
              <Home />
            </IconButton>
            <Box>
              <LooksOneOutlined />
              <LooksTwoOutlined />
              <Looks3 />
            </Box>
            <Icons>
              {myCarts.length ? (
                <IconButton
                  component={Link}
                  to="/mycarts"
                  edge="start"
                  children={
                    <Badge badgeContent={myCarts.length} color="error">
                      <ListAltRounded />
                    </Badge>
                  }
                />
              ) : null}
              <IconButton
                edge="start"
                component={Link}
                to="/cart"
                children={
                  <Badge badgeContent={amount} color="error">
                    <ShoppingCart />
                  </Badge>
                }
              />
            </Icons>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
