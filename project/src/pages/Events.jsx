import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

function EventsPage() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rides") // Fetching rides (events)
      .then((response) => response.json())
      .then((data) => setRides(data))
      .catch((error) => console.error("Error fetching rides:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events (Rides)</h1>
      <div className="grid gap-6">
        {rides.length === 0 ? (
          <p className="text-gray-600">No upcoming rides available.</p>
        ) : (
          rides.map((ride) => (
            <div
              key={ride._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {ride.distance} km
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{ride.ride_name}</h2>
                <div className="flex items-center text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(ride.date_time).toDateString()}</span>
                </div>
                <p className="text-gray-600 mb-4">
                  {ride.start_location} to {ride.end_location}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Organized by: {ride.organizer_id}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EventsPage;
