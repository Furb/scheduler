"use server";
import prisma from "@/lib/db";

export async function createBooking(formData: FormData) {
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;

  // Validate and convert to Date objects
  const parsedStartTime = new Date(startTime);
  const parsedEndTime = new Date(endTime);

  // Ensure parsed dates are valid
  if (isNaN(parsedStartTime.getTime()) || isNaN(parsedEndTime.getTime())) {
    throw new Error("Invalid start or end time");
  }
  await prisma.booking.create({
    data: {
      user: formData.get("user") as string,
      subject: formData.get("subject") as string,
      roomId: formData.get("roomId") as string,
      startTime: parsedStartTime,
      endTime: parsedEndTime,
    },
  });
}
