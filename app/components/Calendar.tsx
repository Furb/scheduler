"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interActionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { getBookings } from "@/actions/actions";
import { useState } from "react";

export default function Calendar() {
  const handleDateClick = (info: any) => {
    const clickedDate = info.date.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    alert(`You clicked on ${clickedDate}`);
  };
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
      events={getBookings}
      eventContent={(arg) => {
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
      dateClick={handleDateClick}
    />
  );
}
