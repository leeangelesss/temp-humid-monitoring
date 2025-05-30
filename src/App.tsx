import './App.css'
import InfoCard from './components/InfoCard'
import Level from './components/Level'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      {/* Wrapper flex row container */}
      <div className="flex flex-row gap-8 w-full max-w-7xl items-start">

        {/* Left side - InfoCard */}
        <div className="shadow-md w-1/3">
          <InfoCard />
        </div>

        {/* Center - Progress Bars */}
        <div className="shadow-md w-1/3 flex flex-col space-y-6">
          <ProgressBar type="temperature" value={28} max={50} unit="°C" />
          <ProgressBar type="humidity" value={45} max={100} unit="%" />
        </div>

        {/* Right side - Levels */}
        <div className="shadow-md w-1/3">
          <Level />
        </div>

      </div>
    </div>
  )
}

export default App
