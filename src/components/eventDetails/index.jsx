import { useContext } from 'react';
import eventContext from '../../context/eventContext';
import DateSelect from '../dateSelect';
import EventSelect from '../eventSelect';
import SeatSelector from '../seatSelector';

function EventDetails() {
  const { selectedDate, selectedEvent, selectedSeats } = useContext(eventContext);

  return (
    <div>
      <DateSelect />

      {selectedDate && (
        <>
          <EventSelect />

          {selectedEvent && (
            <>
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.location}</p>

              <SeatSelector />

              <h2>
                Selected seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
              </h2>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default EventDetails;
