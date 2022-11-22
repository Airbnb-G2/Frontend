import React, { useContext, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Snackbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DateRangePicker } from 'react-date-range';
import { reservationModalStyles } from './ReservationModalStyles';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useForm } from '../../hooks/useForm';
import { dbPost } from '../../utils/db';
import { AuthContext } from '../../context/Auth';
import { formatDate } from '../../utils/utils';
import { useDatePicker } from '../../hooks/useDatePicker';

const ReservationModal = ({
  open,
  onClose,
  publicationId,
  disabledDates = [],
}) => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { dateRange, handleCancelSelection, handleDateRangeSelect } = useDatePicker();
  const { formState, handleInputChange, resetFormState } = useForm({
    numberOfGuests: '',
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
    dbPost('reservation', {
      rentalId: publicationId,
      guestId: userId,
      fromDate: formatDate(startDate),
      toDate: formatDate(endDate),
    })
      .then(() => {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      })
      .catch(({ data }) => console.error(data));
  };

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
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleSubmit}>Reservar</Button>
      </DialogActions>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={1500}
        message="La publicación se creo correctamente!"
        severity="success"
      />
    </Dialog>
  );
};

export default ReservationModal;
