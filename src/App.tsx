import './App.css';
import InfoCard from './components/InfoCard';
import Level from './components/Level';
import ProgressBar from './components/ProgressBar';
import DateTime from './components/DateTime';

function App() {
  return (
    <div className="bg-gray-900 flex items-center justify-center px-4 sm:px-6 py-8">
      {/* Responsive wrapper container */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl items-stretch">
        
        {/* InfoCard Section */}
        <div className="shadow-md w-full md:w-1/3">
          <InfoCard />
        </div>

        {/* Progress Bars */}
        <div className="shadow-md md:w-1/3 flex flex-col space-y-6">
          <DateTime />
          <ProgressBar type="temperature" value={28} max={50} unit="°C" />
          <ProgressBar type="humidity" value={45} max={100} unit="%" />
        </div>

        {/* Level Section */}
        <div className="shadow-md w-full md:w-1/3">
          <Level />
        </div>
        
      </div>
    </div>
  );
}

export default App;
