import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');

  const onChange = (date) => {
    setDate(date);
  };

  const addEvent = () => {
    if (eventName) {
      const newEvent = {
        date: date.toDateString(),
        eventName
      };
      setEvents([...events, newEvent]);
      setEventName('');
    } else {
      alert('Lütfen etkinlik adını girin.');
    }
  };

  return (
    <div className="App">
      <h1>Takvim Uygulaması</h1>
      <div className="calendar-container">
        <div className="calendar">
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className="event-form">
          <h2>{date.toDateString()}</h2>
          <label>Etkinlik Adı:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Etkinlik Adı Girin"
          />
          <button onClick={addEvent}>Etkinlik Ekle</button>
        </div>
      </div>
      <div className="event-list">
        <h2>Kaydedilmiş Etkinlikler</h2>
        {events.length === 0 ? (
          <p>Henüz kaydedilmiş etkinlik bulunmamaktadır.</p>
        ) : (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>{event.date}</strong>: {event.eventName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
