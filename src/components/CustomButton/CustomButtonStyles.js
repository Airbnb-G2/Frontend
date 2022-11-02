import { makeStyles } from '@mui/styles';

export const customButtonStyles = makeStyles(theme => ({
  customButton: {
    color: theme.palette.common.white,
    height: 42,
    width: 260,
    fontFamily: theme.typography.fontFamily,
    fontsize: 20,
    padding: '8px 22px',
    borderRadius: 8,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
