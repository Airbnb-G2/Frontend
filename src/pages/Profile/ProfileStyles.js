import { makeStyles } from '@mui/styles';

export const profileStyles = makeStyles((theme) => ({
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 22,
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column'
    }
  },

  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    rowGap: 20
  },

  publicationsGrid: {
    justifyContent: 'center',
    marginTop: '0px'
  },
  noPublicationsText: {
    color: theme.palette.grey[400],
    fontWeight: 800,
    fontSize: 32,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 87,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 24
    }
  },
  circularProgress: {
    alignSelf: 'center',
    marginTop: 81
  },
  infoContainer: {
    display: 'flex',
    marginTop: 20
  },
  buttonEditProfile: {
    marginTop: 60,
    textAlign: 'center',
    borderRadius: 8
  },
  formContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    rowGap: 20,
    [theme.breakpoints.down('tablet')]: {
      width: '100%'
    }
  },
  formContainerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: 43,
    [theme.breakpoints.down('tablet')]: {
      padding: 22
    }
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 60
  }
}));
