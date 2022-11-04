import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const sesionModalStyles = makeStyles(theme => ({
  modalContainer: {
    width: 600,
    padding: 46,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 68,
    [theme.breakpoints.down('tablet')]: {
      width: 340,
    },
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 22,
    alignItems: 'center',
  },
}));
