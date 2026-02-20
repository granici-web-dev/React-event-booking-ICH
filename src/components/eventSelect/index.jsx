import { useContext } from 'react';
import eventContext from '../../context/eventContext';

function EventSelect() {
  const { selectedDate, selectedEventId, setSelectedEventId } = useContext(eventContext);

  if (!selectedDate) return null;

  return (
    <select
      value={selectedEventId || ''}
      onChange={(e) => setSelectedEventId(Number(e.target.value))}>
      <option value="">Choose event</option>

      {selectedDate.events.map((event) => (
        <option key={event.id} value={event.id}>
          {event.title}
        </option>
      ))}
    </select>
  );
}

export default EventSelect;
