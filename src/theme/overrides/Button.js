import { alpha } from '@mui/material/styles';

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        searchButton: {
          backgroundColor: theme.palette.common.white,
          boxShadow: 'none',
          color: theme.palette.primary.main,
          borderRadius: 8,
          height: 42,
          width: '100%',
          fontFamily: theme.typography.fontFamily,
          fontWeight: 700,
          fontSize: 15,
          textTransform: 'uppercase',
          '&:hover': {
            backgroundColor: theme.palette.grey[300],
          },
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
