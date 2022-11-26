import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import { reviewModalStyles } from "./ReviewModalStyles";
import { useForm } from "../../hooks/useForm";
import { dbPost, dbPut } from "../../utils/db";

const ReviewModal = ({
  title,
  open,
  publicationTitle,
  hostFullName,
  userId,
  rentalId,
  otherUserId,
  reservationId,
}) => {
  const [publicationReviewFinish, setPublicationReviewFinish] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const styles = reviewModalStyles();

  const { formState, handleInputChange } = useForm({
    userRating: "",
    publicationRating: "",
    userReview: "",
    publicationReview: "",
  });

  const handleCancel = () => {
    if (!publicationReviewFinish) {
      setPublicationReviewFinish(true);
    } else {
      setCloseModal(true);
    }
  };

  const handleSubmit = async () => {
    if (!publicationReviewFinish) {
      setPublicationReviewFinish(true);
    } else {
      await dbPost(`review`, {
        userId,
        rentalId: parseInt(rentalId, 10),
        stars: parseInt(formState.publicationRating, 10),
        description: formState.publicationReview,
      });

      await dbPost(`review`, {
        userId,
        otherUserId,
        stars: parseInt(formState.userRating, 10),
        description: formState.userReview,
      });

      await dbPut(`reservation/${reservationId}`, {
        leftReview: true,
      });
    }
  };

  return (
    <Dialog onClose={handleCancel} open={open && !closeModal}>
      <DialogTitle>
        {publicationReviewFinish
          ? `¿Cómo calificarias a ${hostFullName}?`
          : `¿Cómo fue tu estadia en ${publicationTitle}?`}
      </DialogTitle>
      <DialogContent className={styles.modalContainer}>
        <Stack alignItems="center" spacing={3}>
          <Rating
            name={publicationReviewFinish ? "userRating" : "publicationRating"}
            value={
              publicationReviewFinish
                ? parseInt(formState.userRating, 10)
                : parseInt(formState.publicationRating, 10)
            }
            size="large"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            name={publicationReviewFinish ? "userReview" : "publicationReview"}
            label="Reseña"
            variant="outlined"
            value={formState.review}
            multiline
            maxRows={3}
            onChange={handleInputChange}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button size="large" fullWidth variant="text" onClick={handleCancel}>
          Omitir
        </Button>
        <Button size="large" fullWidth variant="contained" onClick={handleSubmit}>
          {publicationReviewFinish ? "Enviar" : "Siguiente"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
