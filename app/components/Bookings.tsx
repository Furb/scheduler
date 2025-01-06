import prisma from "@/lib/db";
import React from "react";
import Bookingform from "./Bookingform";

export default async function Bookings() {
  const bookings = await prisma.booking.findMany();
  return (
    <main>
      <ul className="test__bookings grid grid-cols-4 gap-4 mb-8">
        {bookings.map((booking) => (
          <li key={booking.id} className="p-2 bg-slate-100">
            <h1 className="font-bold">{booking.user}</h1>
            <p>{booking.subject}</p>
          </li>
        ))}
      </ul>
      <Bookingform />
    </main>
  );
}
