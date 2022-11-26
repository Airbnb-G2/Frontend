import { Typography } from "@mui/material";
import React from "react";
import Comment from "../Comment/Comment";
import { reviewsListStyles } from "./ReviewsListStyles";

const ReviewsList = ({ reviews, noReviewsMessage }) => {
  const styles = reviewsListStyles();
  return (
    <div className={`${styles.leftColumn} ${styles.reviewsContainer}`}>
      <Typography className={styles.descriptionTitle}>Comentarios</Typography>
      {reviews.map(({ description: reviewDescription, stars, userId: reviewerId }) => (
        <Comment key={reviewerId} userId={reviewerId} stars={stars} comment={reviewDescription} />
      ))}
      {!reviews.length && <Typography>{noReviewsMessage}</Typography>}
    </div>
  );
};

export default ReviewsList;
