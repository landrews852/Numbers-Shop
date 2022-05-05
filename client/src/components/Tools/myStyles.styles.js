import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  main: main => ({
    margin: '0 auto 20px',
  }),
  name: name => ({
    margin: '20px 10px',
    wordWrap: 'break-word',
  }),
  btn: btn => ({
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid black',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'black',
    },
  }),
  cards: cards => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin: '20px auto',
    justifyContent: 'space-around',
  }),
  card: card => ({
    backgroundColor: '#f5f5f5',
    border: '1px solid rgb(211,211,211)',
    borderOpacity: 0.1,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    width: card.width,
    maxWidth: card.maxWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: card.justifyContent,
    transition: 'all .15s ease-in-out',
    '&:hover': {
      boxShadow: '1px 1px 5px gray',
    },
  }),
}));
