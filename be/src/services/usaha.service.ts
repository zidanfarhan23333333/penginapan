import usahaModel from "../models/usaha.model";
import authModel from "../models/auth.model";

export const getAllUsaha = async () => {
  return await usahaModel
    .find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUsahaById = async (usaha_id: string) => {
  return await usahaModel.find({ usaha_id: usaha_id });
};

export const getUsahaAndUpdate = async (id: string, payload: any) => {
  return await usahaModel.findOneAndUpdate(
    {
      usaha_id: id,
    },
    {
      $set: payload,
    }
  );
};

export const insertUsaha = async (payload: any) => {
  return await usahaModel.create(payload);
};

export const getusahaAndDelete = async (id: string) => {
  try {
    return await usahaModel.findOneAndDelete({ usaha_id: id });
  } catch (error) {
    throw error;
  }
};

export const getUsahaFoto = async (id: string) => {
  const usaha = await usahaModel.findOne({ id });
  const usahaFoto = usaha?.foto_usaha;
  return usahaFoto;
};