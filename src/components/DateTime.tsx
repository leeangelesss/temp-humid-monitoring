// components/DateTime.tsx
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const DateTime: React.FC = () => {
  const [dateTime, setDateTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 text-center p-4 rounded-lg">
      <div className="text-xs sm:text-sm md:text-base text-gradient mb-2">
        {dateTime.format('dddd, MMMM D, YYYY')}
      </div>
      <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-gradient">
        {dateTime.format('hh:mm:ss A')}
      </div>
    </div>
  );
};

export default DateTime;
