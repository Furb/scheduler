"use client";
import { createBooking } from "@/actions/actions";

function Bookingform({ selectedDate }: { selectedDate: string | null }) {
  return (
    <form
      action={createBooking}
      className="flex flex-col p-4 max-w-md mx-auto relative text-gray-600"
    >
      <input
        type="text"
        name="user"
        placeholder="Reserved for..."
        className="placeholder:text-gray-600 text-sm font-semibold pt-3 pb-2 mb-12 block w-full px-0 mt-0 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 border-gray-200 focus:border-[var(--color-main)]"
      />

      <fieldset className="flex space-y-2 gap-2 mb-12">
        <legend className="text-sm font-semibold">Select Room:</legend>
        <label htmlFor="room1" className="text-sm">
          <input
            type="radio"
            id="room1"
            name="roomId"
            value="room1"
            className="mr-1"
            required
          />
          Small Room
        </label>
        <br />
        <label htmlFor="room2" className="text-sm">
          <input
            type="radio"
            id="room2"
            name="roomId"
            value="room2"
            className="mr-1"
          />
          Big Room
        </label>
        <br />
        <label htmlFor="room3" className="text-sm">
          <input
            type="radio"
            id="room3"
            name="roomId"
            value="room3"
            className="mr-1"
          />
          Cold Room
        </label>
      </fieldset>
      <fieldset className="flex justify-between gap-8 mb-12 text-sm">
        <div className="w-1/2 border-b-2 appearance-none focus:outline-0 focus:ring-0 border-gray-200 focus:border-[var(--color-main)] ">
          <label htmlFor="starttime" className="text-sm font-semibold">
            Start
          </label>
          <input
            type="datetime-local"
            id="starttime"
            name="startTime"
            className="w-full"
            required
            defaultValue={selectedDate ? `${selectedDate}T09:00` : ""}
          />
        </div>

        <div className="w-1/2 border-b-2 appearance-none focus:outline-none focus:ring-0 border-gray-200 focus:border-[var(--color-main)]">
          <label htmlFor="endtime" className="text-sm font-semibold">
            End
          </label>
          <input
            type="datetime-local"
            id="endtime"
            name="endTime"
            className="w-full"
            required
            defaultValue={selectedDate ? `${selectedDate}T09:00` : ""}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full py-3 text-white bg-[var(--color-main)] rounded hover:bg-[var(--color-second)]"
      >
        Confirm Booking
      </button>
    </form>
  );
}

export default Bookingform;
