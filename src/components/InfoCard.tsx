import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Logo from '../assets/ThermoSense.png';

const InfoCard: React.FC = () => {
  const [dateTime, setDateTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 text-white bg-gray-800 rounded-2xl">
      {/* Date and Time */}
      <div className="bg-gray-900 text-center mb-6 sm:mb-8 p-4 rounded-lg">
        <div className="text-sm sm:text-base md:text-lg text-gradient">
          {dateTime.format('dddd, MMMM D, YYYY')}
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
          {dateTime.format('hh:mm:ss A')}
        </div>
      </div>

      {/* Logo and Title */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-2 sm:mb-4">
        <img src={Logo} alt="ThermoSense Logo" className="w-14 h-auto object-contain mb-2 sm:mb-0 sm:mr-2" />
        <h2 className="text-2xl sm:text-3xl text-gradient font-bold text-center sm:text-left">
          ThermoSense
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-sm mb-4 text-justify">
        ThermoSense is a real-time monitoring system designed to accurately track temperature and humidity using the DHT11 sensor. ThermoSense collects data and presents it in a user-friendly interface, enabling users to make informed decisions for temperature-sensitive environments. It is a practical solution for ensuring comfort, safety, and energy efficiency.
      </p>

      {/* Group Members */}
      <div className="text-left">
        <h3 className="text-lg sm:text-xl text-gradient font-bold mb-2">Group Members</h3>
        <ul className="text-sm sm:text-sm list-disc list-inside text-gray-300">
          <li>Angeles, Lee Anne</li>
          <li>Baturiano, Joseph</li>
          <li>Esmeralda, Uriel</li>
          <li>Llanera, Joshua</li>
          <li>Mina, Joshua</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
