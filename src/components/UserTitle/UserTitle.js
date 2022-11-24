import React from 'react';
import { Typography } from '@mui/material';
import { userTitle } from './UserTitleStyles';
import ProfilePic from '../../assets/profilePic.svg';

const UserTitle = ({ user = {} }) => {
  const { id, firstname, lastname, profile_url } = user;
  const styles = userTitle();
  return (
    <a className={styles.userTitle} href={`/profile/${id}`}>
      <img
        className={styles.image}
        src={profile_url || ProfilePic}
        alt="profile_pic"
      />
      <Typography className={styles.name}>
        {firstname} {lastname}
      </Typography>
    </a>
  );
};
export default UserTitle;
