import prisma from "@/lib/db";

import React from "react";
import Bookingform from "./Bookingform";

export default async function Bookings() {
  const bookings = await prisma.booking.findMany();
  return (
    <main>
      <ul className='test__bookings'>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <h1 className='text-bold'>{booking.user}</h1>
            <p>{booking.subject}</p>
          </li>
        ))}
      </ul>
      <Bookingform />
    </main>
  );
}