import { useTheme } from '@emotion/react';
import { useState } from 'react';

export const useDatePicker = () => {
  const theme = useTheme();

  const initialStateRangeDate = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    color: theme.palette.primary.main,
  };

  const [dateRange, setDateRange] = useState(initialStateRangeDate);

  const handleCancelSelection = () => {
    setDateRange(initialStateRangeDate);
  };

  const handleDateRangeSelect = ({ selection }) => {
    setDateRange(selection);
  };

  return {
    dateRange,
    handleCancelSelection,
    handleDateRangeSelect,
  };
};
