import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const imageUploaderStyles = makeStyles(theme => ({
  imageUploaderContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
    padding: 20,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 4,
    '& input[type="file"]': {
      display: 'none',
    },
  },
  button: {
    borderRadius: 4,
    border: `1px solid ${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'max-content',
    padding: '8px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.lighter, 0.2),
    },
  },
}));
