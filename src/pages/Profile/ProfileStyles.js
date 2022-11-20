import { makeStyles } from '@mui/styles';

export const profileStyles = makeStyles((theme) => ({
  profilePicture: {
    boxSizing: 'borderBox',
    position: 'absolute',
    width: '200px',
    height: '200px',
    /* [theme.breakpoints.down('tablet')]: {
      padding: 22,
    }, */
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 22,
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
    },
  },

  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    rowGap: 20,
  },

  publicationsGrid: {
    justifyContent: 'center',
    marginTop: '0px',
  },
  noPublicationsText: {
    color: theme.palette.grey[400],
    fontWeight: 800,
    fontSize: 32,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 87,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 24,
    },
  },
  circularProgress: {
    alignSelf: 'center',
    marginTop: 81,
  },
}));
