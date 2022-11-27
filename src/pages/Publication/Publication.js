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
import { formatDate, formatPrice, getDisabledDates } from "../../utils/utils";
import UserTitle from "../../components/UserTitle/UserTitle";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ReviewModal from "../../components/ReviewModal/ReviewModal";

const CURRENT_DATE = new Date();

const Publication = () => {
  const styles = publicationStyles();
  const [loading, setLoading] = useState(true);
  const rentalId = parseInt(useParams().rentalId, 10);

  const [publication, setPublication] = useState({});
  const [handleOpenModal, setOpenReservationModal] = useState(false);
  const [lastReservationId, setLastReservationId] = useState();
  const {
    userInfo,
    authState: { isLoggedIn },
  } = useContext(AuthContext);
  const disabledDates = useRef([]);
  const canReserve = useRef(true);
  const hostUser = useRef({});
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const userId = userInfo.id;

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
    reviews,
  } = publication || {};

  const getPublicationData = async () => {
    setLoading(true);

    try {
      const { rental } = await dbGet(`rental/${rentalId}`);
      const hostInfo = await dbGet(`user/${rental.hostId}`);
      const { items } = await dbGet("review", {
        rentalId: rental.id,
      });
      disabledDates.current = getDisabledDates(rental.reservations);
      hostUser.current = hostInfo;
      setPublication({ ...rental, reviews: items });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getLoggedUserReservations = async () => {
    const { items: reservationsData } = await dbGet("reservation", {
      rentalId,
      guestId: userId,
    });
    if (reservationsData.length) {
      const { toDate, leftReview, id } = reservationsData.slice(-1)[0];
      setLastReservationId(id);
      canReserve.current = formatDate(toDate) <= formatDate(CURRENT_DATE) && userId !== hostId;
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
    if (isLoggedIn && userId) getLoggedUserReservations();
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
              <Carousel className={styles.carouselContainer} navButtonsAlwaysVisible>
                {images?.map((image, index) => (
                  <img className={styles.image} key={index} src={image} alt={image} />
                ))}
              </Carousel>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.priceContainer}>
                <Typography className={styles.pricePerNight}>
                  $ARS {formatPrice(pricePerNight)}
                </Typography>
                {canReserve.current && (
                  <Button
                    onClick={handleReservation}
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Reservar
                  </Button>
                )}
              </div>
              <UserTitle user={hostUser.current} />
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
                disabledDates={disabledDates.current}
                rentalId={rentalId}
                pricePerNight={pricePerNight}
              />
              <ReviewModal
                publicationTitle={title}
                hostFullName={`${hostUser.current.firstname} ${hostUser.current.lastname}`}
                userId={userId}
                rentalId={rentalId}
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
