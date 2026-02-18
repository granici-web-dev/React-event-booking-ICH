function EventDetails({ eventData }) {
  return (
    <div>
      {eventData.map((item) => {
        return (
          <div key={item.id}>
            <h1 style={{ fontSize: '56px' }}>{item.title}</h1>
            <h2>{item.date}</h2>
            <h2>{item.location}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default EventDetails;
