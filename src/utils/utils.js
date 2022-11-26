/* eslint-disable consistent-return */
import moment from "moment";

const priceFormatter = new Intl.NumberFormat("es-ar");

export const formatDate = (date) => moment(date).format("YYYY-MM-DD");

export const formatPrice = (price) => priceFormatter.format(Number(price));

export const getDatesInRange = (startDate, endDate) => {
  const dateArray = [];
  let currentDate = moment(startDate);
  const formattedEndDate = moment(endDate);
  while (currentDate <= formattedEndDate) {
    dateArray.push(moment(currentDate).toDate());
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
};

export const getDisabledDates = (reservations) => {
  let dates = [];

  if (!reservations?.length) return;

  reservations.forEach(({ fromDate, toDate }) => {
    dates = dates.concat(getDatesInRange(fromDate, toDate));
  });
  return [...new Set(dates.flat())];
};
