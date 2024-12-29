"use client";
import { createBooking } from "@/actions/actions";

function Bookingform() {
  return (
    <form
      action={createBooking}
      className='flex flex-col space-y-4 p-4 bg-purple-500 rounded shadow-md max-w-md mx-auto'
    >
      <input
        type='text'
        name='user'
        placeholder='Who is booking?'
        className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <textarea
        name='subject'
        rows={5}
        placeholder='Subject'
        className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <fieldset className='flex space-y-2 gap-2'>
        <legend>Select Room:</legend>
        <label htmlFor='room1'>
          <input
            type='radio'
            id='room1'
            name='roomId'
            value='room1'
            className='mr-1'
            required
          />
          Room 1
        </label>
        <br />
        <label htmlFor='room2'>
          <input
            type='radio'
            id='room2'
            name='roomId'
            value='room2'
            className='mr-1'
          />
          Room 2
        </label>
        <br />
        <label htmlFor='room3'>
          <input
            type='radio'
            id='room3'
            name='roomId'
            value='room3'
            className='mr-1'
          />
          Room 3
        </label>
      </fieldset>

      <label htmlFor='starttime'>Start Time:</label>
      <input type='datetime-local' id='starttime' name='startTime' required />

      <label htmlFor='endtime'>End Time:</label>
      <input type='datetime-local' id='endtime' name='endTime' required />

      <button
        type='submit'
        className='w-full py-3 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Confirm Booking
      </button>
    </form>
  );
}

export default Bookingform;
