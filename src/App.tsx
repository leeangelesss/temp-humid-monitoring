import './App.css'
import Level from './components/Level'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      {/* Left side container for Levels */}
      <div className="p-6 rounded-2xl max-w-sm w-full">
        <Level />
      </div>

      {/* Right side container for Progress Bars */}
      <div className="p-6 rounded-2xl shadow-lg max-w-md w-full flex flex-col space-y-6">
        <ProgressBar type="temperature" value={28} max={50} unit="°C" />
        <ProgressBar type="humidity" value={45} max={100} unit="%" />
      </div>
    </div>
  )
}

export default App
