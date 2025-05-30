import React from "react";
import { FaTint, FaSmile, FaThermometerHalf, FaSnowflake, FaSun } from "react-icons/fa";

const humidityLevels = [
  {
    label: "Dry",
    conditions: ["Humidity < 30%"],
    color: "bg-red-500",
    icon: <FaTint className="text-white text-3xl" />,
  },
  {
    label: "Comfort",
    conditions: ["30% ≤ Humidity < 60%"],
    color: "bg-green-500",
    icon: <FaSmile className="text-white text-3xl" />,
  },
  {
    label: "Wet",
    conditions: ["Humidity ≥ 60%"],
    color: "bg-blue-500",
    icon: <FaTint className="text-white text-3xl" />,
  },
];

const temperatureLevels = [
  {
    label: "Cold",
    conditions: ["Temperature < 20°C"],
    color: "bg-blue-500",
    icon: <FaSnowflake className="text-white text-3xl" />,
  },
  {
    label: "Normal",
    conditions: ["20°C ≤ Temperature < 26°C"],
    color: "bg-green-500",
    icon: <FaThermometerHalf className="text-white text-3xl" />,
  },
  {
    label: "Hot",
    conditions: ["Temperature ≥ 26°C"],
    color: "bg-red-500",
    icon: <FaSun className="text-white text-3xl" />,
  },
];

const Level: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow-lg max-w-sm mx-auto text-white">
      {/* Humidity Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-gradient">
          Humidity Levels
        </h2>
        {humidityLevels.map((level, index) => (
          <div key={index} className="flex items-start gap-4 mb-5 text-gradient">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${level.color} shadow-lg`}
            >
              {level.icon}
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-base font-bold">
                {level.label}
              </span>
              {level.conditions.map((condition, i) => (
                <span key={i} className="text-sm">
                  {condition}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Temperature Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gradient border-b border-gray-700 pb-2">
          Temperature Levels
        </h2>
        {temperatureLevels.map((level, index) => (
          <div key={index} className="flex items-start gap-4 mb-5 text-gradient">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${level.color} shadow-lg`}
            >
              {level.icon}
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-base font-bold">
                {level.label}
              </span>
              {level.conditions.map((condition, i) => (
                <span key={i} className="text-sm">
                  {condition}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Level;
