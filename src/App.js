
import './App.css';
import React, { useState } from "react";

const Hotels = [
  {
    location: "Nashik",
    hotels: [
      "Holiday Inn Express Nashik Indira Nagar, an IHG Hotel 3 stars",
      "ibis Nashik - An Accor Brand",
      "Click Hotel Nashik "
    ]
  },
  {
    location: "Malegaon",
    hotels: ["Apsara", "Hotel Radhika", "Hotel City Place"]
  },
  {
    location: "Mumbai",
    hotels: [
      "The Orchid Hotel Mumbai Vile Parle",
      "The Taj Mahal Tower, Mumbai",
      "Trident Nariman Point "
    ]
  }
];

function App() {
  const [selectLocation, setSelectLocation] = useState("");
  const [hotelsList, setHoteslList] = useState("");

  const handleLocation = (e) => {
    setSelectLocation(e.target.value);
  };

  const handleHotels = (e) => {
    setHoteslList(e.target.value);
  };

  return (
    <div>
      <label>Select a Location:</label>
      <select onChange={handleLocation} value={selectLocation}>
        <option value="">Select a Location</option>
        {Hotels.map((item) => (
          <option key={item.location} value={item.location}>
            {item.location}
          </option>
        ))}
      </select>

      {selectLocation && (
        <div>
          <label>Choose Hotels:</label>
          <select onChange={handleHotels} value={hotelsList}>
            <option value="">Select a Hotels</option>
            {Hotels.find((item) => item.location === selectLocation).hotels.map(
              (hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel}
                </option>
              )
            )}
          </select>
        </div>
      )}

      {hotelsList && (
        <div>
          <p>Selected Location: {selectLocation}</p>
          <p>Selected Hotels: {hotelsList}</p>
        </div>
      )}
    </div>
  );
}

export default App;
