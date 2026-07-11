import { useState } from 'react';
import DestinationCard from './components/DestinationCard';

function App() {
  const [search, setSearch] = useState("");

  const destinations = [
    {
      id: 1,
      placeName: "Hunza Valley",
      country: "Pakistan",
      budget: 45000,
      duration: "5 Days",
      season: "April - October",
      img: "/hunza.jpg"
    },
    {
      id: 2,
      placeName: "Paris",
      country: "France",
      budget: 250000,
      duration: "7 Days",
      season: "May - September",
      img: "/paris.jpg"
    },
    {
      id: 3,
      placeName: "Naran Kaghan",
      country: "Pakistan",
      budget: 35000,
      duration: "4 Days",
      season: "June - September",
      img: "/naran.jpg"
    },
    {
      id: 4,
      placeName: "Dubai",
      country: "UAE",
      budget: 180000,
      duration: "6 Days",
      season: "November - March",
      img: "/dubai.jpg"
    },
    {
      id: 5,
      placeName: "Skardu",
      country: "Pakistan",
      budget: 48000,
      duration: "6 Days",
      season: "May - October",
      img: "/skardu.jpg"
    },
    {
      id: 6,
      placeName: "Swat Valley",
      country: "Pakistan",
      budget: 32000,
      duration: "4 Days",
      season: "May - September",
      img: "/swat.jpg"
    }
  ];

  const filteredData = destinations.filter((item) =>
    item.placeName.toLowerCase().includes(search.toLowerCase()) ||
    item.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-5 md:p-10 relative overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
       
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4 border border-white/30">
            <span className="text-sm font-semibold text-purple-700">✈️ TRAVEL GUIDE 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3 animate-float">
            🌍 Explore Destinations
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Discover your next adventure with our handpicked destinations
          </p>
          
         
          <div className="flex justify-center gap-8 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-700">{destinations.length}</p>
              <p className="text-sm text-gray-600">Destinations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-700">6+</p>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700">⭐ 4.8</p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-full shadow-xl">
              <input
                type="text"
                placeholder="🔍 Search by place or country..."
                className="w-full px-6 py-4 pl-12 rounded-full bg-transparent border-2 border-transparent focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3 px-2">
            <p className="text-sm text-gray-600 font-medium">
              🎯 {filteredData.length} destinations found
            </p>
            <p className="text-xs text-gray-400 animate-pulse">
              ✨ Live search
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.length > 0 ? (
            filteredData.map((destination, index) => (
              <div key={destination.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard destination={destination} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
                <span className="text-6xl block mb-4">🏝️</span>
                <p className="text-2xl text-gray-600 font-medium">No destinations found</p>
                <p className="text-gray-400 mt-2">Try searching with different keywords</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Made with ❤️ • {destinations.length} Amazing Destinations
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <span className="text-xs bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-gray-600 border border-white/30">
              🌿 Budget Friendly
            </span>
            <span className="text-xs bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-gray-600 border border-white/30">
              💎 Luxury Trips
            </span>
            <span className="text-xs bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-gray-600 border border-white/30">
              🌍 Worldwide
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default App;