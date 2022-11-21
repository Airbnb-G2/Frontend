import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material/index';
import { useParams } from 'react-router-dom';
import { dbGet } from '../../utils/db';
import { AuthContext } from '../../context/Auth';
import { profileStyles } from './ProfileStyles';

const Profile = (props) => {
  const styles = profileStyles();
  const { userInfo } = useContext(AuthContext);
  const [profileInfo, setProfileInfo] = useState({
    id: null,
    firstname: null,
    lastname: null,
    mail: null,
  });
  const params = useParams();

  useEffect(() => {
    if (userInfo.id === +params.userId) {
      setProfileInfo(userInfo);
    } else {
      dbGet(`user/${+params.userId}`)
        .then((res) => {
          setProfileInfo(res);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Stack alignItems="center" mt={5} spacing={1}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_172_36693)">
          <path d="M200 0H0V200H200V0Z" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M200 0H0V200H25.4287C26.4642 162.876 48.5105 131.775 78.5039 121.54C64.3227 113.884 54.6875 98.8871 54.6875 81.6406C54.6875 56.6152 74.9746 36.3281 100 36.3281C125.025 36.3281 145.312 56.6152 145.312 81.6406C145.312 98.8871 135.677 113.884 121.496 121.54C151.489 131.775 173.536 162.876 174.571 200H200V0Z"
            fill="#FF5A5F"
          />
        </g>
        <rect x="1" y="1" width="198" height="198" rx="99" stroke="#E23434" strokeWidth="2" />
        <defs>
          <clipPath id="clip0_172_36693">
            <rect width="200" height="200" rx="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {userInfo.id === +params.userId && (
        <Stack alignItems="center">
          <Typography variant="h5">{`${userInfo.firstname} ${userInfo.lastname}`}</Typography>
          <Typography color="grey.600">{userInfo.mail}</Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default Profile;