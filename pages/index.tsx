import React from 'react';
import type { NextPage } from 'next';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

const Home: NextPage = () => (
  <FullCalendar
    plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
    initialView="dayGridMonth"
    nowIndicator={true}
    editable={true}
    initialEvents={[{ title: 'nice event', start: new Date() }]}
  />
);

export default Home;
