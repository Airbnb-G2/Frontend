import React, { useContext, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  MenuItem,
  Snackbar,
  Typography,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import { reservationModalStyles } from './ReservationModalStyles';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useForm } from '../../hooks/useForm';
import { dbPost } from '../../utils/db';
import { AuthContext } from '../../context/Auth';

const currentDate = new Date();

const ReservationModal = ({ open, publicationId, onClose }) => {
  const styles = reservationModalStyles();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const amountOfGuests = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();

  const { userInfo } = useContext(AuthContext);
  const { id: userId } = userInfo;

  const { formState, handleInputChange } = useForm({
    numberOfGuests: '',
  });

  const handleSubmit = () => {
    dbPost('reservation', {
      rentalId: publicationId,
      guestId: userId,
      fromDate: startDate,
      toDate: endDate,
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
    <Dialog onClose={onClose} open={open}>
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
        <Typography>Seleccione las fechas de reserva</Typography>
        <DatePicker
          selectsRange
          className={styles.datePicker}
          startDate={startDate}
          endDate={endDate}
          placeholderText="Seleccione el rango de fechas"
          onChange={(update) => {
            setDateRange(update);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
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
