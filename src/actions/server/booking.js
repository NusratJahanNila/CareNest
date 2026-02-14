"use server";

import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

//  create booking
export const createBooking = async (bookingData) => {
  try {
    const result = await dbConnect(collections.BOOKINGS).insertOne({
      ...bookingData,
      createdAt: new Date(),
    });

    return {
      success: true,
      insertedId: result.insertedId.toString(),
    };

  } catch (error) {
    console.error("createBooking error:", error);
    return {
      success: false,
      message: "Failed to create booking",
    };
  }
};


// GET BOOKINGS BY USER EMAIL
export const getUserBookings = async (email) => {
  try {
    const bookings = await dbConnect(collections.BOOKINGS)
      .find({ "user.email": email })
      .sort({ createdAt: -1 })
      .toArray();

    return bookings.map(b => ({
      ...b,
      _id: b._id.toString(),
    }));

  } catch (error) {
    console.error("getUserBookings error:", error);
    return [];
  }
};


// single booking
export const getSingleBooking = async (id) => {
  try {
    if (!ObjectId.isValid(id)) return null;

    const booking = await dbConnect(collections.BOOKINGS)
      .findOne({ _id: new ObjectId(id) });

    if (!booking) return null;

    return {
      ...booking,
      _id: booking._id.toString(),
    };

  } catch (error) {
    console.error("getSingleBooking error:", error);
    return null;
  }
};


// ✅ UPDATE BOOKING STATUS (cancel, confirm, complete)
export const updateBookingStatus = async (id, status) => {
  try {
    if (!ObjectId.isValid(id)) return null;

    const result = await dbConnect(collections.BOOKINGS).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      }
    );

    return result.modifiedCount > 0;

  } catch (error) {
    console.error("updateBookingStatus error:", error);
    return false;
  }
};
