import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const registerFormStyles = makeStyles(theme => ({
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 22,
  },
  submitButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    rowGap: 20,
  },
  doubleInputsContainer: {
    display: 'flex',
    columnGap: 10,
    rowGap: 22,
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
    },
  },
  registerPhraseContainer: {
    display: 'flex',
    columnGap: 10,
    alignItems: 'center',
  },
}));
