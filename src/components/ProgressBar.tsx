import React from "react";
import { FaTint, FaThermometerHalf } from "react-icons/fa";

interface ProgressBarProps {
  type: "temperature" | "humidity";
  value: number;
  min?: number;
  max: number;
  unit?: string;
}

const temperatureLevels = [
  { label: "Cold", condition: (v: number) => v < 20, color: "text-blue-500" },
  { label: "Normal", condition: (v: number) => v >= 20 && v < 26, color: "text-green-500" },
  { label: "Hot", condition: (v: number) => v >= 26, color: "text-red-500" },
];

const humidityLevels = [
  { label: "Dry", condition: (v: number) => v < 30, color: "text-red-500" },
  { label: "Comfort", condition: (v: number) => v >= 30 && v < 60, color: "text-green-500" },
  { label: "Wet", condition: (v: number) => v >= 60, color: "text-blue-500" },
];

const ProgressBar: React.FC<ProgressBarProps> = ({
  type,
  value,
  min = 0,
  max,
  unit = "",
}) => {
  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);

  const levels = type === "temperature" ? temperatureLevels : humidityLevels;
  const currentLevel = levels.find((level) => level.condition(value)) || levels[0];

  const icon =
    type === "temperature" ? (
      <FaThermometerHalf className="text-blue-500 text-2xl" />
    ) : (
      <FaTint className="text-blue-500 text-2xl" />
    );

  const size = 240;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage);

  return (
    <div className="w-full max-w-[300px] px-6 py-8 bg-gray-800 rounded-xl shadow-lg text-white flex flex-col items-center">
      {/* Icon and label */}
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <div className="text-xl font-bold capitalize text-gradient">{type}</div>
      </div>

      {/* Progress bar container */}
      <div className="relative w-full aspect-[2/1]">
        <svg
          viewBox={`0 0 ${size} ${size / 2}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          {/* Background track */}
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none"
            stroke="#374151"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Progress path */}
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={currentLevel.color}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>

        {/* Value and label centered */}
        <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-3xl font-bold text-gradient">
            {value}
            {unit}
          </div>
          <div className="text-gradient text-sm">{currentLevel.label}</div>
        </div>

        {/* Fixed min and max under the ends */}
        <div className="absolute py-2 bottom-[-1] left-0 transform -translate-x-1/2 text-sm text-gradient font-semibold">
          {min}
          {unit}
        </div>
        <div className="absolute py-2 bottom-[-1] right-0 transform translate-x-1/2 text-sm text-gradient font-semibold">
          {max}
          {unit}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
