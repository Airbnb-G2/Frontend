import { makeStyles } from '@mui/styles';

export const userTitle = makeStyles(theme => ({
  userTitle: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
    textDecoration: 'none',
    color: theme.palette.grey[800],
  },
  name: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 300,
  },
}));
