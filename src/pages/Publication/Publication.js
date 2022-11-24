import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Button, Chip, CircularProgress, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { dbGet } from '../../utils/db';
import { publicationStyles } from './PublicationStyles';
import ReservationModal from '../../components/ReservationModal/ReservationModal';
import { AuthContext } from '../../context/Auth';
import SesionModal from '../../components/SesionModal/SesionModal';
import { getDatesInRange } from '../../utils/utils';
import Comment from '../../components/Comment/Comment';
import UserTitle from '../../components/UserTitle/UserTitle';
import { REVIEW_TYPE } from '../../constants';

const Publication = () => {
  const styles = publicationStyles();
  const [loading, setLoading] = useState(false);
  const { publicationId } = useParams();
  const [publication, setPublication] = useState({});
  const [handleOpenModal, setOpenReservationModal] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const [disabledDates, setDisabledDates] = useState();
  const [hostUser, setHostUser] = useState({});
  const [reviews, setReviews] = useState([]);
  const { id: userId } = userInfo;

  const {
    id,
    title,
    images,
    pricePerNight,
    address,
    city,
    province,
    country,
    amenities,
    description,
    hostId,
    reservations,
  } = publication || {};

  const getPublicationData = async () => {
    setLoading(true);

    try {
      const rental = await dbGet(`rental/${publicationId}`);
      const rentalInfo = rental.rental;
      setPublication(rental.rental);
      const hostInfo = await dbGet(`user/${rentalInfo.hostId}`);
      setHostUser(hostInfo);
      setLoading(false);
      // TODO: when review endpoint works, move setloading to bottom
      const reviewsInfo = await dbGet(`review/${rentalInfo.id}`, {
        type: REVIEW_TYPE.RENTAL,
      });
      setReviews(reviewsInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const getDisabledDates = () => {
    let dates = [];

    if (!reservations?.length) return;

    reservations.forEach(({ fromDate, toDate }) => {
      dates = dates.concat(getDatesInRange(fromDate, toDate));
    });
    setDisabledDates([...new Set(dates.flat())]);
  };

  const handleReservation = () => {
    setOpenReservationModal(true);
  };

  const handleCloseModal = () => {
    setOpenReservationModal(false);
  };

  useEffect(() => {
    getPublicationData();
  }, []);

  useEffect(() => {
    getDisabledDates();
  }, [reservations]);

  return (
    <div className={styles.publicationContainer}>
      {loading ? (
        <CircularProgress size={40} className={styles.loader} />
      ) : (
        <>
          <Typography className={styles.title}>{title}</Typography>
          <div className={styles.columnsContainer}>
            <div className={styles.leftColumn}>
              <Carousel className={styles.carouselContainer}>
                {images?.map((image, index) => (
                  <img
                    className={styles.image}
                    key={index}
                    src={image}
                    alt={image}
                  />
                ))}
              </Carousel>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.priceContainer}>
                <Typography className={styles.pricePerNight}>
                  $ARS {pricePerNight}
                </Typography>
                {userId !== hostId && (
                  <Button
                    onClick={handleReservation}
                    variant="contained"
                    color="primary"
                  >
                    Reservar
                  </Button>
                )}
              </div>
              <UserTitle user={hostUser} />
              <Typography className={styles.location}>
                <LocationOn color="primary" />
                {address && `${address}, `}
                {city && `${city}, `}
                {province && `${province}, `}
                {country}
              </Typography>
              <div className={styles.amenitiesContainer}>
                {amenities?.map((amenitie) => (
                  <Chip
                    key={amenitie}
                    variant="outlined"
                    label={amenitie}
                    color="primary"
                  />
                ))}
              </div>
              <div className={styles.descriptionContainer}>
                <Typography className={styles.descriptionTitle}>
                  Descripción
                </Typography>
                <Typography className={styles.description}>
                  {description}{' '}
                </Typography>
              </div>
            </div>
          </div>
          <div className={`${styles.leftColumn} ${styles.reviewsContainer}`}>
            <Typography className={styles.descriptionTitle}>Comentarios</Typography>
            {reviews.map(
              ({ description: reviewDescription, stars, userId: reviewerId }) => (
                <Comment
                  key={userId}
                  userId={reviewerId}
                  stars={stars}
                  comment={reviewDescription}
                />
              ),
            )}
            {!reviews.length && (
              <Typography>No hay comentarios para esta publicación</Typography>
            )}
          </div>
          {!userId ? (
            <SesionModal open={handleOpenModal} onClose={handleCloseModal} />
          ) : (
            <ReservationModal
              open={handleOpenModal}
              onClose={handleCloseModal}
              disabledDates={disabledDates}
              publicationId={publicationId}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Publication;
