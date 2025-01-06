"use client";

import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interActionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[interActionPlugin, dayGridPlugin, timeGridPlugin]}
      initialView='dayGridMonth'
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      weekNumberCalculation='ISO'
      weekNumbers={true}
      weekNumberContent={(args) => args.num}
      slotLabelFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }}
      slotDuration='00:30:00'
      events={{}}
      //dateClick={}
    />
  );
}
