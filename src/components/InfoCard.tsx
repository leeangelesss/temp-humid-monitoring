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
    <div className="max-w-lg mx-auto p-6 text-white bg-gray-800 rounded-2xl">
      {/* Date and Time */}
      <div className="bg-gray-900 text-center mb-8 p-4 rounded-lg">
        <div className="text-md text-gradient">
          {dateTime.format('dddd, MMMM D, YYYY')}
        </div>
        <div className="text-4xl text-gradient font-bold">
          {dateTime.format('hh:mm:ss A')}
        </div>
      </div>

      {/* Logo and Title */}
      <div className="flex justify-center items-center mb-4">
        <img src={Logo} alt="ThermoSense Logo" className="w-14 h-auto object-contain" />
        <h2 className="text-4xl text-gradient font-bold mb-2 px-2">ThermoSense</h2>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-6 text-left">
        ThermoSense is a real-time monitoring system designed to accurately track temperature and humidity using the DHT11 sensor. ThermoSense collects data and presents it in a user-friendly interface, enabling users to make informed decisions for temperature-sensitive environments. It is a practical solution for ensuring comfort, safety, and energy efficiency.
      </p>

      {/* Group Members */}
      <div className="text-left">
        <h3 className="text-xl text-gradient font-bold mb-2">Group Members</h3>
        <ul className="text-sm list-disc list-inside text-gray-300">
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
