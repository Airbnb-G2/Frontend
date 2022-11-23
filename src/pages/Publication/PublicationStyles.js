import { makeStyles } from '@mui/styles';

export const publicationStyles = makeStyles((theme) => ({
  publicationContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 43,
    [theme.breakpoints.down('tablet')]: {
      padding: 22
    }
  },
  columnsContainer: {
    display: 'flex',
    columnGap: 40,
    height: 'min-content',
    [theme.breakpoints.down('desktop')]: {
      flexDirection: 'column'
    }
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: 700,
    [theme.breakpoints.down('desktop')]: {
      width: '100%',
      alignSelf: 'center'
    }
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    flex: 1
  },
  location: {
    display: 'flex',
    alignItems: 'center'
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  pricePerNight: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: 36
  },
  amenitiesContainer: {
    display: 'flex',
    columnGap: 5,
    flexWrap: 'wrap',
    rowGap: 5
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 25
    }
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 24
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 10,
    '-webkit-box-orient': 'vertical'
  },
  image: {
    objectFit: 'cover'
  },
  loader: {
    margin: '0 auto'
  },
  reviewsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    marginTop: 20
  }
}));
