import { makeStyles } from '@mui/styles';

export const reservationModalStyles = makeStyles((theme) => ({
  modalContainer: {
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    paddingTop: '10px !important',
  },
  datePicker: {
    width: '100%',
    height: 56,
    borderRadius: 4,
    fontSize: 16,
    padding: 10,
    border: `1px solid ${theme.palette.grey[300]}`,
    '&:focus': {
      outline: `2px solid ${theme.palette.primary.main}`,
    },
    '&:hover': {
      outline: `1px solid ${theme.palette.grey[800]}`,
    },
  },
}));
