import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/material/index';
import { useNavigate, useParams } from 'react-router-dom';
import { dbGet } from '../../utils/db';
import { AuthContext } from '../../context/Auth';
import { profileStyles } from './ProfileStyles';
import ProfilePic from '../../assets/profilePic.svg';

const Profile = (props) => {
  const styles = profileStyles();
  const { userInfo } = useContext(AuthContext);
  const [profileInfo, setProfileInfo] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    dbGet(`user/${+params.userId}`)
      .then((res) => {
        setProfileInfo(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Stack alignItems="center" mt={5} spacing={1}>
      <img
        src={profileInfo.profile_url || ProfilePic}
        alt="profilePic"
        className={styles.profilePicture}
      />
      <Stack alignItems="center" justifyContent="center">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={styles.infoContainer} variant="h4">
            {`${profileInfo.firstname} ${profileInfo.lastname}`}
          </Typography>
          {userInfo.id === +params.userId && (
            <>
              <Typography className={styles.infoContainer} color="grey.600">
                {profileInfo.mail}
              </Typography>
              <Typography className={styles.infoContainer} color="grey.600">
                Teléfono: {profileInfo.phone}
              </Typography>
            </>
          )}
          <Typography className={styles.infoContainer} color="grey.600">
            País: {profileInfo.country}
          </Typography>
          {userInfo.id === +params.userId && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/edit-profile')}
              size="large"
              className={styles.buttonEditProfile}
            >
              Editar perfil
            </Button>
          )}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Profile;
