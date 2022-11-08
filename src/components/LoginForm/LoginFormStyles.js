import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const loginFormStyles = makeStyles(theme => ({
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 41,
  },
  submitButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    rowGap: 20,
  },
  registerPhraseContainer: {
    display: 'flex',
    columnGap: 10,
    alignItems: 'center',
  },
}));
