import pesananModel from "../models/pesanan.model";

export const getAllPesanan = async () => {
  try {
    return await pesananModel.find();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch pesanan");
  }
};

export const createPesanan = async (payload: any) => {
  try {
    return await pesananModel.create(payload);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create pesanan");
  }
};

export const findPesananByUser = async (userId: string) => {
  try {
    return await pesananModel.find({ user_id: userId });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to find pesanan by user");
  }
};

export const deletePesanan = async (pesananId: string) => {
  try {
    return await pesananModel.findByIdAndDelete(pesananId);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete pesanan");
  }
};
