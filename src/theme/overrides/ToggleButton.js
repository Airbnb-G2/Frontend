import { alpha } from '@mui/material/styles';

export default function ToggleButton(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '8px !important',
          height: 40,
          fontFamily: theme.typography.fontFamily,
          fontSize: 15,
          fontWeight: 400,
          maxWidth: 170,
          border: `2px solid ${theme.palette.common.white} !important`,
          color: theme.palette.common.white,
          [theme.breakpoints.down('tablet')]: {
            fontSize: 13,
            width: 150,
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            fontWeight: 'bold',
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.main,
          },
        },
      },
    },
  };
}
