import ItineraryPlanner from './components/ItineraryPlanner';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <ItineraryPlanner />
      </div>
      <div className="hidden md:block w-1/2">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default App;
