"use server";
import { dbConnect,collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async () => {
  const services = await dbConnect(collections.SERVICES).find().toArray();
  return services;
};

export const getSingleService = async (id) => {
  try {
    if (!ObjectId.isValid(id)) {
      return null;
    }

    const query = { _id: new ObjectId(id) };

    const service = await dbConnect(collections.SERVICES).findOne(query);

    if (!service) return null;

    return { ...service, _id: service._id.toString() };

  } catch (error) {
    console.error("getSingleService error:", error);
    return null;
  }
};
