import React from 'react';
import { Typography } from '@mui/material';
import { userTitle } from './UserTitleStyles';

const UserTitle = ({ user = {} }) => {
  const { id, firstname, lastname } = user;
  const styles = userTitle();
  return (
    <a className={styles.userTitle} href={`/profile/${id}`}>
      <img src={require('../../assets/profilePic.png')} alt="profile_pic" />
      <Typography className={styles.name}>{firstname} {lastname}</Typography>
    </a>
  );
};
export default UserTitle;
