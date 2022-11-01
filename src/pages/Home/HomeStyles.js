import { makeStyles } from '@mui/styles';

export const homeStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 43,
  },
  title: {
    fontSize: 32,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 24,
    },
  },
  publicationsGrid: {
    justifyContent: 'center',
    marginTop: '0px',
  },
}));
