import { useContext } from 'react';
import eventData from '../../data/eventData';
import eventContext from '../../context/eventContext';

function DateSelect() {
  const { selectedDateId, setSelectedDateId } = useContext(eventContext);

  return (
    <select value={selectedDateId} onChange={(e) => setSelectedDateId(Number(e.target.value))}>
      {eventData.map((day) => (
        <option key={day.id} value={day.id}>
          {day.date.toLocaleDateString()}
        </option>
      ))}
    </select>
  );
}

export default DateSelect;
