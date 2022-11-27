import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/material/index";
import { useNavigate, useParams } from "react-router-dom";
import { dbGet } from "../../utils/db";
import { AuthContext } from "../../context/Auth";
import { profileStyles } from "./ProfileStyles";
import ProfilePic from "../../assets/profilePic.svg";
import ReviewsList from "../../components/ReviewsList/ReviewsList";

const Profile = (props) => {
  const styles = profileStyles();
  const { userInfo } = useContext(AuthContext);
  const { userId } = useParams();
  const isOtherUser = userInfo.id !== parseInt(userId, 10);
  const [profileInfo, setProfileInfo] = useState(userInfo);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    dbGet(`user/${userId}`)
      .then((res) => {
        setProfileInfo(res);
      })
      .catch((err) => console.error(err));
  };

  const getReviews = async () => {
    const { items } = await dbGet("review", {
      otherUserId: userId,
    });
    setReviews(items);
  };

  const { profile_url, firstname, lastname, mail, phone, country } = profileInfo;

  useEffect(() => {
    if (isOtherUser) {
      getUserInfo();
      getReviews();
    }
  }, []);

  return (
    <div className={styles.pageContainer}>
      <img src={profile_url || ProfilePic} alt="profilePic" className={styles.profilePicture} />
      <Typography variant="h3">{`${firstname} ${lastname}`}</Typography>
      <Stack alignItems="left" spacing={2}>
        {mail && !isOtherUser && (
          <Typography color="grey.500" variant="h5">
            Email: {mail}
          </Typography>
        )}
        {phone && !isOtherUser && (
          <Typography color="grey.500" variant="h5">
            Télefono: {phone}
          </Typography>
        )}
        {country && !isOtherUser && (
          <Typography color="grey.500" variant="h5">
            País: {country}
          </Typography>
        )}
      </Stack>
      {isOtherUser && (
        <ReviewsList
          reviews={reviews}
          noReviewsMessage="No hay comentarios para este usuario todavía"
        />
      )}
      {!isOtherUser && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/edit-profile")}
          size="large"
        >
          Editar perfil
        </Button>
      )}
    </div>
  );
};

export default Profile;
