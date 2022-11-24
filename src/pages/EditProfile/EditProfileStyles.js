import { makeStyles } from '@mui/styles';

export const editProfileStyles = makeStyles((theme) => ({
  editProfileContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 43,
    [theme.breakpoints.down('tablet')]: {
      padding: 22
    }
  },
  title: {
    fontSize: 32,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 25
    }
  },
  formContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    rowGap: 10,
    [theme.breakpoints.down('tablet')]: {
      width: '100%'
    }
  },
  multipleInputs: {
    display: 'flex',
    rowGap: 10,
    columnGap: 10,
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column'
    }
  },
  halfWidth: {
    maxWidth: '50%',
    width: '50%',
    [theme.breakpoints.down('tablet')]: {
      maxWidth: 'none',
      width: 'none'
    }
  },
  buttonsContainer: {
    alignSelf: 'center',
    display: 'flex',
    columnGap: 20,
    width: '100%',
    marginTop: 20,
  }
}));
