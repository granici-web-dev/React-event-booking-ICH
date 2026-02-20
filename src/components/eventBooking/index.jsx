import DateSelect from '../dateSelect';
import EventDetails from '../eventDetails';
import SeatSelector from '../seatSelector';

function EventBooking() {

  return (
    <div>
      <DateSelect />
      <EventDetails />
      <SeatSelector/>
    </div>
  );
}

export default EventBooking;
