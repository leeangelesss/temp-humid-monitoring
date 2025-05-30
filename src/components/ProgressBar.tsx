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
  {
    label: "Cold",
    condition: (v: number) => v < 20,
    color: "text-blue-500",
  },
  {
    label: "Normal",
    condition: (v: number) => v >= 20 && v < 26,
    color: "text-green-500",
  },
  {
    label: "Hot",
    condition: (v: number) => v >= 26,
    color: "text-red-500",
  },
];

const humidityLevels = [
  {
    label: "Dry",
    condition: (v: number) => v < 30,
    color: "text-red-500",
  },
  {
    label: "Comfort",
    condition: (v: number) => v >= 30 && v < 60,
    color: "text-green-500",
  },
  {
    label: "Wet",
    condition: (v: number) => v >= 60,
    color: "text-blue-500",
  },
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
      <FaThermometerHalf className="text-blue-500 text-4xl" />
    ) : (
      <FaTint className="text-blue-500 text-4xl" />
    );

  // Bigger size and stroke width
  const size = 240;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;

  const strokeDashoffset = circumference * (1 - percentage);

  return (
    <div className="w-full max-w-md py-8 px-2 bg-gray-800 rounded-xl shadow-lg text-white flex flex-col items-center">
      {/* Icon and type label */}
      <div className="flex items-center gap-6 mb-6">
        <div>{icon}</div>
        <div className="text-center text-gradient">
          <div className="font-bold text-2xl capitalize">{type}</div>
        </div>
      </div>

      {/* Progress bar container with relative positioning */}
      <div className="relative" style={{ width: size, height: size / 2 }}>
        <svg
          width={size}
          height={size / 2}
          viewBox={`0 0 ${size} ${size / 2}`}
          className="block"
        >
          {/* Background track */}
          <path
            d={`
              M ${strokeWidth / 2} ${size / 2}
              A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
            `}
            fill="none"
            stroke="#374151"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Progress path */}
          <path
            d={`
              M ${strokeWidth / 2} ${size / 2}
              A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
            `}
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

        {/* Centered value and label inside the semi-circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="text-3xl text-gradient font-bold mt-20">
            {value}
            {unit}
          </div>
          <div className="text-gradient text-lg">{currentLevel.label}</div>
        </div>
      </div>

      {/* Min and Max values */}
      <div className="w-full flex justify-between mt-4 px-16 text-gradient font-semibold text-base">
        <span>
          {min}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
