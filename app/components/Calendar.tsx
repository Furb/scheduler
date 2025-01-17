"use client";

import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interActionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import events from "@/lib/events";

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[interActionPlugin, dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "title",
        right: "prev,next,dayGridMonth,timeGridWeek,timeGridDay",
      }}
      weekNumberCalculation="ISO"
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
      slotMinTime={"06:00"}
      slotMaxTime={"23:45"}
      slotDuration="00:30:00"
      events={events}
      eventContent={(arg) => {
        // Destructure extendedProps inside the callback
        const { message, roomId } = arg.event.extendedProps;
        const startTime = arg.event.start!.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        const endTime = arg.event.end!.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        return (
          <div>
            <b>{arg.event.title}</b> {`${startTime} - ${endTime}`}
          </div>
        );
      }}
      //dateClick={}
      dateClick={(info) => {
        console.log("Clicked on date:", info.dateStr);
      }}
    />
  );
}
