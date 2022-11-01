import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const publicationCardStyles = makeStyles(theme => ({
  cardPaper: {
    width: 320,
    height: 442,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5,
    justifyContent: 'start',
    alignItems: 'start',
    padding: 10,
  },
  description: {
    textAlign: 'left',
    fontSize: 14,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 3,
    '-webkit-box-orient': 'vertical',
  },
  image: {
    width: '100%',
    height: 206,
  },
  title: {
    fontSize: 20,
  },
}));
