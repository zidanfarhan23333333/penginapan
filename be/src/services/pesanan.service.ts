import pesananModel from "../models/pesanan.model";

export const createPesanan = async (payload: any) => {
  return await pesananModel.create(payload);
};

export const findPesananByUser = async (userId: string) => {
  return await pesananModel.find({ userId });
};

export const deletePesanan = async (pesananId: string) => {
  return await pesananModel.findByIdAndDelete(pesananId);
};