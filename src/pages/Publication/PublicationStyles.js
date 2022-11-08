import { makeStyles } from '@mui/styles';

export const publicationStyles = makeStyles((theme) => ({
  publicationContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 43,
    [theme.breakpoints.down('tablet')]: {
      padding: 22,
    },
  },
  columnsContainer: {
    display: 'flex',
    columnGap: 40,
    height: 'min-content',
    [theme.breakpoints.down('desktop')]: {
      flexDirection: 'column',
    },
  },
  leftColumn: {
    width: '50%',
    position: 'relative',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 22,
    flex: 1,
  },
  location: {
    display: 'flex',
    alignItems: 'center',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  pricePerNight: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: 36,
  },
  amenitiesContainer: {
    display: 'flex',
    columnGap: 5,
    flexWrap: 'wrap',
    rowGap: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 25,
    },
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  descriptionContainer: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 10,
    '-webkit-box-orient': 'vertical',
  },
  carouselContainer: {
    width: 700,
    [theme.breakpoints.down('desktop')]: {
      width: '70%',
      alignSelf: 'center',
    },
    [theme.breakpoints.down('tablet')]: {
      width: '90%',
    },
  },
  image: {
    objectFit: 'cover',
  },
  loader: {
    margin: '0 auto',
  },
}));
