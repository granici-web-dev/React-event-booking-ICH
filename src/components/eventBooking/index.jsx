import EventDetails from '../eventDetails';
import SeatSelector from '../seatSelector';

function EventBooking() {

  const eventData = [
    {
      id: 1,
      title: 'Concert of the Year',
      date: '2023-12-01',
      location: 'City Arena',
      seats: [
        { id: 1, label: '1A', isSelected: false },
        { id: 2, label: '1B', isSelected: false },
        { id: 3, label: '1C', isSelected: false },
        { id: 4, label: '1D', isSelected: false },
        { id: 5, label: '1E', isSelected: false },
        { id: 6, label: '1F', isSelected: false },
        { id: 7, label: '1G', isSelected: false },
      ],
    },
  ];

  return (
    <div>
      <EventDetails eventData={eventData} />
      <SeatSelector eventData={eventData[0]} />
    </div>
  );
}

export default EventBooking;
