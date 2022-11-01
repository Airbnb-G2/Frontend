import { makeStyles } from '@mui/styles';

export const headerStyles = makeStyles(theme => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 37px',
    height: 91,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 0 25px 25px',
    [theme.breakpoints.down('tablet')]: {
      height: 70,
    },
  },
  logo: {
    width: 195,
    height: 61,
    [theme.breakpoints.down('tablet')]: {
      width: 137,
      height: 43,
    },
  },
  menuIcon: {
    fontSize: 40,
    fill: theme.palette.common.white,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 30,
    },
  },
  menuButton: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
  },
  userInfoContainer: {
    padding: '8px 16px',
    width: 200,
  },
  userName: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  userMail: {
    fontWeight: 400,
    fontSize: 14,
    letterSpacing: 0.17,
    color: 'rgba(0, 0, 0, 0.6)',
  },
}));
