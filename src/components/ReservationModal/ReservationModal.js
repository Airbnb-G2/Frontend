import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Snackbar,
  Stack,
  Typography,
  Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
import { reservationModalStyles } from "./ReservationModalStyles";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useForm } from "../../hooks/useForm";
import { dbPost } from "../../utils/db";
import { AuthContext } from "../../context/Auth";
import { formatDate, formatPrice, getDatesInRange } from "../../utils/utils";
import { useDatePicker } from "../../hooks/useDatePicker";

const ReservationModal = ({ open, onClose, rentalId, disabledDates = [], pricePerNight }) => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { dateRange, handleCancelSelection, handleDateRangeSelect } = useDatePicker();
  const { formState, handleInputChange, resetFormState } = useForm({
    numberOfGuests: ""
  });

  const styles = reservationModalStyles();
  const { id: userId } = userInfo;
  const amountOfGuests = [1, 2, 3, 4, 5, 6];

  const handleCancel = () => {
    handleCancelSelection();
    resetFormState();
    onClose();
  };

  const handleSubmit = () => {
    const { startDate, endDate } = dateRange;
    dbPost("reservation", {
      rentalId,
      guestId: userId,
      fromDate: formatDate(startDate),
      toDate: formatDate(endDate)
    })
      .then(() => {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate(-1);
        }, 4000);
      })
      .catch(({ data }) => console.error(data));
  };

  useEffect(() => {
    const totalDays = getDatesInRange(dateRange.startDate, dateRange.endDate).length;
    setTotalPrice(formatPrice(totalDays * pricePerNight));
  }, [dateRange]);

  return (
    <Dialog onClose={handleCancel} open={open}>
      <DialogTitle>Registra tu reserva</DialogTitle>

      <DialogContent className={styles.modalContainer}>
        <CustomSelect
          name="numberOfGuests"
          value={formState.numberOfGuests}
          label="Cantidad de huéspedes"
          onChange={handleInputChange}
        >
          {amountOfGuests.map((amount) => (
            <MenuItem key={amount} value={amount}>
              {amount}
            </MenuItem>
          ))}
        </CustomSelect>
        <DateRangePicker
          ranges={[dateRange]}
          onChange={handleDateRangeSelect}
          minDate={new Date()}
          staticRanges={[]}
          inputRanges={[]}
          className={styles.dateRangePicker}
          disabledDates={disabledDates}
        />
      </DialogContent>

      <DialogActions>
        <Stack direction="column" width="100%">
          <Stack alignItems="center">
            <Typography variant="h5">Monto total</Typography>
            <Typography color="primary" variant="h4" sx={{ mb: 2 }}>
              $ARS {totalPrice}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Button size="large" fullWidth onClick={handleCancel}>
              Cancelar
            </Button>
            <Button size="large" fullWidth variant="contained" onClick={handleSubmit}>
              Reservar
            </Button>
          </Stack>
        </Stack>
      </DialogActions>

      <Snackbar open={openSnackbar} autoHideDuration={4000}>
        <Alert
          severity="success"
          sx={{ width: "25%", color: "#FFF" }}
          elevation={6}
          variant="filled"
        >
          Tu reserva se creo correctamente!
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default ReservationModal;
