import EventContext from '../../context/eventContext';
import { useEffect, useState } from 'react';
import eventsData from '../../data/eventData';

function EventProvider({ children }) {
  const [data, setData] = useState(eventsData);
  const [selectedDateId, setSelectedDateId] = useState(data[0].id);
  const [selectedEventId, setSelectedEventId] = useState(data[0].events[0].id);

  useEffect(() => {
    const newSelectedDate = data.find((day) => day.id === selectedDateId);

    if (newSelectedDate && newSelectedDate.events.length > 0) {
      setSelectedEventId(newSelectedDate.events[0].id);
    }
  }, [selectedDateId, data]);

  const selectedDate = data.find((day) => day.id === selectedDateId);

  const selectedEvent = selectedDate?.events.find((event) => event.id === selectedEventId);


  const toggleSeat = (seatId) => {
    setData((prev) =>
      prev.map((day) =>
        day.id !== selectedDateId
          ? day
          : {
              ...day,
              events: day.events.map((event) =>
                event.id !== selectedEventId
                  ? event
                  : {
                      ...event,
                      seats: event.seats.map((seat) =>
                        seat.id === seatId
                          ? {
                              ...seat,
                              isSelected: !seat.isSelected,
                            }
                          : seat,
                      ),
                    },
              ),
            },
      ),
    );
  };

  const selectedSeats =
    selectedEvent?.seats.filter((seat) => seat.isSelected).map((seat) => seat.id) || [];

  return (
    <EventContext.Provider
      value={{
        selectedDateId,
        setSelectedDateId,
        selectedEventId,
        setSelectedEventId,
        selectedDate,
        selectedEvent,
        toggleSeat,
        selectedSeats,
      }}>
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;
