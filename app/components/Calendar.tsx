"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interActionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { getBookings } from "@/actions/actions";
import { useState } from "react";
import Bookingform from "./Bookingform";
import { DateSelectArg } from "@fullcalendar/core/index.js";

export default function Calendar() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (info: any) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };
  return (
    <>
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

          const startTime = arg.event.start
            ? arg.event.start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            : "N/A";

          const endTime = arg.event.end
            ? arg.event.end.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            : "N/A";

          return (
            <div>
              <b>{arg.event.title}</b> {`${startTime} - ${endTime}`}
            </div>
          );
        }}
        //dateClick={}
        dateClick={handleDateClick}
      />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <Bookingform selectedDate={selectedDate} />
            <button
              className="text-center tracking-wide font-extralight text-sm text-[var(--main-color)] m-3"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
