function DestinationCard({ destination }) {
  const { placeName, country, budget, duration, season, img } = destination;
  const isBudgetFriendly = budget < 50000;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-white/50 backdrop-blur-sm">
      
      <div className="relative h-64 overflow-hidden">
        <img
          src={img}
          alt={placeName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src = `https://picsum.photos/seed/${placeName}/400/300`;
          }}
        />
        
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
       
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform transition-all duration-300 group-hover:scale-110 ${
          isBudgetFriendly 
            ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
            : 'bg-gradient-to-r from-amber-400 to-orange-500 text-white'
        }`}>
          {isBudgetFriendly ? '💰 Budget Friendly' : '💎 Luxury Trip'}
        </div>

       
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20">
          📍 {country}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button className="bg-white/90 backdrop-blur-sm text-purple-700 px-6 py-3 rounded-full font-semibold shadow-xl transform hover:scale-110 transition-transform duration-300">
            View Details →
          </button>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-white to-gray-50/50">
        <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
          {placeName}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded-full">📅 {season}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">⏱️ {duration}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Budget</p>
            <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rs. {budget.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐⭐⭐⭐</span>
            <span className="text-yellow-400">⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;