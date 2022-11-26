import React, { useEffect, useState } from "react";
import { Rating, Typography } from "@mui/material";
import { commentStyles } from "./CommentStyles";
import UserTitle from "../UserTitle/UserTitle";
import { dbGet } from "../../utils/db";

const Comment = ({ comment, stars, userId }) => {
  const [user, setUser] = useState({});

  const getUserInfo = () => {
    dbGet(`user/${userId}`)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => getUserInfo(), []);

  const styles = commentStyles();
  return (
    <div className={styles.commentContainer}>
      <div className={styles.titleContainer}>
        <UserTitle user={user} />
        <Rating value={stars} readOnly />
      </div>
      <Typography className={styles.comment}>{comment}</Typography>
    </div>
  );
};
export default Comment;
