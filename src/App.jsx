import './App.css';
import EventBooking from './components/eventBooking';
import EventProvider from './components/eventProvider';

function App() {
  return (
    <>
      <EventProvider>
        <EventBooking />
      </EventProvider>
    </>
  );
}

export default App;
