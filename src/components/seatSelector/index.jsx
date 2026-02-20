import { useContext } from 'react';
import eventContext from '../../context/eventContext';

function SeatSelector() {
  const { selectedEvent, toggleSeat } = useContext(eventContext);

  const seats = selectedEvent?.seats || [];

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
    </div>
  );
}

export default SeatSelector;
