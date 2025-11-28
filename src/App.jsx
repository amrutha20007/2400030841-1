import React, { useState } from "react";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);

  const addCourse = () => {
    const name = prompt("Enter course name:");
    if (name) setCourses([...courses, name]);
  };

  const addEvent = () => {
    const name = prompt("Enter event name:");
    if (name) setEvents([...events, name]);
  };

  return (
    <div className="container">
      <h1>College Portal</h1>

      <div className="section">
        <h2>📘 Course Registration</h2>
        <button onClick={addCourse}>Add Course</button>
        <ul>
          {courses.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>📅 Event Calendar</h2>
        <button onClick={addEvent}>Add Event</button>
        <ul>
          {events.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
