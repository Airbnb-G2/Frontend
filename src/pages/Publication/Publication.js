import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Button, Chip, CircularProgress, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { dbGet } from "../../utils/db";
import { publicationStyles } from "./PublicationStyles";
import ReservationModal from "../../components/ReservationModal/ReservationModal";
import { AuthContext } from "../../context/Auth";
import SesionModal from "../../components/SesionModal/SesionModal";
import { formatDate, getDisabledDates } from "../../utils/utils";
import UserTitle from "../../components/UserTitle/UserTitle";
import ReviewsList from "../../components/CommentsList/ReviewsList";
import ReviewModal from "../../components/ReviewModal/ReviewModal";

const CURRENT_DATE = new Date();

const Publication = () => {
  const styles = publicationStyles();
  const [loading, setLoading] = useState(true);
  const { publicationId } = useParams();
  const [publication, setPublication] = useState({});
  const [handleOpenModal, setOpenReservationModal] = useState(false);
  const [lastReservationId, setLastReservationId] = useState();
  const {
    userInfo,
    authState: { isLoggedIn },
  } = useContext(AuthContext);
  const [disabledDates, setDisabledDates] = useState();
  const [hostUser, setHostUser] = useState({});
  const [reviews, setReviews] = useState([]);
  const canReserve = useRef(true);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const { id: userId } = userInfo;

  const {
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
      const { rental } = await dbGet(`rental/${publicationId}`);
      const hostInfo = await dbGet(`user/${rental.hostId}`);
      const { items: reviewsData } = await dbGet("review", {
        rentalId: rental.id,
      });
      setDisabledDates(getDisabledDates(rental.reservations));
      setHostUser(hostInfo);
      setPublication(rental);
      setReviews(reviewsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getLoggedUserReservations = async () => {
    const { items: reservationsData } = await dbGet("reservation", {
      rentalId: publicationId,
      guestId: userId,
    });
    if (reservationsData.length) {
      const { toDate, leftReview, id } = reservationsData.slice(-1)[0];
      setLastReservationId(id);
      canReserve.current = formatDate(toDate) <= formatDate(CURRENT_DATE);
      setOpenReviewModal(canReserve.current && !leftReview);
    }
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
    getDisabledDates(reservations);
  }, [reservations]);

  useEffect(() => {
    if (isLoggedIn) getLoggedUserReservations();
  }, [isLoggedIn]);

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
                  <img className={styles.image} key={index} src={image} alt={image} />
                ))}
              </Carousel>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.priceContainer}>
                <Typography className={styles.pricePerNight}>$ARS {pricePerNight}</Typography>
                {userId !== hostId && canReserve.current && (
                  <Button onClick={handleReservation} variant="contained" color="primary">
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
                  <Chip key={amenitie} variant="outlined" label={amenitie} color="primary" />
                ))}
              </div>
              <div className={styles.descriptionContainer}>
                <Typography className={styles.descriptionTitle}>Descripción</Typography>
                <Typography className={styles.description}>{description} </Typography>
              </div>
            </div>
          </div>
          <ReviewsList
            reviews={reviews}
            noReviewsMessage="No hay comentarios para esta publicación"
          />
          {!userId ? (
            <SesionModal open={handleOpenModal} onClose={handleCloseModal} />
          ) : (
            <>
              <ReservationModal
                open={handleOpenModal}
                onClose={handleCloseModal}
                disabledDates={disabledDates}
                publicationId={publicationId}
              />
              <ReviewModal
                publicationTitle={title}
                hostFullName={`${hostUser.firstname} ${hostUser.lastname}`}
                userId={userId}
                rentalId={publicationId}
                otherUserId={hostId}
                open={openReviewModal}
                reservationId={lastReservationId}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Publication;
