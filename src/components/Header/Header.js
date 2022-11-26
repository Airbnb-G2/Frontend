import React, { useState, useContext } from "react";
import { Box, Divider, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import SesionModal from "../SesionModal/SesionModal";
import rentitiLogo from "../../assets/rentitLogo.svg";
import { headerStyles } from "./HeaderStyles";
import { AuthContext } from "../../context/Auth";

const Header = () => {
  const styles = headerStyles();
  const theme = useTheme();
  const [anchorMenu, setAnchorMenu] = useState();
  const [openLogin, setOpenLogin] = useState(false);
  const openMenu = !!anchorMenu;
  const navigate = useNavigate();

  const { authState, userInfo, logout } = useContext(AuthContext);
  const { firstname, lastname, mail } = userInfo;

  const handleHeaderButton = ({ currentTarget }) => {
    if (authState.isLoggedIn) {
      setAnchorMenu(currentTarget);
    } else {
      setOpenLogin(true);
    }
  };

  const handleCloseMenu = () => {
    setAnchorMenu(undefined);
  };

  const handleLogOut = () => {
    logout();
    handleCloseMenu();
  };

  const onCloseLoginModal = () => {
    setOpenLogin(false);
  };

  const handleGoToProfile = () => {
    navigate(`/profile/${userInfo.id}`);
    handleCloseMenu();
  };

  return (
    <>
      <Box className={styles.headerContainer}>
        <button type="button" onClick={() => navigate("/")}>
          <img alt="logo" src={rentitiLogo} className={styles.logo} />
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
            {firstname} {lastname}
          </Typography>
          <Typography className={styles.userMail}>{mail}</Typography>
        </Box>
        <MenuItem onClick={handleGoToProfile}>Perfil</MenuItem>
        <Divider />
        <MenuItem type="text" onClick={handleLogOut}>
          Cerrar Sesión
        </MenuItem>
      </Menu>
      <SesionModal open={openLogin} onClose={onCloseLoginModal} />
    </>
  );
};

export default Header;
