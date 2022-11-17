import { makeStyles } from '@mui/styles';

export const searcherStyles = makeStyles((theme) => ({
  searcherContainer: {
    backgroundColor: theme.palette.primary.main,
    width: 740,
    height: 120,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    columnGap: 30,
    rowGap: 15,
    [theme.breakpoints.down('desktop')]: {
      padding: 15,
      width: 680,
    },
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
      padding: 15,
      width: 350,
      height: 'unset',
    },
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    columnGap: 20,
    flex: 2.5,
    alignItems: 'start',
    justifyContent: 'space-between',
    height: '100%',
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'row',
      width: '100%',
    },
  },
  buttonsContainer: {
    display: 'flex',
    columnGap: 10,
    alignSelf: 'center',
    width: '100%',
    [theme.breakpoints.down('tablet')]: {
      justifyContent: 'space-between',
      flexDirection: 'column',
      rowGap: 10,
    },
  },
  rightColumn: {
    display: 'flex',
    flex: 1,
  },
  inputsContainer: {
    display: 'flex',
    columnGap: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('tablet')]: {
      width: '100%',
      flexDirection: 'column',
      rowGap: 10,
    },
  },
  selector: {
    color: 'white',
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& .MuiSvgIcon-root': {
        color: 'white',
      },
    },
    [theme.breakpoints.down('tablet')]: {
      width: 150,
    },
  },

  textField: {
    color: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      '&:focus': {
        borderColor: 'white',
        outlineColor: 'white',
      },
    },
    '& .MuiTextField-root': {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& .MuiFormLabel-root': {
        color: 'white',
      },
      '&::placeholder': {
        color: 'blue',
      },
    },
  },
}));
