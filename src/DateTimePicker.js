import React, { useState } from 'react';

const DateTimePicker = () => {
  const [targetDate, setTargetDate] = useState('');

  const handleDateChange = (e) => {
    setTargetDate(e.target.value);
  };

  return (
    <div>
      <input type="datetime-local" value={targetDate} onChange={handleDateChange} />
    </div>
  );
};

export default DateTimePicker;
