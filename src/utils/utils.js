import moment from 'moment';

const priceFormatter = new Intl.NumberFormat('es-ar');

export const formatDate = (date) => moment(date).format('YYYY-MM-DD');

export const formatPrice = (price) => priceFormatter.format(Number(price));
