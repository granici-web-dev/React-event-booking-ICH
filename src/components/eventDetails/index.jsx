import eventData from '../../data/eventData';

function EventDetails() {
  return (
    <div>
      {eventData.map((item) => {
        return (
          <div key={item.id}>
            {item.events.map((event) => {
              return (
                <div key={event.id}>
                  <h2>{event.location}</h2>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default EventDetails;
