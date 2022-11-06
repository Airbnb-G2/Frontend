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
import { useNavigate } from 'react-router-dom';
import airbnbLogo from '../../assets/airbnbLogo.svg';
import { headerStyles } from './HeaderStyles';
import SesionModal from '../SesionModal/SesionModal';

const Header = () => {
  const styles = headerStyles();
  const theme = useTheme();
  const [anchorMenu, setAnchorMenu] = useState();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const openMenu = !!anchorMenu;
  const navigate = useNavigate();

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
      setOpenLoginModal(true);
    }
  };

  const handleCloseMenu = () => {
    setAnchorMenu();
  };

  const handleLogOut = () => {
    setUserIsLogged(false);
    handleCloseMenu();
  };

  const onCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <>
      <Box className={styles.headerContainer}>
        <button type="button" onClick={() => navigate('/')}>
          <img alt="logo" src={airbnbLogo} className={styles.logo} />
        </button>
        <button type="button" onClick={handleHeaderButton} className={styles.menuButton}>
          {userIsLogged
            ? <MenuIcon className={styles.menuIcon} />
            : <Typography color={theme.palette.common.white} variant="h4">Ingresar</Typography>}
        </button>
      </Box>

      <Menu open={openMenu} anchorEl={anchorMenu} onClose={handleCloseMenu}>
        <Box className={styles.userInfoContainer}>
          <Typography className={styles.userName}>{firstName} {lastName}</Typography>
          <Typography className={styles.userMail}>{mail}</Typography>
        </Box>
        <Divider />
        <MenuItem type="text" onClick={handleLogOut}>Cerrar Sesión</MenuItem>
      </Menu>
      <SesionModal open={openLoginModal} onClose={onCloseLoginModal} />
    </>
  );
};

export default Header;
