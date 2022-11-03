import { makeStyles } from '@mui/styles';

export const imageUploaderStyles = makeStyles(theme => ({
  imageUploaderContainer: {
    width: '100%',
    padding: 20,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
  },
}));
