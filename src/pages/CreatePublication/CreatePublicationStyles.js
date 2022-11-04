import { makeStyles } from '@mui/styles';

export const createPublicationStyles = makeStyles(theme => ({
  createPublicationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 43,
    [theme.breakpoints.down('tablet')]: {
      padding: 22,
    },
  },
  title: {
    fontSize: 32,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 25,
    },
  },
  formContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    rowGap: 20,
    [theme.breakpoints.down('tablet')]: {
      width: '100%',
    },
  },
  multipleInputs: {
    display: 'flex',
    rowGap: 20,
    columnGap: 20,
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
    },
  },
  halfWidth: {
    maxWidth: '50%',
    width: '50%',
    [theme.breakpoints.down('tablet')]: {
      maxWidth: 'none',
      width: 'none',
    },
  },
  buttonsContainer: {
    alignSelf: 'center',
    display: 'flex',
    columnGap: 20,
  },
}));
