import { useState } from 'react';

function SeatSelector({ eventData }) {
  const [seats, setSeats] = useState(eventData.seats);

  const toggleSeat = (id) => {
    setSeats((prev) =>
      prev.map((seat) => (seat.id === id ? { ...seat, isSelected: !seat.isSelected } : seat)),
    );
  };

  const selectedSeats = seats.filter((seat) => seat.isSelected).map((seat) => seat.id);

  return (
    <div>
      {seats.map((seat) => (
        <button
          key={seat.id}
          onClick={() => toggleSeat(seat.id)}
          style={{
            backgroundColor: seat.isSelected ? '#88C59B' : '#9EB5B4',
            margin: '5px',
            padding: '8px 24px',
            borderRadius: '8px',
          }}>
          {seat.label}
        </button>
      ))}

      <h2>Selected seats: {selectedSeats.length === 0 ? 0 : selectedSeats.join(', ')}</h2>
    </div>
  );
}

export default SeatSelector;
