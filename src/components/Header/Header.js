import React, { useState } from 'react';
import {
  Box,
  Divider,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import airbnbLogo from '../../assets/airbnbLogo.svg';
import './HeaderStyles.css';

const Header = () => {
  const theme = useTheme();
  const [anchorMenu, setAnchorMenu] = useState();
  const openMenu = !!anchorMenu;

  // Usuario mockeado---------
  const [userIsLogged, setUserIsLogged] = useState(true);
  const user = {
    firstName: 'John',
    lastName: 'Doue',
    mail: 'jdoe@gmail.com',
  };
  const { firstName, lastName, mail } = user;
  //--------------------------

  const handleHeaderButton = ({ currentTarget }) => {
    if (userIsLogged) {
      setAnchorMenu(currentTarget);
    } else {
      // Acá va la función que hace que se abra el modal del login
      // Seguramente tengamos que manejar por context el login
      setUserIsLogged(true);
    }
  };

  const handleCloseMenu = () => {
    setAnchorMenu();
  };

  const handleLogOut = () => {
    setUserIsLogged(false);
    handleCloseMenu();
  };

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.primary.main }} className="headerContainer">
        <img alt="logo" src={airbnbLogo} className="logo" />
        <button type="button" onClick={handleHeaderButton} className="menuButton">
          {userIsLogged
            ? <MenuIcon sx={{ fontSize: 40, fill: theme.palette.common.white }} />
            : <Typography color={theme.palette.common.white} variant="h4">Ingresar</Typography>}
        </button>
      </Box>

      <Menu open={openMenu} anchorEl={anchorMenu} onClose={handleCloseMenu}>
        <Box sx={{ padding: '8px 16px', width: 200 }}>
          <Typography className="userName">{firstName} {lastName}</Typography>
          <Typography className="userMail">{mail}</Typography>
        </Box>
        <Divider />
        <MenuItem type="text" onClick={handleLogOut}>Cerrar Sesión</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
