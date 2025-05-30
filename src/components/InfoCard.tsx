// components/InfoCard.tsx
import React from 'react';
import Logo from '../assets/ThermoSense.png';

const InfoCard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-4 md:p-6 text-white bg-gray-800 rounded-lg">
      {/* Logo and Title */}
      <div className="flex flex-col sm:flex-row mb-2 sm:mb-4">
        <img src={Logo} alt="ThermoSense Logo" className="w-20 h-auto object-contain mb-2 sm:mb-0 sm:mr-2" />
      </div>

      {/* Description */}
      <div className="text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:3xl text-gradient font-bold text-left mb-2">ThermoSense</h2>
        <p className="text-gradient text-sm mb-4 text-left">
            ThermoSense is a real-time monitoring system designed to accurately track temperature and humidity using the DHT11 sensor. ThermoSense collects data and presents it in a user-friendly interface, enabling users to make informed decisions for temperature-sensitive environments. It is a practical solution for ensuring comfort, safety, and energy efficiency.
        </p>
      </div>

      {/* Features */}

      {/* Group Members */}
      <div className="text-left">
        <h3 className="text-lg text-gradient font-bold mb-2">Group Members</h3>
        <ul className="text-xs sm:text-sm list-disc list-inside text-gradient">
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
