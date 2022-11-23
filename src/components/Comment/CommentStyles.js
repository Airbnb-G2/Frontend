import { makeStyles } from '@mui/styles';

export const commentStyles = makeStyles(theme => ({
  commentContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    padding: 20,
    height: 'auto',
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
  },
  comment: {
    marginLeft: 57,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 3,
    '-webkit-box-orient': 'vertical',
  },
}));
