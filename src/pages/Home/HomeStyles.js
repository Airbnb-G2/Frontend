import { makeStyles } from '@mui/styles';

export const homeStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 43,
    [theme.breakpoints.down('tablet')]: {
      padding: 22,
    },
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 30,
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
    },
  },
  title: {
    fontSize: 32,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 25,
    },
  },
  publicationsGrid: {
    justifyContent: 'center',
    marginTop: '0px',
  },
}));
