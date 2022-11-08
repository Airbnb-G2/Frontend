import React, { useState, useContext } from 'react';
import { Box, Divider, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import airbnbLogo from '../../assets/airbnbLogo.svg';
import { headerStyles } from './HeaderStyles';
import { AuthContext } from '../../context/Auth';
import LoginForm from '../LoginForm/LoginForm';

const Header = () => {
  const styles = headerStyles();
  const theme = useTheme();
  const [anchorMenu, setAnchorMenu] = useState();
  const [loginOpen, setLoginOpen] = useState(false);
  const openMenu = !!anchorMenu;
  const navigate = useNavigate();

  // Usuario mockeado---------
  const { authState, login, logout } = useContext(AuthContext);
  const user = {
    firstName: 'John',
    lastName: 'Doue',
    mail: 'jdoe@gmail.com',
  };
  const { firstName, lastName, mail } = user;
  //--------------------------

  const handleHeaderButton = ({ currentTarget }) => {
    if (authState.isLoggedIn) {
      setAnchorMenu(currentTarget);
    } else {
      setLoginOpen(true);
    }
  };

  const handleCloseMenu = () => {
    setAnchorMenu();
  };

  const handleLogOut = () => {
    logout();
    handleCloseMenu();
  };

  const onCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <>
      <LoginForm open={loginOpen} setOpen={setLoginOpen} />
      <Box className={styles.headerContainer}>
        <button type="button" onClick={() => navigate('/')}>
          <img alt="logo" src={airbnbLogo} className={styles.logo} />
        </button>
        <button type="button" onClick={handleHeaderButton} className={styles.menuButton}>
          {authState.isLoggedIn ? (
            <MenuIcon className={styles.menuIcon} />
          ) : (
            <Typography color={theme.palette.common.white} variant="h4">
              Ingresar
            </Typography>
          )}
        </button>
      </Box>

      <Menu open={openMenu} anchorEl={anchorMenu} onClose={handleCloseMenu}>
        <Box className={styles.userInfoContainer}>
          <Typography className={styles.userName}>
            {firstName} {lastName}
          </Typography>
          <Typography className={styles.userMail}>{mail}</Typography>
        </Box>
        <Divider />
        <MenuItem type="text" onClick={handleLogOut}>
          Cerrar Sesión
        </MenuItem>
      </Menu>
      <SesionModal open={openLoginModal} onClose={onCloseLoginModal} />
    </>
  );
};

export default Header;
